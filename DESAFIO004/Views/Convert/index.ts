import {IRenderView} from "../default/IRenderView";

export class IndexConvertView extends IRenderView{
    render(){
        console.log("--- MENU ---")
        console.log("1. Converter")
        console.log("2. Ver Moedas")
        console.log("3. Pesquisar Moeda")

        let option = this._askToUserWhile(":: ", (option:string) => {
            let optionInt = parseInt(option)

            if( optionInt < 1 || optionInt > 3){
                throw new Error("Opção Inválida !")
            }
        })
    }
}