import {askToUserWhile, print} from "./../view.js";
import CpfValidate from "../../validations/CpfValidate.js";
import DateValidate from "../../validations/DateValidate.js";

export function store(){
    let cpf = askToUserWhile("CPF :", function (cpf){
        return validateCpf(cpf)
    }, "Erro: CPF está no formato inválido.\n")

    let name = askToUserWhile("Nome :", function (name){
        return validateName(name)
    }, "Erro: nome do paciente deve ter pelo menos 5 caracteres.\n")

    let birthdate = askToUserWhile("Data de nascimento:", function (cpf){
        return validateDate(cpf)
    }, "Erro: paciente deve ter pelo menos 13 anos.\n")

    return new Client(cpf, name, birthdate)
}

function validateCpf(cpf){
    return CpfValidate.validate(cpf)
}

function validateName(name) {
    return name.length >= 5;
}

function validateDate(date) {
    return DateValidate.validate(date) && DateValidate.minYears(date, 13)
}


