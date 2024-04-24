import DateHelper from "../helpers/DateHelper.js";

export class Client{
    _name:any
    _cpf:any
    _birthdate:any
    _schedules:any
    _futureScheduling:any

    constructor(name:any, cpf:any, birthdate:any) {
        this._name = name;
        this._cpf = cpf;
        this._birthdate = birthdate;
        this._schedules = []
        this._futureScheduling = undefined
    }

    get futureScheduling() {
        return this._futureScheduling;
    }

    set futureScheduling(value) {
        this._futureScheduling = value;
    }

    get schedules() {
        return this._schedules;
    }

    set schedules(value) {
        this._schedules = value;
    }

    get age(){
        return DateHelper.calculateDifferenceYears(this.birthdate).toString()
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(value) {
        this._cpf = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get birthdate() {
        return this._birthdate;
    }

    set birthdate(value) {
        this._birthdate = value;
    }
}