export default class {
    _min

    constructor(min) {
        this._min = min
    }

    validate(value){

        return value && value.toString().length >= this._min;
    }
    message(field){
        return `O campo ${field} tem que ter no minimo ${this._min} caracteres`;
    }
}