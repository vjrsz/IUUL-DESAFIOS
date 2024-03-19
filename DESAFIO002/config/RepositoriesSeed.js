import ClientService from "../services/ClientService.js";

export default class {
    static seed(){
        ClientService.store("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "99999999999", "10/08/2004")
        ClientService.store("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", "00000000000", "10/08/2003")
    }
}

