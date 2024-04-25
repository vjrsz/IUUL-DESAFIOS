import {ModelStatic} from "sequelize";
import {default as ClientData} from "../database/models/Client";
import {Client} from "../models/Client";

export default class {
    static _model: ModelStatic<ClientData> = ClientData
    static _database = {}

    static async all() {
        let arr: [...any] = []
        await this._model.findAll().then((clients: ClientData[]) => {
            clients.forEach((client: any) => {
                arr.push(new Client(client.name, client.cpf, client.birthdate))
            })
        })
        return arr
    }

    static save(client: any) {
        return this._model.create({
            name: client.name,
            cpf: client.cpf,
            birthdate: client.birthdate
        })
    }

    static async getClientByCPF(cpf: any) {
        let response: any

        // @ts-ignore
        await this._model.findOne({cpf: cpf}).then((client: any) => {
            response = new Client(client.name, client.cpf, client.birthdate)
        })
        return response
    }

    static async destroy(cpf:any) {
        // @ts-ignore
        this._model.findOne({
            where:{
                cpf: cpf
            }
        }).then((client: any) => {client.destroy()})
    }
}