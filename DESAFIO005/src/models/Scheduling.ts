export default class {
    _cpf:any
    _date:any
    _hourInit:any
    _hourEnd:any

    constructor(cpf:any, date:any, hourInit:any, hourEnd:any) {
        this._cpf = cpf;
        this._date = date;
        this._hourInit = hourInit;
        this._hourEnd = hourEnd;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(value) {
        this._cpf = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get hourInit() {
        return this._hourInit;
    }

    set hourInit(value) {
        this._hourInit = value;
    }

    get hourEnd() {
        return this._hourEnd;
    }

    set hourEnd(value) {
        this._hourEnd = value;
    }
}