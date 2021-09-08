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
exports.Challenge = void 0;
var typeorm_1 = require("typeorm");
var ChallengeComplete_1 = require("./ChallengeComplete");
var Stand_1 = require("./Stand");
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: "challenge_id" }),
        __metadata("design:type", Number)
    ], Challenge.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "url_video" }),
        __metadata("design:type", String)
    ], Challenge.prototype, "url_video", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ChallengeComplete_1.ChallengeComplete; }, function (ChallengeComplete) { return ChallengeComplete.challenges; }),
        __metadata("design:type", ChallengeComplete_1.ChallengeComplete)
    ], Challenge.prototype, "challengeComplete", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Stand_1.Stand; }, function (stand) { return stand.challenge; }),
        (0, typeorm_1.JoinColumn)({ name: "stand_id" }),
        __metadata("design:type", Challenge)
    ], Challenge.prototype, "challenges", void 0);
    Challenge = __decorate([
        (0, typeorm_1.Entity)("challenge")
    ], Challenge);
    return Challenge;
}());
exports.Challenge = Challenge;
