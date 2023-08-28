import moment from "moment-timezone";

export const localDate = (myDate: string) => {
    return (moment.utc(myDate).tz("Europe/Istanbul").format("LLL"))
};
