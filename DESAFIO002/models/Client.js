class Client {
    _cpf
    _name
    _birthdate

    constructor(cpf, name, birthdate) {
        this._cpf = cpf;
        this._name = name;
        this._birthdate = birthdate;
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