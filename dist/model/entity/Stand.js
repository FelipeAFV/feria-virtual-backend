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
exports.Stand = void 0;
var typeorm_1 = require("typeorm");
var Challenge_1 = require("./Challenge");
var Video_1 = require("./Video");
var Stand = /** @class */ (function () {
    function Stand() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: "stand_id" }),
        __metadata("design:type", Number)
    ], Stand.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "theme" }),
        __metadata("design:type", String)
    ], Stand.prototype, "theme", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "image_logo_name" }),
        __metadata("design:type", String)
    ], Stand.prototype, "image_logo", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "image_background_name" }),
        __metadata("design:type", String)
    ], Stand.prototype, "image_background", void 0);
    __decorate([
<<<<<<< HEAD
        (0, typeorm_1.OneToMany)(function () { return Challenge_1.Challenge; }, function (Challenge) { return Challenge.challenges; }),
=======
        (0, typeorm_1.OneToMany)(function () { return Challenge_1.Challenge; }, function (Challenge) { return Challenge.stand; }),
>>>>>>> master
        __metadata("design:type", Challenge_1.Challenge)
    ], Stand.prototype, "challenge", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Video_1.Video; }, function (Video) { return Video.stand; }),
        __metadata("design:type", Array)
    ], Stand.prototype, "videos", void 0);
    Stand = __decorate([
<<<<<<< HEAD
        (0, typeorm_1.Entity)("stand")
=======
        (0, typeorm_1.Entity)({ name: "stand" })
>>>>>>> master
    ], Stand);
    return Stand;
}());
exports.Stand = Stand;
