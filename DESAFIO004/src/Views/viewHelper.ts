import PromptSync = require('prompt-sync');
const prompt = PromptSync({sigint: true})

export function askToUserWhile(ask:string, callbackValidate:Function)
{
    while(true){
        let value = prompt(ask);
        try{
            let response: any = callbackValidate(value)
            return response;
        } catch (e:any) {
            console.log(`\n${e.message}\n`)
        }
    }
}