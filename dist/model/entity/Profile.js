"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
var typeorm_1 = require("typeorm");
var user_role_1 = require("../enums/user-role");
var User_1 = require("./User");
var Profile = /** @class */ (function () {
    function Profile() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: "profile_id" }),
        __metadata("design:type", Number)
    ], Profile.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "first_name" }),
        __metadata("design:type", String)
    ], Profile.prototype, "firstName", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "last_name" }),
        __metadata("design:type", String)
    ], Profile.prototype, "lastName", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "email" }),
        __metadata("design:type", String)
    ], Profile.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "phone" }),
        __metadata("design:type", String)
    ], Profile.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "address" }),
        __metadata("design:type", String)
    ], Profile.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "condominium" }),
        __metadata("design:type", String)
    ], Profile.prototype, "condominium", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "enum",
            enum: user_role_1.UserRole,
        }),
        __metadata("design:type", String)
    ], Profile.prototype, "role", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return User_1.User; }, { cascade: true }),
        (0, typeorm_1.JoinColumn)({ name: "user_id" }),
        __metadata("design:type", User_1.User)
    ], Profile.prototype, "user", void 0);
    Profile = __decorate([
        (0, typeorm_1.Entity)({ name: "profile" })
    ], Profile);
    return Profile;
}());
exports.Profile = Profile;
