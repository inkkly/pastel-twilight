ig.MapStyle.registerStyle("twilight-city", "map", {
    sheet: "media/entity/style/twilight-city-map.png",
    hasDoorMat: false,
    doorGlow: {
        x: 128,
        y: 0,
        xCount: 1
    },
    teleportField: {
        x: 0,
        y: 48,
        xCount: 3,
        zHeight: 0
    }
});
ig.MapStyle.registerStyle("twilight-city-inner", "map", {
    sheet: "media/entity/style/twilight-interior-map.png",
    hasDoorMat: true,
    stairDoor: {
        x: 160,
        y: 0
    },
    doorVariations: {
        metal: {
            x: 160,
            y: 48
        },
        elevator: {
            x: 160,
            y: 96
        }
    },
    teleportField: {
        x: 0,
        y: 160,
        xCount: 3,
        zHeight: 0
    }
});
ig.MapStyle.registerStyle("eldritch", "map", {
    sheet: "media/entity/style/eldritch-map.png",
    hasDoorMat: false,
    teleportField: {
        x: 0,
        y: 48,
        xCount: 3,
        zHeight: 0
    },
    doorGlow: {
        x: 128,
        y: 0,
        xCount: 1
    }
});

ig.MapStyle.registerStyle("pastel-dng",
    "map", {
        sheet: "media/entity/style/pastel-dng-map.png",
        hasDoorMat: true,
        teleportField: {
            x: 0,
            y: 160,
            xCount: 3,
            zHeight: 0
        }
    });
ig.MapStyle.registerStyle("pastel-dng", "puzzle", {
    sheet: "media/entity/style/pastel-dng-puzzle.png"
});
ig.MapStyle.registerStyle("pastel-dng", "puzzle2", {
    sheet: "media/entity/style/pastel-dng-puzzle-2.png"
});
ig.MapStyle.registerStyle("pastel-dng", "pipes", {
    sheet: "media/map/pastel-dng.png",
    x: 0,
    y: 576
});
ig.MapStyle.registerStyle("pastel-dng", "pipeSwitch", {
    sheet: "media/map/pastel-dng.png",
    x: 48,
    y: 640
});
ig.MapStyle.registerStyle("pastel-dng", "propeller", {
    sheet: "media/map/pastel-dng.png",
    x: 0,
    y: 688
});
ig.MapStyle.registerStyle("pastel-dng", "destruct", {
    sheet: "media/entity/style/pastel-dng-destruct.png"
});
ig.MapStyle.registerStyle("pastel-dng", "magnet", {
    sheet: "media/map/pastel-dng.png",
    x: 112,
    y: 576
});
ig.MapStyle.registerStyle("pastel-dng", "tesla", {
    sheet: "media/map/pastel-dng.png",
    x: 144,
    y: 608
});
ig.MapStyle.registerStyle("pastel-dng", "teslaSwitch", {
    sheet: "media/map/pastel-dng.png",
    x: 112,
    y: 608
});
ig.MapStyle.registerStyle("pastel-dng", "anticompressor", {
    sheet: "media/map/pastel-dng.png",
    x: 144,
    y: 656
});
ig.MapStyle.registerStyle("pastel-dng",
    "dynPlatformSmall", {
        sheet: "media/map/pastel-dng.png",
        x: 408,
        y: 672
    });
ig.MapStyle.registerStyle("pastel-dng", "dynPlatformMedium", {
    sheet: "media/map/pastel-dng.png",
    x: 360,
    y: 672
});
ig.MapStyle.registerStyle("pastel-dng", "effect", {
    sheet: "area.pastel-dng"
});
ig.MapStyle.registerStyle("pastel-dng", "rotateBlocker", {
    sheet: "media/map/pastel-dng.png",
    x: 192,
    y: 608
});
ig.MapStyle.registerStyle("pastel-dng", "waveSwitch", {
    sheet: "media/map/pastel-dng.png",
    x: 192,
    y: 672
});
ig.MapStyle.registerStyle("pastel-dng", "waveblock", {
    sheet: "media/map/pastel-dng.png",
    x: 288,
    y: 608
});
ig.MapStyle.registerStyle("pastel-dng",
    "bouncer", {
        sheet: "media/map/pastel-dng.png",
        x: 320,
        y: 576
    });
ig.MapStyle.registerStyle("pastel-dng", "coals", {
    sheet: "media/map/pastel-dng.png",
    x: 448,
    y: 176
});