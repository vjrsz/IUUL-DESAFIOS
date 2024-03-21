import DateHelper from "../helpers/DateHelper.js";

export default class {
    static _database = {}

    static all(){
        let schedules = []
        Object.values(this._database).forEach((client) => {
            client.forEach(scheduling => schedules.push(scheduling))
        })
        return schedules
    }

    static save(scheduling){
        if(this._database[scheduling.cpf] === undefined) {
            this._database[scheduling.cpf] = []
        }

        this._database[scheduling.cpf].push(scheduling)
    }

    static getByCpf(cpf){
        return this._database[cpf]

    }

    static getFutureByCpf(cpf){
        if(this._database[cpf] === undefined) return undefined

        return this._database[cpf].find((scheduling) => {
            if (DateHelper.compareTo(scheduling.date) > 0) {
                return true
            }
            return DateHelper.compareTo(scheduling.date) === 0 && DateHelper.compareToHour(scheduling.hourInit) > 0
        })
    }

    static destroy(scheduling, date, hour) {
        let index = this._database[scheduling.cpf].findIndex((s) => s.date === scheduling.date && s.hourInit === scheduling.hourInit)

        delete this._database[scheduling.cpf][index]
    }
}