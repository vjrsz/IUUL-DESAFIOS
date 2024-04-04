export default class {
    constructor() { }

    validate(value){
        return value !== null || value !== "";
    }

    message(field){
        return `O campo ${field} é obrigatório`;
    }
}