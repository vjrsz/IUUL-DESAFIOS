export default class {
    static validate(number: number){
        return !isNaN(Number(number)) && Number.isInteger(number)
    }
}