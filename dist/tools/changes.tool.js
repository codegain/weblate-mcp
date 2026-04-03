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
var WeblateChangesTool_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeblateChangesTool = void 0;
const common_1 = require("@nestjs/common");
const mcp_nest_1 = require("@rekog/mcp-nest");
const zod_1 = require("zod");
const services_1 = require("../services");
let WeblateChangesTool = WeblateChangesTool_1 = class WeblateChangesTool {
    constructor(weblateApiService) {
        this.weblateApiService = weblateApiService;
        this.logger = new common_1.Logger(WeblateChangesTool_1.name);
    }
    async listRecentChanges({ limit = 20, user, timestampAfter, timestampBefore, }) {
        try {
            const result = await this.weblateApiService.listRecentChanges(limit, user, timestampAfter, timestampBefore);
            if (result.results.length === 0) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: 'No recent changes found.',
                        },
                    ],
                };
            }
            const changesList = result.results
                .slice(0, limit)
                .map(change => this.formatChangeResult(change))
                .join('\n\n---\n\n');
            return {
                content: [
                    {
                        type: 'text',
                        text: `Found ${result.count} recent changes (showing ${Math.min(limit, result.results.length)}):\n\n${changesList}`,
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error('Failed to list recent changes', error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error listing recent changes: ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async getProjectChanges({ projectSlug }) {
        try {
            const result = await this.weblateApiService.getProjectChanges(projectSlug);
            if (result.results.length === 0) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `No changes found for project "${projectSlug}".`,
                        },
                    ],
                };
            }
            const changesList = result.results
                .slice(0, 20)
                .map(change => this.formatChangeResult(change))
                .join('\n\n---\n\n');
            return {
                content: [
                    {
                        type: 'text',
                        text: `Recent changes in project "${projectSlug}" (${result.count} total):\n\n${changesList}`,
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to get changes for project ${projectSlug}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error getting changes for project "${projectSlug}": ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async getComponentChanges({ projectSlug, componentSlug, }) {
        try {
            const result = await this.weblateApiService.getComponentChanges(projectSlug, componentSlug);
            if (result.results.length === 0) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `No changes found for component "${componentSlug}" in project "${projectSlug}".`,
                        },
                    ],
                };
            }
            const changesList = result.results
                .slice(0, 20)
                .map(change => this.formatChangeResult(change))
                .join('\n\n---\n\n');
            return {
                content: [
                    {
                        type: 'text',
                        text: `Recent changes in component "${componentSlug}" (${result.count} total):\n\n${changesList}`,
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to get changes for component ${componentSlug} in project ${projectSlug}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error getting changes for component "${componentSlug}": ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async getChangesByUser({ user, limit = 20, }) {
        try {
            const result = await this.weblateApiService.getChangesByUser(user, limit);
            if (result.results.length === 0) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `No changes found for user "${user}".`,
                        },
                    ],
                };
            }
            const changesList = result.results
                .slice(0, limit)
                .map(change => this.formatChangeResult(change))
                .join('\n\n---\n\n');
            return {
                content: [
                    {
                        type: 'text',
                        text: `Recent changes by user "${user}" (${result.count} total):\n\n${changesList}`,
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to get changes by user ${user}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error getting changes by user "${user}": ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    formatChangeResult(change) {
        const timestamp = change.timestamp ? new Date(change.timestamp).toLocaleString() : 'Unknown';
        const actionDescription = this.getActionDescription(change.action || 0);
        const user = change.user || 'Unknown user';
        const target = change.target || 'N/A';
        return `**${actionDescription}**\n**User:** ${user}\n**Time:** ${timestamp}\n**Target:** ${target}`;
    }
    getActionDescription(action) {
        const actionMap = {
            0: 'Resource updated',
            1: 'Translation completed',
            2: 'Translation changed',
            3: 'Comment added',
            4: 'Suggestion added',
            5: 'Translation added',
            6: 'Automatically translated',
            7: 'Suggestion accepted',
            8: 'Translation reverted',
            9: 'Translation uploaded',
            13: 'Source string added',
            14: 'Component locked',
            15: 'Component unlocked',
            17: 'Changes committed',
            18: 'Changes pushed',
            19: 'Repository reset',
            20: 'Repository merged',
            21: 'Repository rebased',
            22: 'Repository merge failed',
            23: 'Repository rebase failed',
            24: 'Parsing failed',
            25: 'Translation removed',
            26: 'Suggestion removed',
            27: 'Translation replaced',
            28: 'Repository push failed',
            29: 'Suggestion removed during clean-up',
            30: 'Source string changed',
            31: 'String added',
            32: 'Bulk status changed',
            33: 'Visibility changed',
            34: 'User added',
            35: 'User removed',
            36: 'Translation approved',
            37: 'Marked for edit',
            38: 'Component removed',
            39: 'Project removed',
            41: 'Project renamed',
            42: 'Component renamed',
            43: 'Moved component',
            45: 'Contributor joined',
            46: 'Announcement posted',
            47: 'Alert triggered',
            48: 'Language added',
            49: 'Language requested',
            50: 'Project created',
            51: 'Component created',
            52: 'User invited',
        };
        return actionMap[action] || `Unknown action (${action})`;
    }
};
exports.WeblateChangesTool = WeblateChangesTool;
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'listRecentChanges',
        description: 'List recent changes across all projects in Weblate',
        parameters: zod_1.z.object({
            limit: zod_1.z.number().optional().describe('Number of changes to return (default: 20)').default(20),
            user: zod_1.z.string().optional().describe('Filter by specific user'),
            timestampAfter: zod_1.z.string().optional().describe('Show changes after this timestamp (ISO format)'),
            timestampBefore: zod_1.z.string().optional().describe('Show changes before this timestamp (ISO format)'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateChangesTool.prototype, "listRecentChanges", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'getProjectChanges',
        description: 'Get recent changes for a specific project',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateChangesTool.prototype, "getProjectChanges", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'getComponentChanges',
        description: 'Get recent changes for a specific component',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
            componentSlug: zod_1.z.string().describe('The slug of the component'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateChangesTool.prototype, "getComponentChanges", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'getChangesByUser',
        description: 'Get recent changes by a specific user',
        parameters: zod_1.z.object({
            user: zod_1.z.string().describe('Username to filter by'),
            limit: zod_1.z.number().optional().describe('Number of changes to return (default: 20)').default(20),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateChangesTool.prototype, "getChangesByUser", null);
exports.WeblateChangesTool = WeblateChangesTool = WeblateChangesTool_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.WeblateApiService])
], WeblateChangesTool);
//# sourceMappingURL=changes.tool.js.map