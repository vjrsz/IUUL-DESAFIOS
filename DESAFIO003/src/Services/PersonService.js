import PersonValidator from "../Validators/PersonValidator.js";
import Person from "../Models/Person.js";

export default class {
    _personValidator

    constructor() {
        this._personValidator = new PersonValidator();
    }

    store(name, cpf, birthdate, monthlyInsome, maritalStatus){
        const person = new Person(name, cpf, birthdate, monthlyInsome, maritalStatus);

        this._personValidator.validate(person)

        return person
    }
}