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
    "animated": {
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "fast": {
        "WebkitAnimationDuration": "0.4s",
        "animationDuration": "0.4s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "fadeIn": {
        "animationName": "fadeIn"
    }
});