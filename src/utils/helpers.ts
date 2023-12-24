import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);


// format Date and time
export const formatDate = (date: Date, format='YYYY-MM-DD HH:mm:ss') => {
  if (!date) return ''
  return dayjs(date).tz('Asia/Tokyo').format(format);
}
export const numberWithCommas = (x:any) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
