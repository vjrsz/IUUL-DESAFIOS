export default class {
    _name;
    _cpf;
    _birthdate;
    _montlyInsome;
    _maritalStatus;

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

    get cpf() {
        return this._cpf;
    }

    get birthdate() {
        return this._birthdate;
    }

    get montlyInsome() {
        return this._montlyInsome;
    }

    get maritalStatus() {
        return this._maritalStatus;
    }
}