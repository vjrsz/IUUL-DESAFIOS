import { index } from "../views/clients/index.js";
import { store } from "../views/clients/store.js";
import Route from "../config/Route.js";

export default class {
    static index() {
        let input = index()

        if (input === 1) { return Route.get("client@store") }
        else if (input === 5) { return Route.get("menu@index"); }
    }
    static store() {
        let input = store()


        console.log("ok")
    }
}