export class convertedConvertView {
    show(converted:any){
        console.log("--- Convertido ---")
        console.log(`${converted.from} ${this.convertToMoneyBRL(converted.amount)} => ${converted.to} ${this.convertToMoneyBRL(converted.conversion_result)}`);
        console.log(`Taxa ${this.convertToString(converted.conversion_rate)}`);
    }

    convertToString(amount:any){
        return amount.toString().replace('.', ',')
    }

    convertToMoneyBRL(amount:number){
        return this.convertToString(amount.toFixed(2))
    }
}