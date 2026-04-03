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
exports.DebugTool = void 0;
const common_1 = require("@nestjs/common");
const weblate_api_service_1 = require("../services/weblate-api.service");
const config_1 = require("@nestjs/config");
let DebugTool = class DebugTool {
    constructor(weblateApiService, configService) {
        this.weblateApiService = weblateApiService;
        this.configService = configService;
    }
    async debugConfiguration() {
        const apiUrl = this.configService.get('WEBLATE_API_URL');
        const apiToken = this.configService.get('WEBLATE_API_TOKEN');
        return {
            api_url: apiUrl,
            token_configured: !!apiToken,
            token_length: apiToken?.length || 0,
            token_prefix: apiToken?.substring(0, 10) + '...',
            debug_mode: this.configService.get('DEBUG') === 'true',
        };
    }
    async testApiConnection() {
        try {
            const projects = await this.weblateApiService.listProjects();
            return {
                status: 'success',
                message: `API connection working - found ${projects.length} projects`,
            };
        }
        catch (error) {
            return { status: 'error', message: error.message };
        }
    }
    async debugListProjects() {
        try {
            const projects = await this.weblateApiService.listProjects();
            return {
                success: true,
                project_count: projects.length,
                projects: projects.map((p) => ({ slug: p.slug, name: p.name })),
            };
        }
        catch (error) {
            return {
                success: false,
                error: error.message,
                stack: error.stack,
            };
        }
    }
};
exports.DebugTool = DebugTool;
exports.DebugTool = DebugTool = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [weblate_api_service_1.WeblateApiService,
        config_1.ConfigService])
], DebugTool);
//# sourceMappingURL=debug.tool.js.map