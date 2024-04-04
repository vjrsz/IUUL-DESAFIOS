export default class {
    _name
    _cpf
    _birthdate
    _monthlyIncome
    _maritalStatus

    constructor(name, cpf, birthdate, monthlyIncome, maritalStatus) {
        this._name = name;
        this._cpf = cpf;
        this._birthdate = birthdate;
        this._monthlyIncome = monthlyIncome;
        this._maritalStatus = maritalStatus;
    }

    toObject(){
        return {
            "name" : this.name,
            "cpf" : this.cpf,
            "birthdate" : this.birthdate,
            "monthlyIncome" : this.monthlyIncome,
            "maritalStatus" : this.maritalStatus
        }
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(value) {
        this._cpf = value;
    }

    get birthdate() {
        return this._birthdate;
    }

    set birthdate(value) {
        this._birthdate = value;
    }

    get monthlyIncome() {
        return this._monthlyIncome;
    }

    set monthlyIncome(value) {
        this._monthlyIncome = value;
    }

    get maritalStatus() {
        return this._maritalStatus;
    }

    set maritalStatus(value) {
        this._maritalStatus = value;
    }
}