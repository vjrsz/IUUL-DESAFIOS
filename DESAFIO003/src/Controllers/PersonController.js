import PersonService from "../Services/PersonService.js";
import PersonPresenter from "../Presenters/PersonPresenter.js";

export default class {
    _personService

    constructor() {
        this._personService = new PersonService()
    }

    store(personGateway){
        const {person, errors} = this._personService.store(personGateway.name,
                                personGateway.cpf,
                                personGateway.birthdate,
                                personGateway.monthlyIncome,
                                personGateway.maritalStatus)

        return new PersonPresenter(person.name,
            person.cpf,
            person.birthdate,
            person.monthlyIncome,
            person.maritalStatus,
            errors)
    }
}