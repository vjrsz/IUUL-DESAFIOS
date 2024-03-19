import {askToUserWhile, print, println} from "./../view.js";
import CpfValidate from "../../validations/CpfValidate.js";
import DateValidate from "../../validations/DateValidate.js";
import ClientService from "../../services/ClientService.js";
import DateHelper from "../../helpers/DateHelper.js";

export function store(){
    let cpf = askToUserWhile("CPF: ", validateCpf)
    let name = askToUserWhile("Nome: ", validateName)
    let birthdate = askToUserWhile("Data de nascimento: ", validateDate)

    println("\nPaciente cadastrado com sucesso!")
    return { cpf, name, birthdate }
}

function validateCpf(cpf){
    if( !CpfValidate.validate(cpf) ) {
        throw new Error("Erro: CPF inválido.")
    }
    if( ClientService.getClientByCPF(cpf) ){
        throw new Error("Erro: CPF já cadastrado.")
    }
}

function validateName(name) {
    if( name.length < 5 ) {
        throw new Error("Erro: nome tem que ter pelo menos 5 caracteres.")
    }
}

function validateDate(date) {
    if(!DateValidate.validate(date)) {
        throw new Error("Erro: data inválida.")
    }
    if(DateHelper.calculateDifferenceYears(date) < 13) {
        throw new Error("Erro: paciente deve ter pelo menos 13 anos..")
    }
}


