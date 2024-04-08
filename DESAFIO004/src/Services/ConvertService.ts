import axios from "axios";

export class ConvertService {
    _api = axios.create({
        baseURL: 'https://v6.exchangerate-api.com/v6/44ea65a12ad76a60fef61719/latest/USD',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
    });

}