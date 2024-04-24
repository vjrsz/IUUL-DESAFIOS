import {askToUserWhile, println, readString} from "../view";
import CpfValidate from "../../validations/CpfValidate";
import DateValidate from "../../validations/DateValidate";
import ClientService from "../../services/ClientService";
import DateHelper from "../../helpers/DateHelper";
import SchedulingService from "../../services/SchedulingService";

export async function store() {
    let cpf = await askToUserWhile("CPF: ", validateCpf)
    let date: any, hourInit: any, hourEnd: any
    while (true) {
        date = await askToUserWhile("Data da consulta: ", validateDate)
        hourInit = await askToUserWhile("Hora inicial: ", validateHourInit)
        hourEnd = await askToUserWhile("Hora final: ", (value: any) => {
            return validateHourEnd(value, hourInit)
        }, readString)

        if (SchedulingService.verify(date, hourInit, hourEnd)) {
            break;
        }

        println("\nErro: já existe uma consulta agendada nesse horário.\n")
    }
    println("\nAgendamento realizado com sucesso!")
    return {cpf, date, hourInit, hourEnd}
}

function validateCpf(cpf: any){
    if( !CpfValidate.validate(cpf) ) {
        throw new Error("Erro: CPF inválido.")
    }
    if( !ClientService.getClientByCPF(cpf) ){
        throw new Error("Erro: CPF não cadastrado.")
    }
    if( SchedulingService.clientHasScheduling(cpf) ){
        throw new Error("Erro: paciente está agendado..")
    }
}

function validateDate(date: any) {
    if(!DateValidate.validate(date)) {
        throw new Error("Erro: data inválida.")
    }
    if(DateHelper.compareTo(date) < 0) {
        throw new Error("Erro: data deve ser maior ou igual a data atual")
    }
}

function validateHourInit(hour: any) {
    if(!DateValidate.validateHour(hour)) {
        throw new Error("Erro: hora inválida.")
    }
    if(DateHelper.getMinutesFrom(hour) % 15 !== 0) {
        throw new Error("Erro: hora deve ser de 15 em 15 minutos.")
    }
    if(DateHelper.compareToHour(hour, "08:00") < 0) {
        throw new Error("Erro: horário de funcionamento do consultório é das 8:00h às 19:00h.")
    }
}

function validateHourEnd(hour: any, hourInit: any) {
    if(!DateValidate.validateHour(hour)) {
        throw new Error("Erro: hora inválida.")
    }
    if(DateHelper.getMinutesFrom(hour) % 15 !== 0) {
        throw new Error("Erro: hora deve ser de 15 em 15 minutos.")
    }
    if(DateHelper.compareToHour(hour, "19:00") > 0) {
        throw new Error("Erro: horário de funcionamento do consultório é das 8:00h às 19:00h.")
    }
    if(DateHelper.compareToHour(hour, hourInit) <= 0) {
        throw new Error("Erro: hora final deve ser maior que a hora inicial.")
    }
}


