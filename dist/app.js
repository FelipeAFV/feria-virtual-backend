"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
require("reflect-metadata");
(0, typeorm_1.createConnection)()
    .then(function (connection) {
    // here you can start to work with your entities
    console.log('Connection successful');
}).catch(function (error) { return console.log(error); });
