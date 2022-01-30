import { Platform } from 'react-native';
import t from 'tcomb-form-native';
import { colors, sizes, defaultFontFamily } from './theme';

const { Form } = t.form;

const defaultFormFieldsStyle = {
  borderWidth: 0,
  borderBottomColor: colors.grey,
  borderBottomWidth: 0.5,
  color: colors.blackOpacity,
  fontSize: sizes.FORM_FONT_SIZE,
  fontFamily: defaultFontFamily,
};

const stylesheet = {
  ...Form.stylesheet,
  textbox: {
    normal: {
      ...Form.stylesheet.textbox.normal,
      ...defaultFormFieldsStyle,
    },
    error: {
      ...Form.stylesheet.textbox.error,
      ...defaultFormFieldsStyle,
    },
    // the style applied when the textbox is not editable
    notEditable: {
      ...Form.stylesheet.textbox.normal,
      ...defaultFormFieldsStyle,
      color: colors.greyishBrown,
    },
  },
  dateValue: {
    normal: {
      ...Form.stylesheet.dateValue.normal,
      ...defaultFormFieldsStyle,
    },
    error: {
      ...Form.stylesheet.dateValue.error,
      ...defaultFormFieldsStyle,
    },
  },
  dateTouchable: {
    ...Form.stylesheet.dateTouchable,
    normal: {
      ...Form.stylesheet.dateTouchable.normal,
      ...defaultFormFieldsStyle,
    },
    error: {
      ...Form.stylesheet.dateTouchable.error,
      ...defaultFormFieldsStyle,
    },
  },
  pickerContainer: {
    ...Form.stylesheet.pickerContainer,
    normal: {
      ...Form.stylesheet.pickerContainer.nomal,
      ...defaultFormFieldsStyle,
      fontSize: undefined,
    },
    error: {
      ...Form.stylesheet.pickerContainer.error,
      ...defaultFormFieldsStyle,
      fontSize: undefined,
    },
  },
  pickerValue: {
    ...Form.stylesheet.pickerValue,
    normal: {
      ...Form.stylesheet.pickerValue.nomal,
      ...defaultFormFieldsStyle,
      fontSize: undefined,
    },
    error: {
      ...Form.stylesheet.pickerValue.error,
      ...defaultFormFieldsStyle,
      fontSize: undefined,
    },
  },
  select: {
    normal: {
      color: colors.blackOpacity,
      borderBottomColor: colors.grey,
      borderBottomWidth: 0.5,
      ...Platform.select({
        ios: {
          fontSize: 12,
          fontFamily: defaultFontFamily,
        },
      }),
    },
    error: {
      color: colors.blackOpacity,
      borderBottomColor: colors.grey,
      borderBottomWidth: 0.5,
      ...Platform.select({
        ios: {
          // estes estilos só podem ser aplicados no ios
          fontSize: 12,
          fontFamily: defaultFontFamily,
        },
      }),
    },
  },
  controlLabel: {
    normal: {
      ...Form.stylesheet.controlLabel.normal,
      color: colors.blackOpacity,
      fontSize: sizes.FORM_FONT_SIZE,
      fontFamily: defaultFontFamily,
      fontWeight: 'normal',
    },
    error: {
      ...Form.stylesheet.controlLabel.error,
      color: colors.blackOpacity,
      fontSize: sizes.FORM_FONT_SIZE,
      fontFamily: defaultFontFamily,
      fontWeight: 'normal',
    },
  },
  formGroupStyle: {
    ...Form.stylesheet.formGroupStyle,
  },
  errorBlock: {
    ...Form.stylesheet.errorBlock,
    fontFamily: defaultFontFamily,
    fontSize: sizes.FORM_FONT_SIZE,
  },
};

export { defaultFormFieldsStyle };

export default stylesheet;
