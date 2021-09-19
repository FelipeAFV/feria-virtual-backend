"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
require("reflect-metadata");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_1 = __importStar(require("express"));
var passport_1 = __importDefault(require("passport"));
var passport_2 = __importDefault(require("./config/passport"));
var auth_router_1 = __importDefault(require("./routes/auth.router"));
var cors_1 = __importDefault(require("cors"));
(0, typeorm_1.createConnection)()
    .then(function (connection) {
    // here you can start to work with your entities
    console.log('Connection successful');
}).catch(function (error) { return console.log(error); });
(0, passport_2.default)(passport_1.default);
passport_1.default.initialize();
var app = (0, express_1.default)();
app.use((0, express_1.json)());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded());
// app.use('/', (req: Request, res: Response, next: NextFunction) => {
//     res.json('Hola soy un middleware');
//     next();
// });
app.use('/auth', auth_router_1.default);
app.use('/protected', passport_1.default.authenticate('jwt', { session: false }), function (req, res, next) {
    console.log('User', req.user);
    res.json('Response');
});
app.listen(3000);
