import {askToUserWhile, print, println} from "../view";
import CpfValidate from "../../validations/CpfValidate";
import DateValidate from "../../validations/DateValidate";
import ClientService from "../../services/ClientService";
import DateHelper from "../../helpers/DateHelper";

export async function store() {
    let cpf = await askToUserWhile("CPF: ", validateCpf)
    let name = await askToUserWhile("Nome: ", validateName)
    let birthdate = await askToUserWhile("Data de nascimento: ", validateDate)

    println("\nPaciente cadastrado com sucesso!")
    return {cpf, name, birthdate}
}

async function validateCpf(cpf: any) {
    if (!CpfValidate.validate(cpf)) {
        throw new Error("Erro: CPF inválido.")
    }
    if (await ClientService.getClientByCPF(cpf)) {
        throw new Error("Erro: CPF já cadastrado.")
    }
}

function validateName(name:any) {
    if( name.length < 5 ) {
        throw new Error("Erro: nome tem que ter pelo menos 5 caracteres.")
    }
}

function validateDate(date:any) {
    if(!DateValidate.validate(date)) {
        throw new Error("Erro: data inválida.")
    }
    if(DateHelper.calculateDifferenceYears(date) < 13) {
        throw new Error("Erro: paciente deve ter pelo menos 13 anos..")
    }
}


