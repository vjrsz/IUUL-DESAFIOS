import {ConvertController} from "./src/Controller/ConvertController";

let convertController = new ConvertController();

async function app() {
    let option : number
    let loop = true

    option = convertController.index()
    while(loop){
        console.log()
        switch (option){
            case 0: loop = false; break;
            case 1: option = await convertController.convert(); break;
            case 2: option = await convertController.convert(); break;
            case 3: option = await convertController.convert(); break;
            case 4: option = convertController.index(); break;
        }
    }
}

app();

