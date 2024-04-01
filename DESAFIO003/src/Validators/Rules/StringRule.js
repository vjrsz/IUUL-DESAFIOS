export default class {
    static validate(value){
        return value.type === String;
    }
    static message(field){
        return `O campo ${field} é obrigatório`;
    }
}