import SchedulingRepository from "../repositories/SchedulingRepository.js";
import Scheduling from "../models/Scheduling.js";
import DateHelper from "../helpers/DateHelper.js";
import ClientService from "./ClientService.js";
import scheduling from "../models/Scheduling.js";

export default class {
    static all(){
        let schedules = SchedulingRepository.all()
        schedules.map(scheduling => {
            scheduling.client = ClientService.getClientByCPF(scheduling.cpf)
        })
        return schedules
    }

    static store(cpf, date, hourInit, hourEnd){
        SchedulingRepository.save(new Scheduling(cpf, date, hourInit, hourEnd))
    }

    static getByCpf(cpf){
        return SchedulingRepository.getByCpf(cpf)
    }

    static getFutureByCPF(cpf){
        return SchedulingRepository.getFutureByCpf(cpf)
    }

    static get(cpf, date, hourInit){
        return this.all().find((scheduling) => scheduling.cpf === cpf && scheduling.date === date && scheduling.hourInit === hourInit)
    }

    static clientHasScheduling(cpf){
        return this.getFutureByCPF(cpf) !== undefined
    }

    static destroy(scheduling) {
        SchedulingRepository.destroy(scheduling)
    }

    static verify(date, hourInit, hourEnd) {
        let schedules = SchedulingRepository.all()

        schedules = schedules.filter(schedule => {
            if( DateHelper.compareTo(schedule.date, date) !== 0 ) {
                return false
            } else {
                return (DateHelper.compareToHour(hourInit, schedule.hourInit) >= 0 &&
                        DateHelper.compareToHour(hourInit, schedule.hourEnd) <= 0) ||
                    (DateHelper.compareToHour(hourEnd, schedule.hourInit) >= 0 &&
                    DateHelper.compareToHour(hourEnd, schedule.hourEnd) <= 0)
            }
        })
        return schedules.length === 0;
    }
}