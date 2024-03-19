import Route from "./config/Route.js";
import RepositoriesSeed from "./config/RepositoriesSeed.js";

let redirect = Route.redirect("menu@index")

RepositoriesSeed.seed()

while(redirect){ redirect = redirect.endpoint(redirect.param); console.log("\n"); }
