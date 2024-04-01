import {askToUserWhile, println, readString} from "./../view.js";
import CpfValidate from "../../validations/CpfValidate.js";
import DateValidate from "../../validations/DateValidate.js";
import ClientService from "../../services/ClientService.js";
import DateHelper from "../../helpers/DateHelper.js";
import SchedulingService from "../../services/SchedulingService.js";

export function store(){
    let cpf = askToUserWhile("CPF: ", validateCpf)
    let date, hourInit, hourEnd
    while (true){
        date = askToUserWhile("Data da consulta: ", validateDate)
        hourInit = askToUserWhile("Hora inicial: ", validateHourInit)
        hourEnd = askToUserWhile("Hora final: ", (value) => {
            return validateHourEnd(value, hourInit)
        }, readString)

        if (SchedulingService.verify(date, hourInit, hourEnd)){
            break;
        }

        println("\nErro: já existe uma consulta agendada nesse horário.\n")
    }
    println("\nAgendamento realizado com sucesso!")
    return { cpf, date, hourInit, hourEnd }
}

function validateCpf(cpf){
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

function validateDate(date) {
    if(!DateValidate.validate(date)) {
        throw new Error("Erro: data inválida.")
    }
    if(DateHelper.compareTo(date) < 0) {
        throw new Error("Erro: data deve ser maior ou igual a data atual")
    }
}

function validateHourInit(hour) {
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

function validateHourEnd(hour, hourInit) {
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


