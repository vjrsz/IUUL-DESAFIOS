import PersonValidator from "../Validators/PersonValidator.js";
import Person from "../Models/Person.js";
import PersonPresenter from "../Presenters/PersonPresenter.js";

export default class {
    _personValidator

    constructor() {
        this._personValidator = new PersonValidator();
    }

    store(name, cpf, birthdate, monthlyIncome, maritalStatus){
        const person = new Person(name, cpf, birthdate, monthlyIncome, maritalStatus);

        const errors = this._personValidator.validate(person.toObject())

        return {
            person : {name, cpf, birthdate, monthlyIncome, maritalStatus},
            errors
        }
    }
}