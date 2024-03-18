import {print, println, readInt} from "./view.js";
import IntegerValidate from "../validations/IntegerValidate.js";

export function menu() {
    println("Menu Principal")
    println("1-Cadastro de pacientes")
    println("2-Agenda")
    println("3-Fim")

    let input = readInt(':: ')

    if (!validateInput(input)) {
        console.log("Erro: Opção inválida.");
        return menu()
    }

    return input
}

function validateInput(input){
    return IntegerValidate.validate(input) && input > 0 && input < 4
}