import {askToUserWhile, println, readInt} from "./view.js";
import IntegerValidate from "../validations/IntegerValidate.js";

export function menu() {
    println("Menu Principal")
    println("1-Cadastro de pacientes")
    println("2-Agenda")
    println("3-Fim")

    return askToUserWhile(":: ", validateInput, readInt)
}

function validateInput(input){
    if(!IntegerValidate.validate(input) || (input < 1 || input > 3)){
        throw new Error("Erro: Opção inválida.")
    }
}