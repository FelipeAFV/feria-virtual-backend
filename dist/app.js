"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
require("reflect-metadata");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_1 = __importDefault(require("express"));
var auth_router_1 = __importDefault(require("./routes/auth.router"));
var app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use('/auth', auth_router_1.default);
(0, typeorm_1.createConnection)()
    .then(function (connection) {
    // here you can start to work with your entities
    console.log('Connection successful');
}).catch(function (error) { return console.log(error); });
