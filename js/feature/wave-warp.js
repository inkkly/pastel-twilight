ig.module("game.feature.puzzle.entities.wave-warp").requires("impact.base.entity", "impact.feature.effect.effect-sheet", "game.feature.combat.combat-target-event").defines(function() {
    var b = Vec2.create(),
        a = Vec2.create(),
        d = Vec2.create();
    sc.COMBAT_ENEMY_EVENT.WAVE_WARP = {
        _wm: {
            attributes: {
                angle: {
                    _type: "Number",
                    _info: "Minimum angle different between vectors pointing to old and new target position. 0.5= at least 90 degree difference. 1.0= essentially impossible (180 degree)"
                }
            }
        },
        check: function(b, e,
            f, g) {
            e = ig.CollTools.getDistVec2(b.coll, e.coll, a);
            b = b.getCenter(d);
            Vec2.sub(b, f.newPos);
            Vec2.flip(b);
            return Vec2.angle(e, b) >= g.angle * Math.PI
        }
    };
    ig.ENTITY.WaveWarp = ig.AnimatedEntity.extend({
        effects: {
            sheet: new ig.EffectSheet("puzzle.wave-teleport"),
            handle: null,
            hideHandle: null
        },
        teleportTimer: 0,
        teleportTarget: [],
        _wm: new ig.Config({
            spawnable: true,
            attributes: {
                spawnCondition: {
                    _type: "VarCondition",
                    _info: "Condition for Enemy to spawn",
                    _popup: true
                },
                entity: {
                    _type: "Entity",
                    _info: "Partnered warp entity"
                }
            }
        }),
        permaRemove: false,
        delayedHide: false,
        init: function(a,
            b, d, g) {
            this.parent(a, b, d, g);
            this.coll.type = ig.COLLTYPE.TRIGGER;
            this.coll.setSize(16, 16, 24);
            this.coll.shadow.size = 16;
            this.coll.zGravityFactor = 9001;
            this.coll.setPadding(4, 4);
            this.entity = g.entity || null;
            ig.warn(ig.Event.getEntity(this.entity));
            this.initAnimations({
                shapeType: "Y_FLAT",
                offset: {
                    x: 0,
                    y: -4,
                    z: 8
                },
                sheet: {
                    src: "media/entity/objects/object-effects.png",
                    width: 24,
                    height: 24,
                    xCount: 5,
                    offX: 128,
                    offY: 40
                },
                SUB: [{
                    name: "idle",
                    time: 0.1,
                    frames: [0],
                    repeat: true,
                    framesAlpha: [0.5]
                }, {
                    name: "idle",
                    time: 0.133,
                    frames: [1, 2, 3, 4],
                    repeat: true,
                    renderMode: "lighter"
                }]
            });
            this.setCurrentAnim("idle")
        },
        show: function(a) {
            this.parent(a);
            if (this.effects.hideHandle) {
                this.effects.hideHandle.stop();
                this.effects.hideHandle = null
            }
            if (!a) {
                this.animState.alpha = 0;
                this.effects.sheet.spawnOnTarget("appear", this, {
                    align: ig.ENTITY_ALIGN.CENTER
                })
            }
        },
        onActionEndDetach: function() {
            this.effects.hideHandle = this.effects.sheet.spawnOnTarget("disappear", this, {
                align: ig.ENTITY_ALIGN.CENTER,
                callback: this
            });
            this.permaRemove = true
        },
        onHideRequest: function() {
            this.effects.hideHandle = this.effects.sheet.spawnOnTarget("disappear", this, {
                align: ig.ENTITY_ALIGN.CENTER,
                callback: this
            })
        },
        onEffectEvent: function(a) {
            if (a.isDone() && this.effects.hideHandle) {
                this.effects.hideHandle = null;
                this.teleportTimer ? this.delayedHide = true : this.permaRemove ? this.kill() : this.hide()
            }
        },
        startTeleport: function(a) {
        this.teleportTarget = a;
        var w = ig.Event.getEntity(this.entity);

            d = new ig.Action("waveWarpAction", [{
                type: "WAIT",
                time: -1
            }]);
            d.eventAction = true;
                var f = this.teleportTarget,
                    g = f.getCenter(b);
                this.effects.sheet.spawnFixed("trail", g.x, g.y, f.coll.pos.z + 12, null, {
                    target2: w,
                    target2Align: ig.ENTITY_ALIGN.CENTER
                });
                this.effects.sheet.spawnOnTarget("hide", f, {
                    target2: w,
                    target2Align: ig.ENTITY_ALIGN.CENTER
                });
                if (f instanceof ig.ENTITY.Combatant) {
                    f.invincibleTimer = -1;
                    f.setAction(d)
                }
                f.onTeleportStart && f.onTeleportStart(this);
            this.teleportTimer = 0.1
        },
        doTeleport: function() {
            d = new ig.Action("waveWarpAction", [{
                    type: "WAIT",
                    time: 0
                }]); 
                var h = this.teleportTarget;
                    i = ig.Event.getEntity(this.entity).getCenter(b);
                if (h instanceof ig.ENTITY.Combatant) h.invincibleTimer = 0;
                if (h instanceof sc.PartyMemberEntity) h.resetPos();
                if (h.isBall) {
                    ig.warn("BALLS");
                    h.resetTime();
                    h.resetBounceCount();
                    h.cleanDirection(0.025);
                    h.setPos(i.x, i.y, i.z);
                }
                else {
                    for (var j = ig.game.getEntitiesOnTop(h), k = i.x - h.coll.size.x / 2, i = i.y - h.coll.size.y / 2, l = this.coll.pos.z + a, o = j.length; o--;)
                    {
                        if (j[o] instanceof ig.ENTITY.WavePushPullBlock) j[o].coll.setGroundEntry(null);
                        else {
                            this.effects.sheet.spawnOnTarget("show", j[o]);
                            var m = j[o].coll;
                            m.setGroundEntry(null);
                            m.setPos(m.pos.x + k - h.coll.pos.x, m.pos.y + i - h.coll.pos.y, m.pos.z + l - h.coll.pos.z)
                        } l = h.getTeleportZOffset ? l + h.getTeleportZOffset() : l + h.coll.float.height;
                    h.setPos(k, i, l);
                    a = a + h.coll.size.z
                    }
                }
                if (h.isPlayer) {
                    ig.camera.isActiveTarget(h.cameraHandle) &&
                        ig.camera.retarget("FASTER", KEY_SPLINES.EASE_IN_OUT);
                    d.eventAction = true
                }
                this.effects.sheet.spawnOnTarget("show", h);
                h.setAction && h.setAction(d);
                this.teleportTarget = null;
        },
        update: function() {
            this.animState.angle = this.animState.angle + ig.system.tick * 1;
            if (this.teleportTimer) {
                this.teleportTimer = this.teleportTimer - ig.system.tick;
                if (this.teleportTimer <= 0) {
                    this.teleportTimer = 0;
                    this.doTeleport();
                    if (this.delayedHide) {
                        this.delayedHide = true;
                        this.permaRemove ? this.kill() : this.hide()
                    }
                }
            }
            this.parent()
        },
        hasBlockOnTop: function() {
            for (var a = this.coll, a = ig.game.getEntitiesInRectangle(a.pos.x - 8, a.pos.y - 8, a.pos.z, a.size.x + 16, a.size.y + 16, a.size.z, this), b = a.length; b--;) {
                var d = a[b];
                if (d instanceof ig.ENTITY.WavePushPullBlock || d instanceof ig.ENTITY.PushPullBlock || d instanceof sc.FerroEntity) return true
            }
            return false
        },
        ballHit: function(a) {
            var b = a.getHitCenter(this),
                d = a.getElement();
            if (this.hasBlockOnTop()) return false;
            var g = (a.isBall || a instanceof sc.CompressedWaveEntity) && a.getCombatantRoot().isPlayer;
            if ((!a.isBall ||
                    a.attackInfo.hasHint("CHARGED")) && g && d == sc.ELEMENT.WAVE && !this.teleportTimer && ig.Event.getEntity(this.entity)) {
                d = a.entityAttached;
                for (var g = d.length; g--;) {
                    if (d[g].doTeleport) {
                        this.teleportTarget = d[g];
                        d.splice(g, 1)
                    }} 
                if (this.teleportTarget == null && a.isBall && !ig.EntityTools.isInScreen(this, 32) || 
                this.teleportTarget == null && ig.game.playerEntity.currentAction && ig.game.playerEntity.currentAction.eventAction) return false;
                sc.combat.showHitEffect(this,
                    b, sc.ATTACK_TYPE.NONE, a.getElement(), false, false, true);
                this.startTeleport(a);
                return false
            }
            return false
        },
        isBallDestroyer: function(a, b, d) {
         return false;
        }
    })
});