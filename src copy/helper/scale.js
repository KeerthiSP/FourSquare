// This file exports 3 functions that are useful to resize views to correctly
// fit for a given screen.
// Ref:https://blog.solutotlv.com/size-matters/
// Usage example:
// import { scale, moderateScale, verticalScale} from './scale';
// const styles = StyleSheet.create({
//     ...
//     box: {
//         width: moderateScale(300),
//         height: verticalScale(450),
//         padding: scale(10),
//         ...
//     },
//     title: {
//         fontSize: moderateScale(20, 0.4),
//         marginBottom: scale(10),
//         ...
//     },
//     text: {
//         fontSize: moderateScale(14),
//         ...
//     },
//     button: {
//         width: moderateScale(150, 0.3),
//         height: moderateScale(45, 0.3),
//         marginBottom: moderateScale(10),
//         ...
//     },
//     buttonText: {
//         fontSize: moderateScale(14),
//         ...
//     }
// });

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Guideline sizes are based on the designs for iPhone X screen mobile device
// iPhone X Resolution: 375 x 812 dp.
const guidelineBaseWidth = 358;
const guidelineBaseHeight = 592;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
