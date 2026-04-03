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
exports.WeblateApiService = void 0;
const common_1 = require("@nestjs/common");
const weblate_1 = require("./weblate");
let WeblateApiService = class WeblateApiService {
    constructor(projectsService, componentsService, languagesService, translationsService, changesService) {
        this.projectsService = projectsService;
        this.componentsService = componentsService;
        this.languagesService = languagesService;
        this.translationsService = translationsService;
        this.changesService = changesService;
    }
    async listProjects() {
        return this.projectsService.listProjects();
    }
    async getProject(projectSlug) {
        return this.projectsService.getProject(projectSlug);
    }
    async listComponents(projectSlug) {
        return this.componentsService.listComponents(projectSlug);
    }
    async listLanguages(projectSlug) {
        return this.languagesService.listLanguages(projectSlug);
    }
    async searchTranslations(projectSlug, componentSlug, languageCode, query, source, target) {
        return this.translationsService.searchTranslations(projectSlug, componentSlug, languageCode, query, source, target);
    }
    async getTranslationByKey(projectSlug, componentSlug, languageCode, key) {
        return this.translationsService.getTranslationByKey(projectSlug, componentSlug, languageCode, key);
    }
    async searchStringInProject(projectSlug, searchValue, searchIn = 'both') {
        return this.translationsService.searchStringInProject(projectSlug, searchValue, searchIn);
    }
    async writeTranslation(projectSlug, componentSlug, languageCode, key, value, markAsApproved = false) {
        return this.translationsService.writeTranslation(projectSlug, componentSlug, languageCode, key, value, markAsApproved);
    }
    async bulkWriteTranslations(projectSlug, componentSlug, languageCode, translations) {
        return this.translationsService.bulkWriteTranslations(projectSlug, componentSlug, languageCode, translations);
    }
    async searchTranslationKeys(projectSlug, keyPattern, componentSlug) {
        return this.translationsService.searchTranslationKeys(projectSlug, keyPattern, componentSlug);
    }
    async findTranslationsForKey(projectSlug, key, componentSlug) {
        return this.translationsService.findTranslationsForKey(projectSlug, key, componentSlug);
    }
    async listTranslationKeys(projectSlug, componentSlug, languageCode) {
        return this.translationsService.listTranslationKeys(projectSlug, componentSlug, languageCode);
    }
    async listRecentChanges(limit = 50, user, timestampAfter, timestampBefore) {
        return this.changesService.listRecentChanges(limit, user, timestampAfter, timestampBefore);
    }
    async getProjectChanges(projectSlug) {
        return this.changesService.getProjectChanges(projectSlug);
    }
    async getComponentChanges(projectSlug, componentSlug) {
        return this.changesService.getComponentChanges(projectSlug, componentSlug);
    }
    async getChangesByAction(actionCodes, limit = 50) {
        return this.changesService.getChangesByAction(actionCodes, limit);
    }
    async getChangesByUser(user, limit = 50) {
        return this.changesService.getChangesByUser(user, limit);
    }
    async searchUnitsWithQuery(projectSlug, componentSlug, languageCode, searchQuery, limit = 50) {
        return this.translationsService.searchUnitsWithQuery(projectSlug, componentSlug, languageCode, searchQuery, limit);
    }
    async createTranslationUnit(projectSlug, componentSlug, languageCode, params) {
        return this.translationsService.createTranslationUnit(projectSlug, componentSlug, languageCode, params);
    }
};
exports.WeblateApiService = WeblateApiService;
exports.WeblateApiService = WeblateApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [weblate_1.WeblateProjectsService,
        weblate_1.WeblateComponentsService,
        weblate_1.WeblateLanguagesService,
        weblate_1.WeblateTranslationsService,
        weblate_1.WeblateChangesService])
], WeblateApiService);
//# sourceMappingURL=weblate-api.service.js.map