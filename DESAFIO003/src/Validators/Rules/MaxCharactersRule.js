export default class {
    _max

    constructor(max) {
        this._max = max
    }

    validate(value){
        return value && value.toString().length <= this._max;
    }
    message(field){
        return `O campo ${field} tem que ter no máximo ${this._max} caracteres`;
    }
}