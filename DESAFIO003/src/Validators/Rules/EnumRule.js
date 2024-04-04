export default class {
    _arr

    constructor(arr) {
        this._arr = arr
    }

    validate(value){
        return this._arr.includes(value.toUpperCase())
    }

    message(field){
        return `O campo ${field} deve conter um dos valores ${this._arr}`;
    }
}