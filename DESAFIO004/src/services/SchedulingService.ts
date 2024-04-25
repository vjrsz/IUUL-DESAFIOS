import SchedulingRepository from "../repositories/SchedulingRepository";
import Scheduling from "../models/Scheduling";
import DateHelper from "../helpers/DateHelper";
import ClientService from "./ClientService";
import scheduling from "../models/Scheduling";

export default class {
    static all(){
        let schedules = SchedulingRepository.all()
        schedules.map((scheduling:any) => {
            scheduling.client = ClientService.getClientByCPF(scheduling.cpf)
        })
        return schedules
    }

    static store(cpf:any, date:any, hourInit:any, hourEnd:any){
        SchedulingRepository.save(new Scheduling(cpf, date, hourInit, hourEnd))
    }

    static getByCpf(cpf:any){
        return SchedulingRepository.getByCpf(cpf)
    }

    static getFutureByCPF(cpf:any){
        return SchedulingRepository.getFutureByCpf(cpf)
    }

    static get(cpf:any, date:any, hourInit:any){
        return this.all().find((scheduling:any) => scheduling.cpf === cpf && scheduling.date === date && scheduling.hourInit === hourInit)
    }

    static clientHasScheduling(cpf:any){
        return this.getFutureByCPF(cpf) !== undefined
    }

    static destroy(scheduling:any) {
        // @ts-ignore
        SchedulingRepository.destroy(scheduling)
    }

    static verify(date:any, hourInit:any, hourEnd:any) {
        let schedules = SchedulingRepository.all()

        schedules = schedules.filter((schedule:any) => {
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