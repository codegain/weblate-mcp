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
var WeblateLanguagesTool_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeblateLanguagesTool = void 0;
const common_1 = require("@nestjs/common");
const mcp_nest_1 = require("@rekog/mcp-nest");
const zod_1 = require("zod");
const services_1 = require("../services");
let WeblateLanguagesTool = WeblateLanguagesTool_1 = class WeblateLanguagesTool {
    constructor(weblateApiService) {
        this.weblateApiService = weblateApiService;
        this.logger = new common_1.Logger(WeblateLanguagesTool_1.name);
    }
    async listLanguages({ projectSlug }) {
        try {
            const languages = await this.weblateApiService.listLanguages(projectSlug);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Languages in project "${projectSlug}":\n\n${languages
                            .map((l) => `- **${l.name}** (${l.code})`)
                            .join('\n')}`,
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to list languages for ${projectSlug}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error listing languages for project "${projectSlug}": ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
};
exports.WeblateLanguagesTool = WeblateLanguagesTool;
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'listLanguages',
        description: 'List languages available in a specific project',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateLanguagesTool.prototype, "listLanguages", null);
exports.WeblateLanguagesTool = WeblateLanguagesTool = WeblateLanguagesTool_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.WeblateApiService])
], WeblateLanguagesTool);
//# sourceMappingURL=languages.tool.js.map