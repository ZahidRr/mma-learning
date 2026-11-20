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
import { Controller, Get, Param, Query, } from '@nestjs/common';
import { QuestionsService } from './questions.service.js';
let QuestionsController = class QuestionsController {
    questionsService;
    constructor(questionsService) {
        this.questionsService = questionsService;
    }
    getLessonQuestions(lessonId, userId, lang) {
        return this.questionsService.getLessonQuestions(lessonId, userId, lang);
    }
    getNextQuestion(lessonId, sessionId, lang) {
        return this.questionsService.getNextQuestion(lessonId, sessionId, lang);
    }
};
__decorate([
    Get('lessons/:lessonId'),
    __param(0, Param('lessonId')),
    __param(1, Query('userId')),
    __param(2, Query('lang')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], QuestionsController.prototype, "getLessonQuestions", null);
__decorate([
    Get('lessons/:lessonId/next'),
    __param(0, Param('lessonId')),
    __param(1, Query('sessionId')),
    __param(2, Query('lang')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], QuestionsController.prototype, "getNextQuestion", null);
QuestionsController = __decorate([
    Controller('questions'),
    __metadata("design:paramtypes", [QuestionsService])
], QuestionsController);
export { QuestionsController };
//# sourceMappingURL=questions.controller.js.map