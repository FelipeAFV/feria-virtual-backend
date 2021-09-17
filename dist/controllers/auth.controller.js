"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var password_encrypt_1 = require("../utils/password-encrypt");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var User_1 = require("../model/entity/User");
var Profile_1 = require("../model/entity/Profile");
var role_utils_1 = require("../utils/role.utils");
var user_role_1 = require("../model/enums/user-role");
var Student_1 = require("../model/entity/Student");
var Representative_1 = require("../model/entity/Representative");
var Profesor_1 = require("../model/entity/Profesor");
var AuthController = /** @class */ (function () {
    function AuthController() {
        var _this = this;
        this.signUp = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, username, password, userToCheck, hashedPass, user, profile, role, insertedUser, insertedProfile, insertedRole, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // const userRepo = getRepository(User);
                        console.log(req.body);
                        _a = req.body, username = _a.username, password = _a.password;
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(User_1.User).findOne({ username: username })];
                    case 1:
                        userToCheck = _c.sent();
                        if (userToCheck) {
                            return [2 /*return*/, res.status(400).json({ error: 'Username already exist' })];
                        }
                        return [4 /*yield*/, (0, password_encrypt_1.encrypt)(password)];
                    case 2:
                        hashedPass = _c.sent();
                        user = {
                            id: 1,
                            username: username,
                            password: hashedPass,
                        };
                        profile = req.body;
                        profile.id = 1;
                        profile.user = user;
                        role = (0, role_utils_1.roleGenerator)(profile, req.body);
                        console.log('Profile a crear ', profile);
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(User_1.User).save(user)];
                    case 3:
                        insertedUser = _c.sent();
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(Profile_1.Profile).save(profile)];
                    case 4:
                        insertedProfile = _c.sent();
                        if (!role) return [3 /*break*/, 11];
                        insertedRole = void 0;
                        _b = profile.role;
                        switch (_b) {
                            case user_role_1.UserRole.ALUMNO: return [3 /*break*/, 5];
                            case user_role_1.UserRole.APODERADO: return [3 /*break*/, 7];
                            case user_role_1.UserRole.PROFESOR: return [3 /*break*/, 9];
                        }
                        return [3 /*break*/, 11];
                    case 5: return [4 /*yield*/, (0, typeorm_1.getRepository)(Student_1.Student).save(role)];
                    case 6:
                        insertedRole = _c.sent();
                        return [3 /*break*/, 11];
                    case 7: return [4 /*yield*/, (0, typeorm_1.getRepository)(Representative_1.Representative).save(role)];
                    case 8:
                        insertedRole = _c.sent();
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, (0, typeorm_1.getRepository)(Profesor_1.Profesor).save(role)];
                    case 10:
                        insertedRole = _c.sent();
                        return [3 /*break*/, 11];
                    case 11:
                        res.cookie('jwt', jsonwebtoken_1.default.sign({ userId: insertedUser.id }, 'SECRET'), { httpOnly: true });
                        return [2 /*return*/, res.status(200).json({ success: 'Successfully registered' })];
                }
            });
        }); };
        this.signIn = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, username, password, user, validPassword;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, username = _a.username, password = _a.password;
                        return [4 /*yield*/, (0, typeorm_1.getRepository)(User_1.User).findOne({ username: username })];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(401).json({ error: 'Username not valid' })];
                        }
                        return [4 /*yield*/, (0, password_encrypt_1.compareHashedPassword)(password, user.password)];
                    case 2:
                        validPassword = _b.sent();
                        if (validPassword) {
                            res.cookie('jwt', jsonwebtoken_1.default.sign({ userId: user.id }, 'SECRET'), { httpOnly: true });
                        }
                        else {
                            return [2 /*return*/, res.status(401).json({ error: 'Incorrect password' })];
                        }
                        res.end();
                        return [2 /*return*/];
                }
            });
        }); };
    }
    return AuthController;
}());
exports.default = new AuthController();
