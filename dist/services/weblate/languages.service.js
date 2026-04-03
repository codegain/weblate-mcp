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
var WeblateLanguagesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeblateLanguagesService = void 0;
const common_1 = require("@nestjs/common");
const weblate_client_service_1 = require("../weblate-client.service");
const client_1 = require("../../client");
let WeblateLanguagesService = WeblateLanguagesService_1 = class WeblateLanguagesService {
    constructor(weblateClientService) {
        this.weblateClientService = weblateClientService;
        this.logger = new common_1.Logger(WeblateLanguagesService_1.name);
    }
    async listLanguages(projectSlug) {
        try {
            const client = this.weblateClientService.getClient();
            const response = await (0, client_1.projectsLanguagesRetrieve)({
                client,
                path: { slug: projectSlug }
            });
            const languages = response.data;
            if (Array.isArray(languages)) {
                return languages;
            }
            if (languages && languages.results && Array.isArray(languages.results)) {
                return languages.results;
            }
            if (languages && typeof languages === 'object') {
                return [languages];
            }
            return [];
        }
        catch (error) {
            this.logger.error(`Failed to list languages for project ${projectSlug}`, error);
            throw new Error(`Failed to list languages: ${error.message}`);
        }
    }
};
exports.WeblateLanguagesService = WeblateLanguagesService;
exports.WeblateLanguagesService = WeblateLanguagesService = WeblateLanguagesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [weblate_client_service_1.WeblateClientService])
], WeblateLanguagesService);
//# sourceMappingURL=languages.service.js.map