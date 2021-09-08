"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var AuthController = /** @class */ (function () {
    function AuthController() {
        this.signUp = function () {
        };
        this.signIn = function (req, res) {
            res.cookie('jwt', jsonwebtoken_1.default.sign('payload', 'SECRET'), { httpOnly: true });
            res.end();
        };
    }
    return AuthController;
}());
exports.default = new AuthController();
