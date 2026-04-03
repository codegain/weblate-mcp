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
var WeblateComponentsTool_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeblateComponentsTool = void 0;
const common_1 = require("@nestjs/common");
const mcp_nest_1 = require("@rekog/mcp-nest");
const zod_1 = require("zod");
const services_1 = require("../services");
let WeblateComponentsTool = WeblateComponentsTool_1 = class WeblateComponentsTool {
    constructor(weblateApiService) {
        this.weblateApiService = weblateApiService;
        this.logger = new common_1.Logger(WeblateComponentsTool_1.name);
    }
    async listComponents({ projectSlug }) {
        try {
            const components = await this.weblateApiService.listComponents(projectSlug);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Components in project "${projectSlug}":\n\n${components
                            .map((c) => `- **${c.name}** (${c.slug})\n  Source Language: ${c.source_language.name} (${c.source_language.code})`)
                            .join('\n\n')}`,
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to list components for ${projectSlug}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error listing components for project "${projectSlug}": ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
};
exports.WeblateComponentsTool = WeblateComponentsTool;
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'listComponents',
        description: 'List components in a specific project',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateComponentsTool.prototype, "listComponents", null);
exports.WeblateComponentsTool = WeblateComponentsTool = WeblateComponentsTool_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.WeblateApiService])
], WeblateComponentsTool);
//# sourceMappingURL=components.tool.js.map