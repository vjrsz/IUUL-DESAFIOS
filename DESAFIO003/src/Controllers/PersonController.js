import PersonService from "../Services/PersonService.js";

class PersonController {
    _personService

    constructor() {
        this.personService = new PersonService()
    }

    store(personGateway){
        this.personService.store(personGateway.name,
                                personGateway.cpf,
                                personGateway.birthdate,
                                personGateway.birthdate,
                                personGateway.montlyInsome,
                                personGateway.maritalStatus)
    }
}