var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Post, } from '@nestjs/common';
import { StartLessonSessionDto } from './dto/start-lesson-session.dto.js';
import { LessonSessionsService } from './lesson-sessions.service.js';
let LessonSessionsController = class LessonSessionsController {
    lessonSessionsService;
    constructor(lessonSessionsService) {
        this.lessonSessionsService = lessonSessionsService;
    }
    startSession(dto) {
        return this.lessonSessionsService.startSession(dto);
    }
};
__decorate([
    Post('start'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartLessonSessionDto]),
    __metadata("design:returntype", void 0)
], LessonSessionsController.prototype, "startSession", null);
LessonSessionsController = __decorate([
    Controller('lesson-sessions'),
    __metadata("design:paramtypes", [LessonSessionsService])
], LessonSessionsController);
export { LessonSessionsController };
//# sourceMappingURL=lesson-sessions.controller.js.map