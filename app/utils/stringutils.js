export default class StringUtils {
  static capitalize = (str) => {
    return str && String(str).replace(' ', s => s.toUpperCase());
  }

  static getDecimalPart = (numberValue) => {
    if (Math.floor(numberValue) === numberValue) return '00';
    return numberValue.toFixed(2).split('.')[1] || '00';
  }

  static getIntegerPart = numberValue => numberValue.toString().split('.')[0];
}
