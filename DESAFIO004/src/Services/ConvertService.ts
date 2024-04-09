import axios from "axios";
import * as https from "node:https";

interface ICache {
    _codes:Array<Array<string>>|undefined;
}

export class ConvertService {
    _api = axios.create({
        baseURL: 'https://v6.exchangerate-api.com/v6/44ea65a12ad76a60fef61719',
        timeout: 1000,
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });

    _cache:ICache= {
        _codes: undefined,
    }

    async convert(from: string, to: string, amount: number) {
        let response = await this._api.get(`/pair/${from}/${to}/${amount}`)
        return { conversion_rate : response.data?.conversion_rate, conversion_result: response.data?.conversion_result};
    }

    async getCodes(){
        if(this._cache._codes === undefined){
            let response = await this._api.get(`/codes`)
            this._cache._codes = response.data?.supported_codes
        }

        return { codes : this._cache._codes};
    }
    async codeExists(codeSearch:string){
        let { codes } = await this.getCodes()

        return codes?.find((code) =>{
            return code[0] == codeSearch;
        })
    }
}