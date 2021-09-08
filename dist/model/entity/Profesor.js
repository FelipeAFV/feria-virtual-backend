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
exports.Profesor = void 0;
var typeorm_1 = require("typeorm");
var Profile_1 = require("./Profile");
var Profesor = /** @class */ (function () {
    function Profesor() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: "profesor_id" }),
        __metadata("design:type", Number)
    ], Profesor.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "school" }),
        __metadata("design:type", String)
    ], Profesor.prototype, "school", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "subject" }),
        __metadata("design:type", String)
    ], Profesor.prototype, "subject", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Profile_1.Profile; }, { cascade: true }),
        (0, typeorm_1.JoinColumn)({ name: "profile_id" }),
        __metadata("design:type", Profile_1.Profile)
    ], Profesor.prototype, "profile", void 0);
    Profesor = __decorate([
        (0, typeorm_1.Entity)("profesor")
    ], Profesor);
    return Profesor;
}());
exports.Profesor = Profesor;
