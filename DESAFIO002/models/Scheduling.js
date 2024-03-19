export default class {
    _client
    _date
    _hourInit
    _hourEnd

    constructor(client, date, hourInit, hourEnd) {
        this._client = client;
        this._date = date;
        this._hourInit = hourInit;
        this._hourEnd = hourEnd;
    }

    get client() {
        return this._client;
    }

    set client(value) {
        this._client = value;
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