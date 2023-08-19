import moment from "moment";

export const relativeDate = (myDate: string) => {
  return moment(myDate).startOf("hour").fromNow();
};
