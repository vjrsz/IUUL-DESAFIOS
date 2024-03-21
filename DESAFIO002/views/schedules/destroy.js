import {askToUserWhile, println} from "./../view.js";
import CpfValidate from "../../validations/CpfValidate.js";
import ClientService from "../../services/ClientService.js";
import DateValidate from "../../validations/DateValidate.js";
import DateHelper from "../../helpers/DateHelper.js";
import SchedulingService from "../../services/SchedulingService.js";

export function destroy(){
    let scheduling
    while (true){
        let cpf = askToUserWhile("CPF: ", validateCpf)
        let date = askToUserWhile("Data da consulta: ", validateDate)
        let hour = askToUserWhile("Hora inicial: ", validateHour)

        scheduling = SchedulingService.get(cpf, date, hour)
        if(scheduling) {
            break;
        }

        println("Erro: agendamento não encontrado")

    }

    println("\nAgendamento cancelado com sucesso!")

    return scheduling
}

function validateCpf(cpf){
    if( !CpfValidate.validate(cpf) ) {
        throw new Error("Erro: CPF inválido.")
    }
    if( !ClientService.getClientByCPF(cpf) ){
        throw new Error("Erro: paciente não cadastrado.")
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

function validateHour(hour) {
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

