import {askToUserWhile, print, println} from "./../view.js";
export function show(clients){
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
    })

    println("------------------------------------------------------------")
}
