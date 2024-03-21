import ClientService from "../services/ClientService.js";
import SchedulingService from "../services/SchedulingService.js";

export default class {
    static seed(){
        let client = ClientService.store("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "99999999999", "10/08/2004")
        let client2 = ClientService.store("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", "00000000000", "10/08/2003")

        SchedulingService.store(client.cpf, "22/05/2024", "10:00", "11:00")
        SchedulingService.store(client2.cpf, "220/05/2024", "08:00", "09:00")
    }
}

