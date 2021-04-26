import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = size =>
  (shortDimension / guidelineBaseWidth) * (size || 0);
export const verticalScale = size =>
  (longDimension / guidelineBaseHeight) * (size || 0);
export const moderateScale = (size, factor = 0.5) =>
  (size || 0) + (scale(size) - (size || 0)) * factor;
export const moderateVerticalScale = (size, factor = 0.5) =>
  (size || 0) + (verticalScale(size) - (size || 0)) * factor;

/** Check device IPhoneX */
export const isIphoneX = () => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
};

export const ifIphoneX = (iphoneXStyle, regularStyle) => {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
};

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
