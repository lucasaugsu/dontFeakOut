import axiosInstance from '../services/common/connectorservice';

const shortMonthNames = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
const fullMonthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const fullWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const shortWeekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
const defaultImage = require('../../assets/images/FOTO-PERFIL-APPFEST.jpg')
const addFriendImage = require('../../assets/images/add-friend.png')
const awaitingConfirmationImage = require('../../assets/images/awaiting-confirmation-friendship.png')

export default class Utils {
  static getRandomColor = () => {
    const randomColors = ['#751ac5', '#bd10e0', '#9013fe', '#ff3232'];
    return randomColors[Math.floor(Math.random() * (randomColors.length - 1))];
  }
  static getFullWeekDay = (value) => {
    return fullWeekDays[value]
  }
  static getShortWeekDay = (value) => {
    return shortWeekDays[value]
  }
  static getShortMonth = (value) => {
    return shortMonthNames[value]
  }
  static getMonth = (value) => {
    return fullMonthNames[value]
  }
  static defaultUserImage = () => {
    return defaultImage
  }
  static addFriendImage = () => {
    return addFriendImage
  }
  static awaitingConfirmationImage = () => {
    return awaitingConfirmationImage
  }
}

export async function getPaymentMethods(){
  return axiosInstance.get('/payments/all/ways')
}


export function groupBy(list, func, keyValidator){
  let map = [];
  list.forEach((item) => {
      let key = func(item);
      
      let i = -1;
      map.forEach((mapItem, index) => {
          if(i === -1 && (
              (mapItem[0] === key) ||
              (keyValidator && mapItem[0][keyValidator] === key[keyValidator])
              )) i = index;
      })

      if(i === -1) map.push([key, [item]])
      else map[i][1].push(item);
  })

  return map;
}