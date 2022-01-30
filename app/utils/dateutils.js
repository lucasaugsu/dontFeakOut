import moment from "moment";

const shortMonthNames = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
const fullMonthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const zeroPad = (value) => {
  if (value < 10) {
    return `0${value}`;
  }
  return String(value);
}

export default class DateUtils {
  static getShortMonthNameFromDate(date) {
    const newDate = new Date(date);
    return shortMonthNames[newDate.getMonth()];
  }

  static getItemDateFormated(date) {
    date = DateUtils.formatEventDate(date);
    let day = new Date(date).getDate();
    day = day > 9 ? day : `0${day}`;
    const month = DateUtils.getShortMonthNameFromDate(date);
    const year = new Date(date).getFullYear();
    return `${day} ${month} ${year}`;
  }

  static getWeekDayFromDate(date) {
    return weekDays[new Date(date).getUTCDay()];
  }

  /**
   * recebe uma data string no formato aaaa-mm-dd e devolve uma string no formato dd/mm/yyyy
   * @param {string} dateString formato aaaa-mm-dd
   * @returns {string} formato dd/mm/yyyy
   */
  static getDateWithSlashDDMMAAAA(dateString) {
    try {
      if (typeof dateString === 'object') {
        return DateUtils.getDateStringSlashedFromDate(dateString);
      }
      return moment(dateString).format() 
    } catch (error) {
      console.error(`Erro ao converter a data, dado recebido: ${dateString}`);
      return dateString;
    }
  }

  /**
   * recebe uma data string no formato dd/mm/yyyy e devolve uma string no formato yyyy-mm-aa
   * @param {string} dateString formato dd/mm/yyyy
   * @returns {string} formato yyyy-mm-aa
   */
  static getDateWithDashAAAAMMDD(dateString) {
    try {
      const dateArray = dateString.split('/');
      return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`; // ` para debug
    } catch (error) {
      console.error(`Erro ao converter a data, dado recebido: ${dateString}`);
      return dateString;
    }
  }

  static getDateStringSlashedFromDate(date) {
    const dateObj = new Date(date);
    return `${zeroPad(dateObj.getDate())}/${zeroPad(dateObj.getMonth() + 1)}/${dateObj.getFullYear()}`;
  }

  static formatEventDate(date) {
    let showDate = date;
    if (typeof date === 'string') {
      const dateArray = showDate.split('-');
      showDate = new Date(dateArray[0], Number(dateArray[1]) - 1, dateArray[2]);
    }
    return showDate;
  }
}
