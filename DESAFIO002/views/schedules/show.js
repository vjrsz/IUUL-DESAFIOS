import {askToUserWhile, print, println} from "./../view.js";
import DateHelper from "../../helpers/DateHelper.js";
import DateValidate from "../../validations/DateValidate.js";

export function show(schedules){
    let period = askToUserWhile("Apresentar a agenda T-Toda ou P-Periodo: ", validatePeriod)
    let dateI, dateE
    if ( period === 'P'){
        dateI = askToUserWhile("Data inicial: ", validateDate)
        dateE = askToUserWhile("Data final: ", validateDate)
        schedules = schedules.filter((scheduling) => {
            return DateHelper.compareTo(scheduling.date, dateI) >= 0 && DateHelper.compareTo(scheduling.date, dateE) <= 0
        })
    }

    println("".padStart(72, '-'))
    print("Data".padStart(7).padEnd(11))
    print("H.Ini".padEnd(6))
    print("H.Fim".padEnd(6))
    print("Tempo".padEnd(6))
    print("Nome".padEnd(33))
    println("Dt.Nasc.".padEnd(33))

    let dateAux = undefined
    let date = undefined

    schedules.forEach(function (scheduling){
        if(dateAux !== scheduling.date ){
            dateAux = scheduling.date
            date = scheduling.date
        } else { date = "" }

        print(date.padEnd(11))
        print(scheduling.hourInit.padEnd(6))
        print(scheduling.hourEnd.padEnd(6))
        print((DateHelper.calculateDifferenceHours(scheduling.hourEnd, scheduling.hourInit)).padEnd(6))
        print(scheduling.client.name.padEnd(33))
        println(scheduling.client.birthdate.padEnd(11))
    })

    println("".padStart(72, '-'))
}
function validateDate(date) {
    if(!DateValidate.validate(date)) {
        throw new Error("Erro: data inválida.")
    }
}
function validatePeriod(value) {
    if(value !== 'T' && value !== 'P'){
        throw new Error("Erro: opção inválida.")
    }
}