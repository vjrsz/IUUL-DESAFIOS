export default class PersonGateway {
    _name;
    _cpf;
    _birthdate;
    _monthlyIncome;
    _maritalStatus;

    constructor(name, cpf, birthdate, monthlyIncome, maritalStatus) {
        this._name = name;
        this._cpf = cpf;
        this._birthdate = birthdate;
        this._monthlyIncome = monthlyIncome;
        this._maritalStatus = maritalStatus;
    }

    clone(){
        return new PersonGateway(this.name, this.cpf, this.birthdate, this.monthlyIncome, this.maritalStatus)
    }

    set name(value) {
        this._name = value;
    }

    set cpf(value) {
        this._cpf = value;
    }

    set birthdate(value) {
        this._birthdate = value;
    }

    set monthlyIncome(value) {
        this._monthlyIncome = value;
    }

    set maritalStatus(value) {
        this._maritalStatus = value;
    }

    get name() {
        return this._name;
    }

    get cpf() {
        return this._cpf;
    }

    get birthdate() {
        return this._birthdate;
    }

    get monthlyIncome() {
        return this._monthlyIncome;
    }

    get maritalStatus() {
        return this._maritalStatus;
    }
}