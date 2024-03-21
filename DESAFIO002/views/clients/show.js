import {askToUserWhile, print, println} from "./../view.js";
export function show(clients){
    console.log(clients)
    println("------------------------------------------------------------")
    print("CPF".padEnd(12))
    print("Nome".padEnd(33))
    print("Dt.Nasc.".padEnd(10))
    println("Idade".padEnd(5))

    clients.forEach(function (client){
        print(client.cpf.padEnd(12))
        print(client.name.padEnd(33))
        print(client.birthdate.padEnd(11))
        println(client.age.padStart(4))

        let scheduling = client.futureScheduling
        if(scheduling !== undefined){
            println((`Agendado para: ${scheduling.date}`).padStart(37))
            println((`${scheduling.hourInit} às ${scheduling.hourEnd}`).padStart(26))
        }
    })

    println("------------------------------------------------------------")
}
