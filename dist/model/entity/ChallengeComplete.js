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
exports.ChallengeComplete = void 0;
var typeorm_1 = require("typeorm");
var Challenge_1 = require("./Challenge");
var Profile_1 = require("./Profile");
var ChallengeComplete = /** @class */ (function () {
    function ChallengeComplete() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: "challenge_complete_id" }),
        __metadata("design:type", Number)
    ], ChallengeComplete.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "image_name" }),
        __metadata("design:type", String)
    ], ChallengeComplete.prototype, "filename", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "date",
            type: 'date'
        }),
        __metadata("design:type", Date)
    ], ChallengeComplete.prototype, "date", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Profile_1.Profile; }),
        (0, typeorm_1.JoinColumn)({ name: "profile_id" }),
        __metadata("design:type", Profile_1.Profile)
    ], ChallengeComplete.prototype, "profile", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Challenge_1.Challenge; }, function (challenge) { return challenge.challengeComplete; }),
        (0, typeorm_1.JoinColumn)({ name: "challenge_id" }),
        __metadata("design:type", Array)
    ], ChallengeComplete.prototype, "challenges", void 0);
    ChallengeComplete = __decorate([
        (0, typeorm_1.Entity)("challenge_complete")
    ], ChallengeComplete);
    return ChallengeComplete;
}());
exports.ChallengeComplete = ChallengeComplete;
