import {askToUserWhile, println, readInt} from "../view";
import IntegerValidate from "../../validations/IntegerValidate";

export function index(){
    println("Menu do Cadastro de Pacientes")
    println("1-Cadastrar novo paciente")
    println("2-Excluir paciente")
    println("3-Listar pacientes (ordenado por CPF)")
    println("4-Listar pacientes (ordenado por nome)")
    println("5-Voltar p/ menu principal")

    return askToUserWhile(":: ", validateInput, readInt)
}

function validateInput(input: number){
    if(!IntegerValidate.validate(input) || (input < 1 || input > 5)){
        throw new Error("Erro: Opção inválida.")
    }
}