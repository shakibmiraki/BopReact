import moment from "jalali-moment";

const JalalitoUnix = (shamsiDate) => {
  const gregorian = moment.from(shamsiDate, "fa", "YYYY/M/D").format("YYYY-M-D");
  var unix_date_format = new Date(gregorian).getTime() / 1000;
  return unix_date_format;
};

const unixToJalali = (unix_date) => {
  console.log(unix_date);
  var date = new Date(unix_date * 1000).toDateString();
  const jalaliDate = moment(date, "DDD MMMM DD YYYY").locale("fa");
  return {
    year: parseInt(jalaliDate.format("jYYYY")),
    month: parseInt(jalaliDate.format("jM")),
    day: parseInt(jalaliDate.format("jD")),
  };
};

const unixToJalaliString = (unix_date) => {
  console.log(unix_date);
  var date = new Date(unix_date * 1000).toDateString();
  const jalaliDate = moment(date, "DDD MMMM DD YYYY").locale("fa");
  return `${parseInt(jalaliDate.format("jYYYY"))}/${parseInt(jalaliDate.format("jM"))}/${parseInt(
    jalaliDate.format("jD")
  )}`;
};

export const dateService = {
  JalalitoUnix,
  unixToJalali,
  unixToJalaliString
};
