
import DateUtils from "./dateutils";

export default class EventUtils {
  static sortEventsAscending(events) {
    events.forEach((show) => {
      const date = DateUtils.formatEventDate(show.date)
      const zeroPad = (num) => num < 10 ? `0${num}` : `${num}`;
      const dateString = `${date.getFullYear()}${zeroPad(date.getMonth())}${zeroPad(date.getDate())}`;
      Object.assign(show, { date, dateString });
    });
    events.sort((a, b) => a.dateString - b.dateString);
  }
}
