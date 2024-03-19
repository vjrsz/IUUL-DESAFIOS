import {askToUserWhile, print, println} from "./../view.js";
import CpfValidate from "../../validations/CpfValidate.js";
import DateValidate from "../../validations/DateValidate.js";
import ClientService from "../../services/ClientService.js";
import DateHelper from "../../helpers/DateHelper.js";
import SchedulingService from "../../services/SchedulingService.js";

export function store(){
    let cpf = askToUserWhile("CPF: ", validateCpf)
    let date = askToUserWhile("Data da consulta: ", validateDate)
    let hour_init = askToUserWhile("Hora inicial: ", validateHourInit)
    let hour_end = askToUserWhile("Hora final: ", validateDate)

    println("\nAgendamento realizado com sucesso!")
    return { cpf, date, hour_init, hour_end }
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
    if(!(DateHelper.getMinutesFrom(hour) % 15 === 0)) {
        throw new Error("Erro: hora deve ser de 15 em 15 minutos.")
    }
}


