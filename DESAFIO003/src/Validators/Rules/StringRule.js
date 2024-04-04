export default class {

    constructor() { }

    validate(value){
        return typeof value === "string";
    }
    message(field){
        return `O campo ${field} deve ser uma string`;
    }
}