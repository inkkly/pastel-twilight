ig.module("impact.feature.bgm.bgm-pastel-twilight")
  .requires("impact.feature.bgm.bgm")
  .defines(function () {
    ig.merge(ig.BGM_TRACK_LIST, {
      "lavender-tower": {
        path: "media/bgm/lavender_tower.ogg",
        loopEnd: 88.12,
        volume: 0.8,
      },
    });

    ig.merge(ig.BGM_DEFAULT_TRACKS, {
      lavendertower: {
        field: {
          track: "lavender-tower",
          volume: 1,
        },
        battle: {
            track: "tutorial-battle",
            volume: 1
        },
      },
    });
  });