export default class {
    static validate(date){
        const regexData = /^\d{2}\/\d{2}\/\d{4}$/;

        if (!regexData.test(date)) {
            return false;
        }

        const splitDate = this.splitDate(date)

        const yearActual = new Date().getFullYear();

        if (splitDate.year < 1900 || splitDate.year > yearActual) {
            return false;
        }

        return !(splitDate.month < 1 || splitDate.month > 12 || splitDate.day < 1 || splitDate.day > this.daysOnMonth(splitDate.month, splitDate.year));
    }

    static daysOnMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    static minYears(date, year) {
        let splitDate = this.splitDate(date)
        const dateObj = new Date(splitDate.year, splitDate.month, splitDate.day);
        const differenceMS = Date.now() - dateObj.getTime();
        const years = new Date(differenceMS).getFullYear() - 1970;
        return years >= year;
    }

    static splitDate(date){
        const splitDate = date.split('/');
        const year = parseInt(splitDate[2], 10);
        const month = parseInt(splitDate[1], 10) - 1;
        const day = parseInt(splitDate[0], 10);

        return {'year' : year, 'month' : month, 'day' : day};
    }
}