export default class {
    static _database = {}

    static all(){
        return Object.values(this._database)
    }

    static save(client){
        this._database[client.cpf] = client
    }

    static getClientByCPF(cpf){
        return this._database[cpf]
    }

    static destroy(client) {
        delete this._database[client.cpf]
    }
}