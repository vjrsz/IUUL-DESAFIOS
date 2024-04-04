import {DateTime} from "luxon";

export default class {
    _min

    constructor(min) {
        this._min = min;
    }

    validate(value){
        const diffYears = DateTime.now().diff(value, 'years').years;
        return diffYears >= this._min;
    }

    message(field){
        return `O campo ${field} deve ter no minimo ${this._min}anos`;
    }
}