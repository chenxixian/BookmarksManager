"'use strict:'" 

import Hapi = require('hapi');
import MOCKED_PAGES = require('./mock-pages');

// create a server with a host and port
const server= new Hapi.Server({
    host: 'localhost',
    port: 8000
})

var myObj = 
[
    {
        "id":"1",
        "name":"Helpful bookmarks for UI engineers",
        "description":"my collection of useful link that I use at least once a week",
        "folders": 
        [
            {
                "id": 1, 
                "name": "UI tools",
                "bookmarks":
                [
                    {
                        "id": 1,
                        "name": "JSON prettify",
                        "url": "https://jsonformatter.curiousconcept.com/"
                    },
                    {
                        "id": 2,
                        "name": "Pluralsight",
                        "url": "https://app.pluralsight.com/library/"
                    },
                    {
                        "id": 3,
                        "name": "Bootsnipp",
                        "url": "https://bootsnipp.com/"
                    },
                    {
                        "id": 4,
                        "name": "JSFiddle",
                        "url": "https://jsfiddle.net"
                    },
                    {
                        "id": 5,
                        "name": "W3c validator",
                        "url": "https://validator.w3.org"
                    }
                ]
            },
            {
                "id": 1, 
                "name": "UI Libs",
                "bookmarks":
                [
                    {
                        "id": 1,
                        "name": "Pino",
                        "url": "https://github.com/pinojs/pino"
                    },
                    {
                        "id": 2,
                        "name": "Axios",
                        "url": "https://github.com/axios/axios"
                    },
                    {
                        "id": 3,
                        "name": "Hapi",
                        "url": "https://hapijs.com/"
                    },
                    {
                        "id": 4,
                        "name": "Cloud9",
                        "url": "https://c9.io"
                    },
                    {
                        "id": 5,
                        "name": "Stackblitz",
                        "url": "https://stackblitz.com"
                    }
                ]
            },
            {
                "id": 1, 
                "name": "Angular refs",
                "bookmarks":
                [
                    {
                        "id": 1,
                        "name": "Angular 6",
                        "url": "https://angular.io/"
                    },
                    {
                        "id": 2,
                        "name": "Tour of heroes tutorial",
                        "url": "https://angular.io/tutorial"
                    }
                ]
            }
        ]
    }
];

//========= routes
server.route({
    method:'GET',
    path:'/health',
    handler:function(request, reply) {
        return "Hapi is alive and kicking";
    }
});
 
// page routes
server.route({
    method:'GET',
    path:'/pages',
    handler:function(request, reply) {
        return MOCKED_PAGES     ;
    }
});
 
server.route({
    method:'PUT',
    path:'/pages',
    handler:function(request, reply) {
        return "Hapi is alive and kicking";
    }
});

server.route({
    method:'POST',
    path:'/pages',
    handler:function(request, reply) {
        return "Hapi is alive and kicking";
    }
});

server.route({
    method:'DELETE',
    path:'/pages',
    handler:function(request, reply) {
        return "Hapi is alive and kicking";
    }
});



// start the server
async function start() {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at: ', server.info.uri);
}

start();





