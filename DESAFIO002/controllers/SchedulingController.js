import { index } from "../views/schedules/index.js";
import { store } from "../views/schedules/store.js";
import Route from "../config/Route.js";
import SchedulingService from "../services/SchedulingService.js";
import { destroy } from "../views/schedules/destroy.js";
import { show } from "../views/schedules/show.js";

export default class {
    static index() {
        let input = index()

        if (input === 1) { return Route.redirect("scheduling@store") }
        else if (input === 2) { return Route.redirect("scheduling@destroy") }
        else if (input === 3) { return Route.redirect("scheduling@all") }
        else if (input === 4) { return Route.redirect("menu@index") }
    }

    static all(request) {
        show(SchedulingService.all())

        return Route.redirect("schedules@index")
    }

    static store() {
        let input = store()

        SchedulingService.store(input.name, input.cpf, input.birthdate)

        return Route.redirect("schedules@index")
    }
    static destroy() {
        let input = destroy()

        SchedulingService.destroy(input.cpf)

        return Route.redirect("schedules@index")
    }
}