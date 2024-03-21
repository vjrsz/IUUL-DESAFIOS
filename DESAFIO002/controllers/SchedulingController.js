import { index } from "../views/schedules/index.js";
import { store } from "../views/schedules/store.js";
import Route from "../config/Route.js";
import SchedulingService from "../services/SchedulingService.js";
import { destroy } from "../views/schedules/destroy.js";
import { show } from "../views/schedules/show.js";
import DateHelper from "../helpers/DateHelper.js";

export default class {
    static index() {
        let input = index()

        if (input === 1) { return Route.redirect("scheduling@store") }
        else if (input === 2) { return Route.redirect("scheduling@destroy") }
        else if (input === 3) { return Route.redirect("scheduling@all") }
        else if (input === 4) { return Route.redirect("menu@index") }
    }

    static all() {
        let schedules = SchedulingService.all()

        schedules.sort((a, b) => DateHelper.compareTo(a.date, b.date))

        show(schedules)

        return Route.redirect("scheduling@index")
    }

    static store() {
        let input = store()

        SchedulingService.store(input.name, input.cpf, input.birthdate)

        return Route.redirect("scheduling@index")
    }
    static destroy() {
        let input = destroy()

        SchedulingService.destroy(input)

        return Route.redirect("scheduling@index")
    }
}