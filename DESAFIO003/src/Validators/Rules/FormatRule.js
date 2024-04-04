export default class {
    _format

    constructor(format) {
        this._format = format
    }

    validate(value){
        return this._format.test(value);
    }
    message(field){
        return `O campo ${field} deve estar no formato correto`;
    }
}