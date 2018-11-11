"'use strict:'";

import Hapi = require("hapi");
import { MockDataGenerator } from "./MockDataGenerator";

// create a server with a host and port
const server = new Hapi.Server({ // don't put type any after var server bc tsc complains about it
    host: "localhost",
    port: 8000
});

let dataGen: MockDataGenerator = new MockDataGenerator();
var pages = dataGen.generatePages(6, 10, 14);

// ========= register routes with their handlers
server.route({
    method:"GET",
    path:"/health",
    handler:function(request, reply) {
        return "Hapi is alive and kicking";
    }
});

server.route(require("./bookmarks/bookmarkRoutes"));


// ===============start the server
async function start(): Promise<void> {
    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log("Server running at: ", server.info.uri);
}

start();





