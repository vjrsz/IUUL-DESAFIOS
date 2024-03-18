import {println, readInt} from "./../view.js";
import IntegerValidate from "../../validations/IntegerValidate.js";

export function index(){
    println("Menu do Cadastro de Pacientes")
    println("1-Cadastrar novo paciente")
    println("2-Excluir paciente")
    println("3-Listar pacientes (ordenado por CPF)")
    println("4-Listar pacientes (ordenado por nome)")
    println("5-Voltar p/ menu principal")

    let input = readInt(":: ")

    if (!validateInput(input)) {
        println("Erro: Opção inválida.");
        return index()
    }

    return input
}

function validateInput(input){
    return IntegerValidate.validate(input) && input > 0 && input < 6
}