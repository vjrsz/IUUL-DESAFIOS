import { menu } from "../views/menu.js";
import Route from "../config/Route.js";

export default class {
    static index() {
        let input = menu()

        if (input === 1) { return Route.get("client@index") }
        else if (input === 2) { return Route.get("client@store") }
        else if (input === 3) { return false; }
    }
}