import {askToUserWhile, print, println} from "../view";
import DateHelper from "../../helpers/DateHelper";
import DateValidate from "../../validations/DateValidate";

export async function show(schedules: [...any]) {
    let period = await askToUserWhile("Apresentar a agenda T-Toda ou P-Periodo: ", validatePeriod)
    let dateI: string | undefined, dateE: string | undefined;
    if (period === 'P') {
        dateI = await askToUserWhile("Data inicial: ", validateDate)
        dateE = await askToUserWhile("Data final: ", validateDate)
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

    let dateAux: string | undefined = undefined
    let date: string | undefined = undefined

    schedules.forEach(function (scheduling) {
        if (dateAux !== scheduling.date) {
            dateAux = scheduling.date
            date = scheduling.date
        } else {
            date = ""
        }

        // @ts-ignore
        print(date.padEnd(11))
        print(scheduling.hourInit.padEnd(6))
        print(scheduling.hourEnd.padEnd(6))
        print((DateHelper.calculateDifferenceHours(scheduling.hourEnd, scheduling.hourInit)).padEnd(6))
        print(scheduling.client.name.padEnd(33))
        println(scheduling.client.birthdate.padEnd(11))
    })

    println("".padStart(72, '-'))
}
function validateDate(date:string) {
    if(!DateValidate.validate(date)) {
        throw new Error("Erro: data inválida.")
    }
}
function validatePeriod(value:string) {
    if(value !== 'T' && value !== 'P'){
        throw new Error("Erro: opção inválida.")
    }
}