import MenuController from "../controllers/MenuController.js";
import ClientController from "../controllers/ClientController.js";

export default class route {
    static #routes = {
        'menu' : {
            'index' : MenuController.index
        },
        'client' : {
            'index' : ClientController.index,
            'store' : ClientController.store
        }
    }

    static get(index){
        let group = index.split("@").at(0), endpoint = index.split("@").at(1)

        return route.#routes[group][endpoint]
    }
}