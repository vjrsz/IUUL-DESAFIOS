import DateHelper from "../helpers/DateHelper";

export default class {
    static validate(date: string){
        const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!regexData.test(date)) {
            return false;
        }
        const splitDate = DateHelper.splitDate(date)
        return !(splitDate.month < 1 || splitDate.month > 12 || splitDate.day < 1 || splitDate.day > this.daysOnMonth(splitDate.month, splitDate.year));
    }
    static validateHour(hour: string){
        const regexData = /^\d{2}:\d{2}$/;
        if (!regexData.test(hour)) {
            return false;
        }
        const splitHour = DateHelper.splitHour(hour)
        return !(splitHour.hour >= 23 || splitHour.minutes >= 59);
    }
    static daysOnMonth(month:number, year:number) {
        return new Date(year, month, 0).getDate();
    }
}