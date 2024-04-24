import {askToUserWhile, println, readInt} from "./view";
import IntegerValidate from "../validations/IntegerValidate";

export async function menu() {
    println("Menu Principal")
    println("1-Cadastro de pacientes")
    println("2-Agenda")
    println("3-Fim")

    return await askToUserWhile(":: ", validateInput, readInt)
}

function validateInput(input: number){
    if(!IntegerValidate.validate(input) || (input < 1 || input > 3)){
        throw new Error("Erro: Opção inválida.")
    }
}