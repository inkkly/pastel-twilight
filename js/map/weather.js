ig.module("impact.feature.weather.pastwi-weather").requires("impact.feature.weather.weather").defines(function () {

    ig.WEATHER_TYPES.TWILIGHT_CITY_INNER = {
        lightMapDarkness: 0.6,
        particles: [{
            type: "DARK_DUST",
            quantity: 3
        }],
        glowColor: "#211a2e"
    };
    ig.WEATHER_TYPES.TWILIGHT_CITY = {
        whiteCorners: {
            alpha: 0.16,
            time: 2,
            blinkAlpha: 0.25
        },
        rain: ig.RAIN_STRENGTH.MEDIUM,
        fog: {
            alpha: 0.4,
            vel: {
                x: 85,
                y: 30
            },
            zoom: 1
        },
        glowColor: "#301620"
    };

});