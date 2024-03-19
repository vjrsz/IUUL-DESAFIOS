export default class {
    static _database = {}
    static _database_future = {}

    static all(){
        return Object.values(this._database)
    }

    static save(scheduling){
        if(this._database[scheduling.cpf]) {
            this._database[scheduling.cpf] = []
        }

        this._database[scheduling.cpf].push(scheduling)
        this._database_future[scheduling.cpf] = scheduling
    }

    static getByCpf(cpf){
        return this._database[cpf]

    }

    static getFutureByCpf(cpf){
        return this._database_future[cpf]
    }

    static destroy(scheduling) {
        delete this._database[scheduling.cpf]
    }
}