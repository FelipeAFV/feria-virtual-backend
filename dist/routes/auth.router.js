"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
var router = (0, express_1.Router)();
router.post('/signIn', auth_controller_1.default.signIn);
router.post('/signUp', auth_controller_1.default.signUp);
router.post('/reset-password', auth_controller_1.default.forgotPassword);
exports.default = router;
