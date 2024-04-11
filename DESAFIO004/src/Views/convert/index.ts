import { askToUserWhile } from "../viewHelper";

export class IndexConvertView {
    show(){
        console.log("--- MENU ---")
        console.log("1. Converter")
        // console.log("2. Ver Moedas")
        // console.log("3. Pesquisar Moeda")

        let option = askToUserWhile(":: ", (option:string) => {

            let optionInt = parseInt(option)

            if( !Number.isInteger(optionInt) || optionInt < 1 || optionInt > 1){
                throw new Error("Opção Inválida !")
            }

            return optionInt
        })

        return { option }
    }
}