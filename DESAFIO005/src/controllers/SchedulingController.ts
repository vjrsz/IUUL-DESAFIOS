import { index } from "../views/schedules";
import { store } from "../views/schedules/store";
import Route from "../config/Route";
import SchedulingService from "../services/SchedulingService";
import { destroy } from "../views/schedules/destroy";
import { show } from "../views/schedules/show";
import DateHelper from "../helpers/DateHelper.js";

export default class {
    static async index() {
        let input = await index()

        if (input === 1) { // @ts-ignore
            return Route.redirect("scheduling@store")
        } else if (input === 2) { // @ts-ignore
            return Route.redirect("scheduling@destroy")
        } else if (input === 3) { // @ts-ignore
            return Route.redirect("scheduling@all")
        } else if (input === 4) { // @ts-ignore
            return Route.redirect("menu@index")
        }
    }

    static async all() {
        let schedules = await SchedulingService.all()

        schedules.sort((a: { date: string; }, b: { date: string | undefined; }) => DateHelper.compareTo(a.date, b.date))

        show(schedules)

        // @ts-ignore
        return Route.redirect("scheduling@index")
    }

    static async store() {
        let input = await store()

        // @ts-ignore
        SchedulingService.store(input.name, input.cpf, input.birthdate)

        // @ts-ignore
        return Route.redirect("scheduling@index")
    }
    static async destroy() {
        let input = await destroy()

        SchedulingService.destroy(input)

        // @ts-ignore
        return Route.redirect("scheduling@index")
    }
}