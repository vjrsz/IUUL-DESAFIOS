import MenuController from "../controllers/MenuController.js";
import ClientController from "../controllers/ClientController.js";
import SchedulingController from "../controllers/SchedulingController.js";

export default class route {
    static #routes = {
        'menu' : {
            'index' : MenuController.index
        },
        'client' : {
            'index' : ClientController.index,
            'store' : ClientController.store,
            'destroy' : ClientController.destroy,
            'all' : ClientController.all
        },
        'scheduling' : {
            'index' : SchedulingController.index,
            'store' : SchedulingController.store,
            'destroy' : SchedulingController.destroy,
            'all' : SchedulingController.all
        }
    }

    static get(index){
        let group = index.split("@").at(0), endpoint = index.split("@").at(1)

        return route.#routes[group][endpoint]
    }

    static redirect(route, param){
        let endpoint = this.get(route)
        return { endpoint, param }
    }
}