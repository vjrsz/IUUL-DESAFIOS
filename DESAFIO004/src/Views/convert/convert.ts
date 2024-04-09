import {askToUserWhile} from "../viewHelper";

export class convertConvertView {
    show(){
        console.log("--- Converter ---")
        let from = askToUserWhile("Moeda Origem:", (option:string) => {
            return option
        })

        let to = askToUserWhile("Moeda destino:", (option:string) => {
            return option
        })

        let amount = askToUserWhile("Valor:", (option:string) => {
            if ( ! /^\d+,\d{2}$/.test(option) ){
                throw new Error("Valor digitado está inválido !")
            }

            return parseFloat(option.replace(',', '.'))
        })

        return { from, to, amount }
    }
}