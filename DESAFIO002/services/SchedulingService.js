import SchedulingRepository from "../repositories/SchedulingRepository.js";
import {Client} from "../models/Client.js";

export default class {
    static all(){
        return SchedulingRepository.all()
    }

    static store(name, cpf, birthdate){
        SchedulingRepository.save(new Client(name, cpf, birthdate))
    }

    static clientHasScheduling(cpf){
        return SchedulingRepository.getFutureByCpf(cpf) !== undefined
    }

    static destroy(cpf) {
        let scheduling = SchedulingRepository.getByCpf(cpf)
        SchedulingRepository.destroy(scheduling)
    }
}