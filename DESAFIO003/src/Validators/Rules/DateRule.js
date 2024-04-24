import {DateTime} from "luxon";

export default class {

    constructor() { }w

    validate(value){
        return value instanceof DateTime
    }

    message(field){
        return `O campo ${field} deve ser uma Data`;
    }
}