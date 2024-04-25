import { menu } from "../views/menu";
import Route from "../config/Route";

export default class {
    static async index() {
        let input = await menu()

        if (input === 1) { // @ts-ignore
            return Route.redirect("client@index")
        } else if (input === 2) { // @ts-ignore
            return Route.redirect("scheduling@index")
        } else if (input === 3) {
            return false;
        }
    }
}