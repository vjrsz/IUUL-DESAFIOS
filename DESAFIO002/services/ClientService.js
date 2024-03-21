import ClientRepository from "../repositories/ClientRepository.js";
import { Client } from "../models/Client.js";
import clientController from "../controllers/ClientController.js";
import SchedulingService from "./SchedulingService.js";

export default class {
    static all(orderBy = "cpf"){
        let clients = ClientRepository.all()

        clients.sort(function (a, b){
            if(a[orderBy] === b[orderBy]) return 0;
            else if(a[orderBy] < b[orderBy]) return -1;
            else if(a[orderBy] > b[orderBy]) return 1;
        })

        clients.map(function (client){
            client.futureScheduling = SchedulingService.getFutureByCPF(client.cpf)
            return client
        })

        return clients
    }

    static store(name, cpf, birthdate){
        let client = new Client(name, cpf, birthdate)
        ClientRepository.save(client)
        return client
    }

    static getClientByCPF(cpf){
        return ClientRepository.getClientByCPF(cpf)
    }

    static destroy(cpf) {
        let client = ClientRepository.getClientByCPF(cpf)
        ClientRepository.destroy(client)
    }
}