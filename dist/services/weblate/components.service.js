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
var WeblateComponentsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeblateComponentsService = void 0;
const common_1 = require("@nestjs/common");
const weblate_client_service_1 = require("../weblate-client.service");
const client_1 = require("../../client");
let WeblateComponentsService = WeblateComponentsService_1 = class WeblateComponentsService {
    constructor(weblateClientService) {
        this.weblateClientService = weblateClientService;
        this.logger = new common_1.Logger(WeblateComponentsService_1.name);
    }
    async listComponents(projectSlug) {
        try {
            const client = this.weblateClientService.getClient();
            const response = await (0, client_1.projectsComponentsRetrieve)({
                client,
                path: { slug: projectSlug }
            });
            const components = response.data;
            if (Array.isArray(components)) {
                return components;
            }
            if (components && components.results && Array.isArray(components.results)) {
                return components.results;
            }
            if (components && typeof components === 'object') {
                return [components];
            }
            return [];
        }
        catch (error) {
            this.logger.error(`Failed to list components for project ${projectSlug}`, error);
            throw new Error(`Failed to list components: ${error.message}`);
        }
    }
};
exports.WeblateComponentsService = WeblateComponentsService;
exports.WeblateComponentsService = WeblateComponentsService = WeblateComponentsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [weblate_client_service_1.WeblateClientService])
], WeblateComponentsService);
//# sourceMappingURL=components.service.js.map