import DateHelper from "../helpers/DateHelper.js";

export class Client{
    _name
    _cpf
    _birthdate

    constructor(name, cpf, birthdate) {
        this._name = name;
        this._cpf = cpf;
        this._birthdate = birthdate;
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