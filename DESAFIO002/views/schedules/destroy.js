import {askToUserWhile, println} from "./../view.js";
import CpfValidate from "../../validations/CpfValidate.js";
import ClientService from "../../services/ClientService.js";

export function destroy(){
    let cpf = askToUserWhile("CPF: ", validateCpf)

    println("\nPaciente excluído com sucesso!")

    return { cpf }
}

function validateCpf(cpf){
    if( !CpfValidate.validate(cpf) ) {
        throw new Error("Erro: CPF inválido.")
    }
    if( !ClientService.getClientByCPF(cpf) ){
        throw new Error("Erro: paciente não cadastrado.")
    }
}

