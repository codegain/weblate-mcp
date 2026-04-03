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
var WeblateProjectsTool_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeblateProjectsTool = void 0;
const common_1 = require("@nestjs/common");
const mcp_nest_1 = require("@rekog/mcp-nest");
const zod_1 = require("zod");
const services_1 = require("../services");
let WeblateProjectsTool = WeblateProjectsTool_1 = class WeblateProjectsTool {
    constructor(weblateApiService) {
        this.weblateApiService = weblateApiService;
        this.logger = new common_1.Logger(WeblateProjectsTool_1.name);
    }
    async listProjects() {
        try {
            const projects = await this.weblateApiService.listProjects();
            return {
                content: [
                    {
                        type: 'text',
                        text: `Found ${projects.length} projects:\n\n${projects
                            .map((p) => `- **${p.name}** (${p.slug})\n  URL: ${p.web_url}`)
                            .join('\n\n')}`,
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error('Failed to list projects', error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error listing projects: ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
};
exports.WeblateProjectsTool = WeblateProjectsTool;
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'listProjects',
        description: 'List all available Weblate projects',
        parameters: zod_1.z.object({}),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeblateProjectsTool.prototype, "listProjects", null);
exports.WeblateProjectsTool = WeblateProjectsTool = WeblateProjectsTool_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.WeblateApiService])
], WeblateProjectsTool);
//# sourceMappingURL=projects.tool.js.map