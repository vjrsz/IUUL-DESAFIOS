import PersonGateway from "./src/Gateways/PersonGateway.js";
import PersonController from "./src/Services/PersonService.js";

const personController = new PersonController()
personController.store(new PersonGateway("junior", 12345678910, "10082004", "5000,00", "C"))