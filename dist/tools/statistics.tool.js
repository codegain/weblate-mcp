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
var WeblateStatisticsTool_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeblateStatisticsTool = void 0;
const common_1 = require("@nestjs/common");
const mcp_nest_1 = require("@rekog/mcp-nest");
const zod_1 = require("zod");
const services_1 = require("../services");
const statistics_service_1 = require("../services/weblate/statistics.service");
let WeblateStatisticsTool = WeblateStatisticsTool_1 = class WeblateStatisticsTool {
    constructor(apiService, statisticsService) {
        this.apiService = apiService;
        this.statisticsService = statisticsService;
        this.logger = new common_1.Logger(WeblateStatisticsTool_1.name);
    }
    async getProjectStatistics({ projectSlug }) {
        try {
            const stats = await this.statisticsService.getProjectStatistics(projectSlug);
            return {
                content: [
                    {
                        type: 'text',
                        text: this.formatProjectStatistics(projectSlug, stats),
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to get project statistics for ${projectSlug}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error getting project statistics: ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async getComponentStatistics({ projectSlug, componentSlug, }) {
        try {
            const stats = await this.statisticsService.getComponentStatistics(projectSlug, componentSlug);
            return {
                content: [
                    {
                        type: 'text',
                        text: this.formatComponentStatistics(projectSlug, componentSlug, stats),
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to get component statistics for ${projectSlug}/${componentSlug}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error getting component statistics: ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async getProjectDashboard({ projectSlug }) {
        try {
            const dashboard = await this.statisticsService.getProjectDashboard(projectSlug);
            return {
                content: [
                    {
                        type: 'text',
                        text: this.formatProjectDashboard(projectSlug, dashboard),
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to get project dashboard for ${projectSlug}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error getting project dashboard: ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async getTranslationStatistics({ projectSlug, componentSlug, languageCode, }) {
        try {
            const stats = await this.statisticsService.getTranslationStatistics(projectSlug, componentSlug, languageCode);
            return {
                content: [
                    {
                        type: 'text',
                        text: this.formatTranslationStatistics(projectSlug, componentSlug, languageCode, stats),
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to get translation statistics for ${projectSlug}/${componentSlug}/${languageCode}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error getting translation statistics: ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async getComponentLanguageProgress({ projectSlug, componentSlug, }) {
        try {
            const progress = await this.statisticsService.getComponentLanguageProgress(projectSlug, componentSlug);
            return {
                content: [
                    {
                        type: 'text',
                        text: this.formatComponentLanguageProgress(projectSlug, componentSlug, progress),
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to get component language progress for ${projectSlug}/${componentSlug}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error getting component language progress: ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async getLanguageStatistics({ languageCode }) {
        try {
            const stats = await this.statisticsService.getLanguageStatistics(languageCode);
            return {
                content: [
                    {
                        type: 'text',
                        text: this.formatLanguageStatistics(languageCode, stats),
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to get language statistics for ${languageCode}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error getting language statistics: ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async getUserStatistics({ username }) {
        try {
            const stats = await this.statisticsService.getUserStatistics(username);
            return {
                content: [
                    {
                        type: 'text',
                        text: this.formatUserStatistics(username, stats),
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to get user statistics for ${username}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error getting user statistics: ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    formatProjectStatistics(projectSlug, stats) {
        const getStatValue = (key, defaultValue = 'N/A') => {
            return stats?.[key] !== undefined ? stats[key] : defaultValue;
        };
        const formatPercent = (value) => {
            return typeof value === 'number' ? `${value.toFixed(1)}%` : 'N/A';
        };
        return `## 📊 Project Statistics: ${stats?.name || projectSlug}

**Overall Progress:**
- 🎯 Translation Progress: ${formatPercent(getStatValue('translated_percent'))}
- ✅ Approved: ${formatPercent(getStatValue('approved_percent'))}
- 🔍 Needs Review: ${formatPercent(getStatValue('readonly_percent'))}
- ❌ Untranslated: ${formatPercent(getStatValue('nottranslated_percent'))}

**String Counts:**
- 📝 Total Strings: ${getStatValue('total')}
- ✅ Translated: ${getStatValue('translated')}
- 🎯 Approved: ${getStatValue('approved')}
- ❌ Untranslated: ${getStatValue('nottranslated')}
- 🔍 Read-only: ${getStatValue('readonly')}

**Project Details:**
- 🌐 URL: ${stats?.web_url || 'N/A'}
- 🔗 Repository: ${stats?.repository_url || 'N/A'}`;
    }
    formatComponentStatistics(projectSlug, componentSlug, stats) {
        const getStatValue = (key, defaultValue = 'N/A') => {
            return stats?.[key] !== undefined ? stats[key] : defaultValue;
        };
        const formatPercent = (value) => {
            return typeof value === 'number' ? `${value.toFixed(1)}%` : 'N/A';
        };
        return `## 📊 Component Statistics: ${stats?.name || componentSlug}

**Project:** ${projectSlug}
**Component:** ${componentSlug}

**Translation Progress:**
- 🎯 Translated: ${formatPercent(getStatValue('translated_percent'))}
- ✅ Approved: ${formatPercent(getStatValue('approved_percent'))}
- 🔍 Needs Review: ${formatPercent(getStatValue('readonly_percent'))}
- ❌ Untranslated: ${formatPercent(getStatValue('nottranslated_percent'))}

**String Counts:**
- 📝 Total: ${getStatValue('total')}
- ✅ Translated: ${getStatValue('translated')}
- 🎯 Approved: ${getStatValue('approved')}
- ❌ Untranslated: ${getStatValue('nottranslated')}

**Component Details:**
- 🌐 URL: ${stats?.web_url || 'N/A'}
- 📁 Source Language: ${stats?.source_language?.name || 'N/A'} (${stats?.source_language?.code || 'N/A'})`;
    }
    formatTranslationStatistics(projectSlug, componentSlug, languageCode, stats) {
        const getStatValue = (key, defaultValue = 'N/A') => {
            return stats?.[key] !== undefined ? stats[key] : defaultValue;
        };
        const formatPercent = (value) => {
            return typeof value === 'number' ? `${value.toFixed(1)}%` : 'N/A';
        };
        return `## 📊 Translation Statistics

**Translation:** ${projectSlug}/${componentSlug}/${languageCode}

**Progress:**
- 🎯 Translated: ${formatPercent(getStatValue('translated_percent'))}
- ✅ Approved: ${formatPercent(getStatValue('approved_percent'))}
- 🔍 Needs Review: ${formatPercent(getStatValue('readonly_percent'))}
- ❌ Untranslated: ${formatPercent(getStatValue('nottranslated_percent'))}

**String Details:**
- 📝 Total Strings: ${getStatValue('total')}
- ✅ Translated: ${getStatValue('translated')}
- 🎯 Approved: ${getStatValue('approved')}
- ❌ Untranslated: ${getStatValue('nottranslated')}
- 🔍 Readonly: ${getStatValue('readonly')}

**Quality Metrics:**
- ⚠️ Failing Checks: ${getStatValue('failing_percent', '0')}%
- 💡 Suggestions: ${getStatValue('suggestions')}
- 💬 Comments: ${getStatValue('comments')}`;
    }
    formatProjectDashboard(projectSlug, dashboard) {
        const project = dashboard.project;
        const components = dashboard.components || [];
        let result = this.formatProjectStatistics(projectSlug, project);
        result += '\n\n## 📋 Component Breakdown\n\n';
        components.forEach((comp, index) => {
            if (comp.statistics) {
                const stats = comp.statistics;
                const formatPercent = (value) => {
                    return typeof value === 'number' ? `${value.toFixed(1)}%` : 'N/A';
                };
                result += `**${index + 1}. ${comp.component}** (${comp.slug})
- 🎯 Progress: ${formatPercent(stats.translated_percent)}
- ✅ Approved: ${formatPercent(stats.approved_percent)}
- 📝 Total Strings: ${stats.total || 'N/A'}

`;
            }
            else {
                result += `**${index + 1}. ${comp.component}** (${comp.slug})
- ❌ Error: ${comp.error || 'Unable to load statistics'}

`;
            }
        });
        return result;
    }
    formatComponentLanguageProgress(projectSlug, componentSlug, progress) {
        let result = `## 🌐 Language Progress: ${projectSlug}/${componentSlug}\n\n`;
        progress.forEach((lang, index) => {
            if (lang.statistics) {
                const stats = lang.statistics;
                const formatPercent = (value) => {
                    return typeof value === 'number' ? `${value.toFixed(1)}%` : 'N/A';
                };
                const progressBar = this.generateProgressBar(stats.translated_percent || 0);
                result += `**${index + 1}. ${lang.language}** (${lang.code})
${progressBar} ${formatPercent(stats.translated_percent)}
- ✅ Approved: ${formatPercent(stats.approved_percent)}
- 📝 Total: ${stats.total || 'N/A'} | Translated: ${stats.translated || 'N/A'}

`;
            }
            else {
                result += `**${index + 1}. ${lang.language}** (${lang.code})
- ❌ Error: ${lang.error || 'Unable to load statistics'}

`;
            }
        });
        return result;
    }
    formatLanguageStatistics(languageCode, stats) {
        const getStatValue = (key, defaultValue = 'N/A') => {
            return stats?.[key] !== undefined ? stats[key] : defaultValue;
        };
        const formatPercent = (value) => {
            return typeof value === 'number' ? `${value.toFixed(1)}%` : 'N/A';
        };
        return `## 🌐 Language Statistics: ${stats?.name || languageCode}

**Language Details:**
- 📛 Name: ${getStatValue('name')}
- 🔤 Code: ${getStatValue('code')}
- 📍 Direction: ${getStatValue('direction', 'ltr')}

**Overall Progress:**
- 🎯 Translated: ${formatPercent(getStatValue('translated_percent'))}
- ✅ Approved: ${formatPercent(getStatValue('approved_percent'))}
- ❌ Untranslated: ${formatPercent(getStatValue('nottranslated_percent'))}

**String Counts:**
- 📝 Total: ${getStatValue('total')}
- ✅ Translated: ${getStatValue('translated')}
- 🎯 Approved: ${getStatValue('approved')}
- ❌ Untranslated: ${getStatValue('nottranslated')}`;
    }
    formatUserStatistics(username, stats) {
        const getStatValue = (key, defaultValue = 'N/A') => {
            return stats?.[key] !== undefined ? stats[key] : defaultValue;
        };
        return `## 👤 User Statistics: ${stats?.full_name || username}

**User Details:**
- 👤 Username: ${getStatValue('username')}
- 📧 Email: ${getStatValue('email')}
- 📅 Joined: ${stats?.date_joined ? new Date(stats.date_joined).toLocaleDateString() : 'N/A'}

**Contribution Stats:**
- ✏️ Translations: ${getStatValue('translated')}
- ✅ Approved: ${getStatValue('approved')}
- 💡 Suggestions: ${getStatValue('suggestions')}
- 💬 Comments: ${getStatValue('comments')}

**Activity:**
- 📈 Total Changes: ${getStatValue('total_changes')}
- 🗓️ Last Activity: ${stats?.last_login ? new Date(stats.last_login).toLocaleDateString() : 'N/A'}`;
    }
    generateProgressBar(percentage) {
        const width = 20;
        const filled = Math.max(0, Math.min(width, Math.floor((percentage / 100) * width)));
        const empty = Math.max(0, width - filled);
        return `[${'█'.repeat(filled)}${'░'.repeat(empty)}]`;
    }
};
exports.WeblateStatisticsTool = WeblateStatisticsTool;
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'getProjectStatistics',
        description: 'Get comprehensive statistics for a project including completion rates and string counts',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateStatisticsTool.prototype, "getProjectStatistics", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'getComponentStatistics',
        description: 'Get detailed statistics for a specific component',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
            componentSlug: zod_1.z.string().describe('The slug of the component'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateStatisticsTool.prototype, "getComponentStatistics", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'getProjectDashboard',
        description: 'Get a comprehensive dashboard overview for a project with all component statistics',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateStatisticsTool.prototype, "getProjectDashboard", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'getTranslationStatistics',
        description: 'Get statistics for a specific translation (project/component/language combination)',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
            componentSlug: zod_1.z.string().describe('The slug of the component'),
            languageCode: zod_1.z.string().describe('The language code (e.g., en, es, fr)'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateStatisticsTool.prototype, "getTranslationStatistics", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'getComponentLanguageProgress',
        description: 'Get translation progress for all languages in a component',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
            componentSlug: zod_1.z.string().describe('The slug of the component'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateStatisticsTool.prototype, "getComponentLanguageProgress", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'getLanguageStatistics',
        description: 'Get statistics for a specific language across all projects',
        parameters: zod_1.z.object({
            languageCode: zod_1.z.string().describe('The language code (e.g., en, es, fr)'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateStatisticsTool.prototype, "getLanguageStatistics", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'getUserStatistics',
        description: 'Get contribution statistics for a specific user',
        parameters: zod_1.z.object({
            username: zod_1.z.string().describe('The username to get statistics for'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateStatisticsTool.prototype, "getUserStatistics", null);
exports.WeblateStatisticsTool = WeblateStatisticsTool = WeblateStatisticsTool_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.WeblateApiService,
        statistics_service_1.WeblateStatisticsService])
], WeblateStatisticsTool);
//# sourceMappingURL=statistics.tool.js.map