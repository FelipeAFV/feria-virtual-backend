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
exports.CompletedChallenge = void 0;
var typeorm_1 = require("typeorm");
var Desafio_1 = require("./Desafio");
var Profile_1 = require("./Profile");
var CompletedChallenge = /** @class */ (function () {
    function CompletedChallenge() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ type: 'int', name: 'profile_id' }),
        (0, typeorm_1.ManyToOne)(function () { return Profile_1.Profile; }),
        (0, typeorm_1.JoinColumn)({ name: 'profile_id' }),
        __metadata("design:type", Profile_1.Profile)
    ], CompletedChallenge.prototype, "profile", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ type: 'int', name: 'challenge_id' }),
        (0, typeorm_1.ManyToOne)(function () { return Desafio_1.Challenge; }),
        (0, typeorm_1.JoinColumn)({ name: 'challenge_id' }),
        __metadata("design:type", Desafio_1.Challenge)
    ], CompletedChallenge.prototype, "challenge", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CompletedChallenge.prototype, "verification_image", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], CompletedChallenge.prototype, "upload_date", void 0);
    CompletedChallenge = __decorate([
        (0, typeorm_1.Entity)("completed_challenge")
    ], CompletedChallenge);
    return CompletedChallenge;
}());
exports.CompletedChallenge = CompletedChallenge;
