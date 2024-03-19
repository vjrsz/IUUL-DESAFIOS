import ClientRepository from "../repositories/ClientRepository.js";
import { Client } from "../models/Client.js";

export default class {
    static all(orderBy = "cpf"){
        let clients = ClientRepository.all()

        clients.sort(function (a, b){
            if(a[orderBy] === b[orderBy]) return 0;
            else if(a[orderBy] < b[orderBy]) return -1;
            else if(a[orderBy] > b[orderBy]) return 1;
        })

        return clients
    }

    static store(name, cpf, birthdate){
        ClientRepository.save(new Client(name, cpf, birthdate))
    }

    static getClientByCPF(cpf){
        return ClientRepository.getClientByCPF(cpf)
    }

    static destroy(cpf) {
        let client = ClientRepository.getClientByCPF(cpf)
        ClientRepository.destroy(client)
    }
}