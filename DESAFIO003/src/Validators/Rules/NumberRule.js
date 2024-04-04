export default class {

    constructor() { }

    validate(value){
        return typeof value === "number";
    }
    message(field){
        return `O campo ${field} deve ser um número`;
    }
}