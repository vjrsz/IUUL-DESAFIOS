export default class{
    static calculateDifferenceYears(dateA: string, dateB = this.now()) {
        let splitDateA = this.splitDate(dateA)
        let splitDateB = this.splitDate(dateB)

        const diffDay = splitDateA.day - splitDateB.day
        const diffMonth = splitDateA.month - splitDateB.month
        let diffYear = Math.abs(splitDateA.year - splitDateB.year)

        if(diffMonth > 0 || diffDay > 0){
            diffYear -= 1
        }

        return diffYear
    }

    static compareTo(dateA: string, dateB = this.now()) {
        let splitDateA = this.splitDate(dateA)
        let splitDateB = this.splitDate(dateB)

        if (splitDateA.year !== splitDateB.year) {
            return splitDateA.year - splitDateB.year;
        } else if (splitDateA.month !== splitDateB.month) {
            return splitDateA.month - splitDateB.month;
        } else {
            return splitDateA.day - splitDateB.day;
        }
    }

    static splitDate(date: string){
        const splitDate = date.split('/');
        const year = parseInt(splitDate[2], 10);
        const month = parseInt(splitDate[1], 10);
        const day = parseInt(splitDate[0], 10);

        return {year, month, day};
    }
    static splitHour(Hour: string){
        const splitHour = Hour.split(':');
        const hour = parseInt(splitHour[0], 10);
        const minutes = parseInt(splitHour[1], 10);

        return {hour, minutes};
    }
    static format(date: Date, formatText: string) {
        const map: {} = {
            dd: date.getDate(),
            mm: date.getMonth() + 1,
            aa: date.getFullYear().toString().slice(-2),
            yyyy: date.getFullYear(),
            hh: date.getHours(),
            ii: date.getMinutes(),
        }

        // @ts-ignore
        return formatText.replace(/dd|mm|aa|yyyy|hh|ii/gi, matched => map[matched])
    };

    static now(format = "dd/mm/yyyy"){
        return this.format(new Date(), format)
    }

    static getMinutesFrom(hour: string) {
        return parseInt(String(this.splitHour(hour).minutes));
    }

    static compareToHour(hourA: string, hourB = this.now("hh:ii")) {
        let splitHourA = this.splitHour(hourA)
        let splitHourB = this.splitHour(hourB)

        if (splitHourA.hour !== splitHourB.hour) {
            return splitHourA.hour - splitHourB.hour;
        } else {
            return splitHourA.minutes - splitHourB.minutes;
        }
    }

    static calculateDifferenceHours(hourA: string, hourB: string) {
        let splitHourA = this.splitHour(hourA)
        let splitHourB = this.splitHour(hourB)

        let diffH = splitHourA.hour - splitHourB.hour
        let diffM = splitHourA.minutes - splitHourB.minutes

        if(diffM < 0){
            diffH -= 1
            diffM -= 60
        }

        return `${diffH.toString().padStart(2,'0')}:${diffM.toString().padStart(2,'0')}`
    }
}