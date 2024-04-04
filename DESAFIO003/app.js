import PersonGateway from "./src/Gateways/PersonGateway.js";
import PersonController from "./src/Controllers/PersonController.js";
import {readJson, writeJson} from "./src/Helpers/FileHelper.js";
import {convertToDateTime} from "./src/Helpers/DateHelper.js";

const personController = new PersonController()

readJson( (persons) => {
    const responses = []
    persons.forEach((person) => {
        let personGateway = new PersonGateway(person.nome,
                                                            parseInt(person.cpf),
                                                            convertToDateTime(person.dt_nascimento),
                                                            person.renda_mensal,
                                                            person.estado_civil)

        let response = personController.store(personGateway)
        responses.push(response.toObject())
    })
    writeJson("assets/response.json", responses);
})