import { index } from "../views/clients";
import { store } from "../views/clients/store";
import Route from "../config/Route";
import ClientService from "../services/ClientService";
import { destroy } from "../views/clients/destroy";
import { show } from "../views/clients/show";

export default class {
    static async index() {
        let input = await index()

        if (input === 1) { // @ts-ignore
            return Route.redirect("client@store")
        } else if (input === 2) { // @ts-ignore
            return Route.redirect("client@destroy")
        } else if (input === 3) {
            return Route.redirect("client@all", {orderBy: "cpf"})
        } else if (input === 4) {
            return Route.redirect("client@all", {orderBy: "name"})
        } else if (input === 5) { // @ts-ignore
            return Route.redirect("menu@index")
        }
    }

    static async all(request: { orderBy: any; }) {
        let clients = await ClientService.all(request.orderBy)
        show(clients)

        // @ts-ignore
        return Route.redirect("client@index")
    }

    static async store() {
        let input = await store()

        ClientService.store(input.name, input.cpf, input.birthdate)

        // @ts-ignore
        return Route.redirect("client@index")
    }
    static async destroy() {
        let input = await destroy()

        ClientService.destroy(input.cpf)

        // @ts-ignore
        return Route.redirect("client@index")
    }
}