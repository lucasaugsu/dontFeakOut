import { Dimensions, StyleSheet } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const colors = {
  newDarkestBlue: '#213443',
  darkestBlue: '#1B4F5C',
  darkBlue: '#00b4b2',
  darkRed: '#d84c4c',
  errorRed: '#a94442',
  failRed: '#c90000',
  darkYellow: '#f8d732',
  blueWithOpacity: '#9ED9DA',
  redWithOpacity: '#F59597',
  yellowWithOpacity: '#FEE36F',
  green: '#7CC242',
  successGreen: '#417505',
  grayLight: '#d8d8d8',
  grey: '#707070',
  darkGrey: '#868686',
  warmGrey: '#9b9b9b',
  link: '#45ACDF',
  white: '#FFFFFF',
  black: '#000000',
  fbColor: '#4468B0',
  darkGreen: '#1C4F5B',
  orange: '#F29340',
  lightGrey: '#f2f2f2',
  greyishBrown: '#4a4a4a',
  paleGrey: '#dee0e6',
  violet: '#FF1DDC',
  vividPurple: '#9013fe',
  newPurple: '#8d38cd',
  charcoalGrey: '#353b50',
  contentLoaderSecondaryColor: '#dee0e6',
  contentLoaderPrimaryColor: '#f2f2f2',
  blackOpacity: 'rgba(0, 0, 0, 0.38)',
  havelockBlue: '#4A90E2',
  dividerLine: '#D9D9D9',

  modalOverlay03: 'rgba(0, 0, 0, 0.3)',
  modalOverlay06: 'rgba(0, 0, 0, 0.6)',
};

export const defaultFontFamily = 'montserrat';
export const defaultFontFamilyBold = 'montserrat_bold';

export const sizes = {
  MAIN_ICON:35,
  MEDIUM_ICON:25,
  ICON_SIZE: 20,
  COMMON_SPACE: 15,
  FORM_FONT_SIZE: 16,
  TITLE_SIZE:18,
  SUBTITLE_SIZE:16,
  SECONDARY_SUBTITLE:14,
};

export const defaultStyles = StyleSheet.create({
  lineBorder: {
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 0.7,
  },
  fnt12: {
    fontSize: 12,
  },
  fnt14: {
    fontSize: 14,
  },
  fnt16: {
    fontSize: 16,
  },
  font18: {
    fontSize: 18,
  },
  fntBold: {
    fontFamily: defaultFontFamilyBold,
  },
  fntNormal: {
    fontFamily: defaultFontFamily,
  },
});
