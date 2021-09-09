"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { createConnection } from "typeorm";
require("reflect-metadata");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_1 = __importDefault(require("express"));
var passport_1 = __importDefault(require("passport"));
require("./config/passport");
var auth_router_1 = __importDefault(require("./routes/auth.router"));
var app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use('/auth', auth_router_1.default);
app.use('/protected', function (req, res) {
    passport_1.default.authenticate('jwt', { session: false }, function (err, user) {
        if (err) {
            return res.status(404).send('Error');
        }
        else {
            return res.status(200).send('Access granted');
        }
    })(req, res);
});
app.listen(3000);
// createConnection()
//     .then(connection => {
//     // here you can start to work with your entities
//     console.log('Connection successful')
// }).catch(error => console.log(error));
