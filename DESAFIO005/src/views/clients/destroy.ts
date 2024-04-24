import {askToUserWhile, println} from "../view";
import CpfValidate from "../../validations/CpfValidate";
import ClientService from "../../services/ClientService";

export async function destroy() {
    let cpf = await askToUserWhile("CPF: ", validateCpf)

    println("\nPaciente excluído com sucesso!")

    return {cpf}
}

function validateCpf(cpf: string){
    if( !CpfValidate.validate(cpf) ) {
        throw new Error("Erro: CPF inválido.")
    }
    if( !ClientService.getClientByCPF(cpf) ){
        throw new Error("Erro: paciente não cadastrado.")
    }
}

