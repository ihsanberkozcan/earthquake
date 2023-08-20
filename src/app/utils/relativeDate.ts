import moment from "moment";

export const relativeDate = (myDate: string) => {
  return moment.utc(myDate).local().startOf("hour").fromNow();
};
