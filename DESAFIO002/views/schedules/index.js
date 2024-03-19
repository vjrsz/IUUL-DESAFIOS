import {askToUserWhile, println, readInt} from "./../view.js";
import IntegerValidate from "../../validations/IntegerValidate.js";

export function index(){
    println("Agenda")
    println("1-Agendar consulta")
    println("2-Cancelar agendamento")
    println("3-Listar agenda")
    println("4-Voltar p/ menu principal")

    return askToUserWhile(":: ", validateInput, readInt)
}

function validateInput(input){
    if(!IntegerValidate.validate(input) || (input < 1 || input > 4)){
        throw new Error("Erro: Opção inválida.")
    }
}