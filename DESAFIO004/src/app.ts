import Route from "./config/Route";

async function app() {
    // @ts-ignore
    let redirect = Route.redirect("menu@index")
    while (redirect) {
        redirect = await redirect.endpoint(redirect.param);
        console.log("\n");
    }
}

app()
