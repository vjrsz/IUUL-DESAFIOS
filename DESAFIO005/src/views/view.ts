// @ts-ignore
import PromptSync from 'prompt-sync';
import process from 'node:process'

const prompt = PromptSync({sigint: true})

export function print(text:string){
    process.stdout.write(text)
}
export function println(text:string){
    print(text + '\n')
}
export function readInt(ask:string){
    return parseInt(prompt(ask));
}
export function readString(ask:string){
    return prompt(ask);
}
export async function askToUserWhile(ask: string, callbackValidate: Function, read = readString) {
    while (true) {
        let value = read(ask);
        try {
            await callbackValidate(value)
            return value;
        } catch (e: any) {
            println(`\n${e.message}\n`)
        }
    }
}
