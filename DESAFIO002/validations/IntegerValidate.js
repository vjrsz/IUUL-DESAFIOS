export default class {
    static validate(number){
        return !isNaN(number) && Number.isInteger(number)
    }
}