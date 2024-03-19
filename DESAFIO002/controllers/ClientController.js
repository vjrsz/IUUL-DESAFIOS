import { index } from "../views/clients/index.js";
import { store } from "../views/clients/store.js";
import Route from "../config/Route.js";
import ClientService from "../services/ClientService.js";
import { destroy } from "../views/clients/destroy.js";
import { show } from "../views/clients/show.js";

export default class {
    static index() {
        let input = index()

        if (input === 1) { return Route.redirect("client@store") }
        else if (input === 2) { return Route.redirect("client@destroy") }
        else if (input === 3) { return Route.redirect("client@all", {orderBy: "cpf"}) }
        else if (input === 4) { return Route.redirect("client@all", {orderBy: "name"}) }
        else if (input === 5) { return Route.redirect("menu@index") }
    }

    static all(request) {
        show(ClientService.all(request.orderBy))

        return Route.redirect("client@index")
    }

    static store() {
        let input = store()

        ClientService.store(input.name, input.cpf, input.birthdate)

        return Route.redirect("client@index")
    }
    static destroy() {
        let input = destroy()

        ClientService.destroy(input.cpf)

        return Route.redirect("client@index")
    }
}