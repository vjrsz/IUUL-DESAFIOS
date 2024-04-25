import ClientRepository from "../repositories/ClientRepository";
import { Client } from "../models/Client";
import SchedulingService from "./SchedulingService";

export default class {
    static async all(orderBy = "cpf") {
        let clients = await ClientRepository.all()

        // @ts-ignore
        clients.sort(function (a: any, b: any) {
            if (a[orderBy] === b[orderBy]) return 0;
            else if (a[orderBy] < b[orderBy]) return -1;
            else if (a[orderBy] > b[orderBy]) return 1;
        })

        clients.map(function (client: any) {
            client.futureScheduling = SchedulingService.getFutureByCPF(client.cpf)
            return client
        })

        return clients
    }

    static store(name: any, cpf: any, birthdate: any){
        let client = new Client(name, cpf, birthdate)
        ClientRepository.save(client)
        return client
    }

    static async getClientByCPF(cpf: any) {
        return await ClientRepository.getClientByCPF(cpf)
    }

    static async destroy(cpf: any) {
        ClientRepository.destroy(cpf)
    }
}