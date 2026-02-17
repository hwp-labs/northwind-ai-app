import moment from "moment-timezone";

type InputType = Date | string | null;

export const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MONTH_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const QUARTER = ["Q1", "Q2", "Q3", "Q4"];

const transform = (format: string, dt?: InputType) =>
  moment(dt).tz("Africa/Lagos").format(format);

// Sun, Jan 1st, 1970 | 9:00 AM
const publishedDate = (dt?: InputType) => transform("ddd, MMM Do, YYYY | h:mm A", dt);

export const momentUtil = { publishedDate };
