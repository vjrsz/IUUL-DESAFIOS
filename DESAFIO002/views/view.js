import PromptSync from 'prompt-sync';
import process from 'node:process'

const prompt = PromptSync({sigint: true})

export function print(text){
    process.stdout.write(text)
}
export function println(text){
    print(text + '\n')
}
export function readInt(ask){
    return parseInt(prompt(ask));
}
export function readString(ask){
    return prompt(ask);
}
export function askToUserWhile(ask, callbackValidate, read = readString){
    while(true){
        let value = read(ask);
        try{
            callbackValidate(value)
            return value;
        } catch (e) {
            println(`\n${e.message}\n`)
        }
    }
}
