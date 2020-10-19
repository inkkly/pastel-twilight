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