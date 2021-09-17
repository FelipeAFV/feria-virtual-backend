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
exports.Video = void 0;
var typeorm_1 = require("typeorm");
var Stand_1 = require("./Stand");
var Video = /** @class */ (function () {
    function Video() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: "video_id" }),
        __metadata("design:type", Number)
    ], Video.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "video_url" }),
        __metadata("design:type", String)
    ], Video.prototype, "url", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Stand_1.Stand; }, function (Stand) { return Stand.videos; }),
        (0, typeorm_1.JoinColumn)({ name: "stand_id" }),
        __metadata("design:type", Stand_1.Stand)
    ], Video.prototype, "stand", void 0);
    Video = __decorate([
        (0, typeorm_1.Entity)({ name: "video" })
    ], Video);
    return Video;
}());
exports.Video = Video;
