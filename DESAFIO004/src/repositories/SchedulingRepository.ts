import DateHelper from "../helpers/DateHelper.js";

export default class {
    static _database:any = {}

    static all(){
        let schedules:any = []
        Object.values(this._database).forEach((client:any) => {
            client.forEach((scheduling:any) => schedules.push(scheduling))
        })
        return schedules
    }

    static save(scheduling:any){
        if(this._database[scheduling.cpf] === undefined) {
            this._database[scheduling.cpf] = []
        }

        this._database[scheduling.cpf].push(scheduling)
    }

    static getByCpf(cpf:any){
        return this._database[cpf]

    }

    static getFutureByCpf(cpf:any){
        if(this._database[cpf] === undefined) return undefined

        return this._database[cpf].find((scheduling:any) => {
            if (DateHelper.compareTo(scheduling.date) > 0) {
                return true
            }
            return DateHelper.compareTo(scheduling.date) === 0 && DateHelper.compareToHour(scheduling.hourInit) > 0
        })
    }

    static destroy(scheduling:any, date: any, hour: any) {
        let index = this._database[scheduling.cpf].findIndex((s: any) => s.date === scheduling.date && s.hourInit === scheduling.hourInit)

        delete this._database[scheduling.cpf][index]
    }
}