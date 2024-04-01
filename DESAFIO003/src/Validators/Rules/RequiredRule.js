export default class {
    static validate(value){
        return value != null;
    }
    static message(field){
        return `O campo ${field} é obrigatório`;
    }
}