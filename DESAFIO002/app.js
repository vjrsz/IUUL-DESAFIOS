import route from "./config/Route.js";

let endpoint = route.get("menu@index")

while(endpoint){ endpoint = endpoint(); console.log("\n") }
