import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "paddingBottom": 50
    },
    "main-container": {
        "marginTop": 20
    },
    "img-logo": {
        "width": 150
    },
    "animated": {
        "WebkitAnimationDuration": "1.5s",
        "animationDuration": "1.5s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "fast": {
        "WebkitAnimationDuration": "0.6s",
        "animationDuration": "0.6s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "fadeIn": {
        "animationName": "fadeIn"
    }
});