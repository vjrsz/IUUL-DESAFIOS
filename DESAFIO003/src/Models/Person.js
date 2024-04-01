export default class {
    _name
    _cpf
    _birthdate
    _montlyInsome
    _maritalStatus

    constructor(name, cpf, birthdate, montlyInsome, maritalStatus) {
        this._name = name;
        this._cpf = cpf;
        this._birthdate = birthdate;
        this._montlyInsome = montlyInsome;
        this._maritalStatus = maritalStatus;
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

    get montlyInsome() {
        return this._montlyInsome;
    }

    set montlyInsome(value) {
        this._montlyInsome = value;
    }

    get maritalStatus() {
        return this._maritalStatus;
    }

    set maritalStatus(value) {
        this._maritalStatus = value;
    }
}