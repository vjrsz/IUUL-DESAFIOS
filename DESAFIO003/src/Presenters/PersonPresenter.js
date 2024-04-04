export default class {
    _name;
    _cpf;
    _birthdate;
    _monthlyIncome;
    _maritalStatus;
    _errors;

    constructor(name, cpf, birthdate, monthlyIncome, maritalStatus, errors) {
        this._name = name;
        this._cpf = cpf;
        this._birthdate = birthdate;
        this._monthlyIncome = monthlyIncome;
        this._maritalStatus = maritalStatus;
        this._errors = errors;
    }

    toObject(){
        return {
            "dados" : this,
            "erros" : this._errors.map((obj) => {
                return {"campo" : obj.name, "mensagem" : obj.message};
            })
        }
    }
}