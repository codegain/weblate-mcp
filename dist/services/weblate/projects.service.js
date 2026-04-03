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
var WeblateProjectsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeblateProjectsService = void 0;
const common_1 = require("@nestjs/common");
const weblate_client_service_1 = require("../weblate-client.service");
const client_1 = require("../../client");
let WeblateProjectsService = WeblateProjectsService_1 = class WeblateProjectsService {
    constructor(weblateClientService) {
        this.weblateClientService = weblateClientService;
        this.logger = new common_1.Logger(WeblateProjectsService_1.name);
    }
    async listProjects() {
        try {
            const client = this.weblateClientService.getClient();
            const response = await (0, client_1.projectsList)({ client });
            const projects = response.data;
            if (Array.isArray(projects)) {
                return projects;
            }
            if (projects && Array.isArray(projects.results)) {
                return projects.results;
            }
            return [];
        }
        catch (error) {
            this.logger.error('Failed to list projects', error);
            throw new Error(`Failed to list projects: ${error.message}`);
        }
    }
    async getProject(projectSlug) {
        try {
            const client = this.weblateClientService.getClient();
            const response = await (0, client_1.projectsRetrieve)({
                client,
                path: { slug: projectSlug }
            });
            return response.data;
        }
        catch (error) {
            this.logger.error(`Failed to get project ${projectSlug}`, error);
            throw new Error(`Failed to get project ${projectSlug}: ${error.message}`);
        }
    }
};
exports.WeblateProjectsService = WeblateProjectsService;
exports.WeblateProjectsService = WeblateProjectsService = WeblateProjectsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [weblate_client_service_1.WeblateClientService])
], WeblateProjectsService);
//# sourceMappingURL=projects.service.js.map