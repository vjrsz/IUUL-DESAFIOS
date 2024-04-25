import {askToUserWhile, println} from "../view";
import CpfValidate from "../../validations/CpfValidate";
import ClientService from "../../services/ClientService";
import DateValidate from "../../validations/DateValidate";
import DateHelper from "../../helpers/DateHelper";
import SchedulingService from "../../services/SchedulingService";

export async function destroy() {
    let scheduling
    while (true) {
        let cpf = await askToUserWhile("CPF: ", validateCpf)
        let date = await askToUserWhile("Data da consulta: ", validateDate)
        let hour = await askToUserWhile("Hora inicial: ", validateHour)

        scheduling = SchedulingService.get(cpf, date, hour)
        if (scheduling) {
            break;
        }

        println("Erro: agendamento não encontrado")

    }

    println("\nAgendamento cancelado com sucesso!")

    return scheduling
}

function validateCpf(cpf:string){
    if( !CpfValidate.validate(cpf) ) {
        throw new Error("Erro: CPF inválido.")
    }
    if( !ClientService.getClientByCPF(cpf) ){
        throw new Error("Erro: paciente não cadastrado.")
    }
}

function validateDate(date:string) {
    if(!DateValidate.validate(date)) {
        throw new Error("Erro: data inválida.")
    }
    if(DateHelper.compareTo(date) < 0) {
        throw new Error("Erro: data deve ser maior ou igual a data atual")
    }
}

function validateHour(hour:string) {
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

