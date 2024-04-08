import PromptSync = require("prompt-sync");

export abstract class IRenderView {
    _prompt

    constructor() {
        this._prompt = PromptSync({sigint: true})
    }

    render(){}

    _read(ask:string){
        return this._prompt(ask);
    }

    _askToUserWhile(ask:string, callbackValidate: Function){
        while(true){
            let value = this._read(ask);
            try{
                callbackValidate(value)
                return value;
            } catch (e:any) {
                console.log(`\n${e.message}\n`)
            }
        }
    }
}