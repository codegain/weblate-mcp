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
var WeblateTranslationsTool_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeblateTranslationsTool = void 0;
const common_1 = require("@nestjs/common");
const mcp_nest_1 = require("@rekog/mcp-nest");
const zod_1 = require("zod");
const services_1 = require("../services");
let WeblateTranslationsTool = WeblateTranslationsTool_1 = class WeblateTranslationsTool {
    constructor(weblateApiService) {
        this.weblateApiService = weblateApiService;
        this.logger = new common_1.Logger(WeblateTranslationsTool_1.name);
    }
    async searchStringInProject({ projectSlug, value, searchIn = 'both', }) {
        try {
            const results = await this.weblateApiService.searchStringInProject(projectSlug, value, searchIn);
            if (results.length === 0) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `No translations found containing "${value}" in project "${projectSlug}"`,
                        },
                    ],
                };
            }
            const formattedResults = results
                .slice(0, 10)
                .map(this.formatTranslationResult)
                .join('\n\n');
            const totalText = results.length > 10
                ? `\n\n*Showing first 10 of ${results.length} results*`
                : '';
            return {
                content: [
                    {
                        type: 'text',
                        text: `Found ${results.length} translations containing "${value}" in project "${projectSlug}":\n\n${formattedResults}${totalText}`,
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to search for "${value}" in ${projectSlug}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error searching for "${value}" in project "${projectSlug}": ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async getTranslationForKey({ projectSlug, componentSlug, languageCode, key, }) {
        try {
            const translation = await this.weblateApiService.getTranslationByKey(projectSlug, componentSlug, languageCode, key);
            if (!translation) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Translation not found for key "${key}" in ${projectSlug}/${componentSlug}/${languageCode}`,
                        },
                    ],
                };
            }
            return {
                content: [
                    {
                        type: 'text',
                        text: this.formatTranslationResult(translation),
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to get translation for key ${key}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error getting translation for key "${key}": ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async writeTranslation({ projectSlug, componentSlug, languageCode, key, value, markAsApproved = false, }) {
        try {
            const updatedUnit = await this.weblateApiService.writeTranslation(projectSlug, componentSlug, languageCode, key, value, markAsApproved);
            return {
                content: [
                    {
                        type: 'text',
                        text: updatedUnit
                            ? `Successfully updated translation for key "${key}"\n\n${this.formatTranslationResult(updatedUnit)}`
                            : `Failed to update translation for key "${key}"`,
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to write translation for key ${key}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error writing translation for key "${key}": ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async bulkWriteTranslations({ projectSlug, componentSlug, languageCode, translations, }) {
        try {
            const result = await this.weblateApiService.bulkWriteTranslations(projectSlug, componentSlug, languageCode, translations);
            let resultText = `Bulk translation update completed for ${projectSlug}/${componentSlug}/${languageCode}\n\n`;
            resultText += `📊 **Summary:**\n`;
            resultText += `- Total: ${result.summary.total}\n`;
            resultText += `- ✅ Successful: ${result.summary.successful}\n`;
            resultText += `- ❌ Failed: ${result.summary.failed}\n\n`;
            if (result.successful.length > 0) {
                resultText += `✅ **Successfully Updated (${result.successful.length}):**\n`;
                result.successful.slice(0, 10).forEach(({ key }) => {
                    resultText += `- ${key}\n`;
                });
                if (result.successful.length > 10) {
                    resultText += `... and ${result.successful.length - 10} more\n`;
                }
                resultText += '\n';
            }
            if (result.failed.length > 0) {
                resultText += `❌ **Failed Updates (${result.failed.length}):**\n`;
                result.failed.slice(0, 5).forEach(({ key, error }) => {
                    resultText += `- ${key}: ${error}\n`;
                });
                if (result.failed.length > 5) {
                    resultText += `... and ${result.failed.length - 5} more failures\n`;
                }
            }
            return {
                content: [
                    {
                        type: 'text',
                        text: resultText,
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to bulk write translations`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error during bulk translation update: ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async findTranslationsForKey({ projectSlug, key, }) {
        try {
            const results = await this.weblateApiService.findTranslationsForKey(projectSlug, key);
            if (results.length === 0) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `No translations found for key "${key}" in project "${projectSlug}"`,
                        },
                    ],
                };
            }
            const groupedResults = results.reduce((acc, translation) => {
                const component = translation.web_url?.split('/')[4] || 'unknown';
                const language = translation.web_url?.split('/')[6] || 'unknown';
                const groupKey = `${component}/${language}`;
                if (!acc[groupKey]) {
                    acc[groupKey] = [];
                }
                acc[groupKey].push(translation);
                return acc;
            }, {});
            const formattedResults = Object.entries(groupedResults)
                .map(([groupKey, translations]) => {
                const [component, language] = groupKey.split('/');
                const translationList = translations.map(this.formatTranslationResult).join('\n');
                return `**${component} (${language}):**\n${translationList}`;
            })
                .join('\n\n');
            return {
                content: [
                    {
                        type: 'text',
                        text: `Found ${results.length} translations for key "${key}" in project "${projectSlug}":\n\n${formattedResults}`,
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error(`Failed to find translations for key "${key}" in ${projectSlug}`, error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error finding translations for key "${key}" in project "${projectSlug}": ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async searchUnitsWithFilters({ projectSlug, componentSlug, languageCode, searchQuery, limit = 50, }) {
        try {
            const results = await this.weblateApiService.searchUnitsWithQuery(projectSlug, componentSlug, languageCode, searchQuery, Math.min(limit, 200));
            if (results.length === 0) {
                return {
                    content: [
                        {
                            type: 'text',
                            text: `No units found matching query "${searchQuery}" in ${projectSlug}/${componentSlug}/${languageCode}`,
                        },
                    ],
                };
            }
            const resultText = this.formatFilteredResults(results, projectSlug, componentSlug, languageCode, searchQuery);
            return {
                content: [
                    {
                        type: 'text',
                        text: resultText,
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error('Failed to search units with filters', error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error searching units: ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    async createTranslationUnit({ projectSlug, componentSlug, languageCode, key, value, context, source, target, state, }) {
        try {
            const unit = await this.weblateApiService.createTranslationUnit(projectSlug, componentSlug, languageCode, { key, value, context, source, target, state });
            return {
                content: [
                    {
                        type: 'text',
                        text: `Successfully created translation unit in ${projectSlug}/${componentSlug}/${languageCode}\n\n**ID:** ${unit.id}\n**Key/Context:** ${unit.context || key || '(none)'}\n**Source:** ${Array.isArray(unit.source) ? unit.source.join(', ') : unit.source}\n**web_url:** ${unit.web_url || '(not available)'}`,
                    },
                ],
            };
        }
        catch (error) {
            this.logger.error('Failed to create translation unit', error);
            return {
                content: [
                    {
                        type: 'text',
                        text: `Error creating translation unit: ${error.message}`,
                    },
                ],
                isError: true,
            };
        }
    }
    formatTranslationResult(translation) {
        const status = translation.approved
            ? '✅ Approved'
            : translation.translated
                ? '📝 Translated'
                : '❌ Untranslated';
        const sourceText = translation.source && Array.isArray(translation.source)
            ? translation.source.join('')
            : (translation.source || '(empty)');
        const targetText = translation.target && Array.isArray(translation.target)
            ? translation.target.join('')
            : (translation.target || '(empty)');
        return `**Key:** ${translation.context}
**Source:** ${sourceText}
**Target:** ${targetText}
**Status:** ${status}
**Context:** ${translation.context || '(none)'}
**Note:** ${translation.note || '(none)'}
**ID:** ${translation.id}`;
    }
    formatFilteredResults(results, projectSlug, componentSlug, languageCode, searchQuery) {
        if (results.length === 0) {
            return `No units found in ${projectSlug}/${componentSlug}/${languageCode} matching query: ${searchQuery}`;
        }
        const formattedResults = results
            .slice(0, 50)
            .map(unit => {
            const sourceText = unit.source && Array.isArray(unit.source)
                ? unit.source.join('')
                : (unit.source || '(empty)');
            const targetText = unit.target && Array.isArray(unit.target)
                ? unit.target.join('')
                : (unit.target || '(empty)');
            let status = '❓ Unknown';
            if (unit.state === 0)
                status = '❌ Untranslated';
            else if (unit.state === 10)
                status = '🔄 Needs Editing';
            else if (unit.state === 20)
                status = '✅ Translated';
            else if (unit.state === 30)
                status = '✅ Approved';
            else if (unit.state === 100)
                status = '🔒 Read-only';
            return `**Key:** ${unit.context || '(no context)'}
**Source:** ${sourceText}
**Target:** ${targetText}
**Status:** ${status}
**Location:** ${unit.location || '(none)'}
**Note:** ${unit.note || '(none)'}
**ID:** ${unit.id}`;
        })
            .join('\n\n');
        const totalText = results.length > 50
            ? `\n\n*Showing first 50 of ${results.length} units*`
            : '';
        return `Found ${results.length} units in ${projectSlug}/${componentSlug}/${languageCode} matching query "${searchQuery}":\n\n${formattedResults}${totalText}`;
    }
};
exports.WeblateTranslationsTool = WeblateTranslationsTool;
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'searchStringInProject',
        description: 'Search for translations containing specific text in a project',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project to search in'),
            value: zod_1.z.string().describe('The text to search for'),
            searchIn: zod_1.z
                .enum(['source', 'target', 'both'])
                .optional()
                .describe('Where to search: source text, target translation, or both')
                .default('both'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateTranslationsTool.prototype, "searchStringInProject", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'getTranslationForKey',
        description: 'Get translation value for a specific key in a project',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
            componentSlug: zod_1.z.string().describe('The slug of the component'),
            languageCode: zod_1.z.string().describe('The language code (e.g., en, es, fr)'),
            key: zod_1.z.string().describe('The translation key to look up'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateTranslationsTool.prototype, "getTranslationForKey", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'writeTranslation',
        description: 'Update or write a translation value for a specific key',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
            componentSlug: zod_1.z.string().describe('The slug of the component'),
            languageCode: zod_1.z.string().describe('The language code (e.g., en, es, fr)'),
            key: zod_1.z.string().describe('The translation key to update'),
            value: zod_1.z.string().describe('The new translation value'),
            markAsApproved: zod_1.z
                .boolean()
                .optional()
                .describe('Whether to mark as approved (default: false)')
                .default(false),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateTranslationsTool.prototype, "writeTranslation", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'bulkWriteTranslations',
        description: 'Update multiple translations in batch for efficient bulk operations',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
            componentSlug: zod_1.z.string().describe('The slug of the component'),
            languageCode: zod_1.z.string().describe('The language code (e.g., en, es, fr)'),
            translations: zod_1.z.array(zod_1.z.object({
                key: zod_1.z.string().describe('The translation key to update'),
                value: zod_1.z.string().describe('The new translation value'),
                markAsApproved: zod_1.z.boolean().optional().describe('Whether to mark as approved (default: false)').default(false),
            })).describe('Array of translations to update'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateTranslationsTool.prototype, "bulkWriteTranslations", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'findTranslationsForKey',
        description: 'Find all translations for a specific key across all components and languages in a project',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
            key: zod_1.z.string().describe('The exact translation key to find'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateTranslationsTool.prototype, "findTranslationsForKey", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'searchUnitsWithFilters',
        description: 'Search translation units using Weblate\'s powerful filtering syntax. Supports filters like: state:<translated (untranslated), state:>=translated (translated), component:NAME, source:TEXT, target:TEXT, has:suggestion, etc.',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The slug of the project'),
            componentSlug: zod_1.z.string().describe('The slug of the component'),
            languageCode: zod_1.z.string().describe('The language code (e.g., sk, cs, fr)'),
            searchQuery: zod_1.z.string().describe('Weblate search query using their filter syntax. Examples: "state:<translated" (untranslated), "state:>=translated" (translated), "source:hello", "has:suggestion", "component:common AND state:<translated"'),
            limit: zod_1.z.number().optional().default(50).describe('Maximum number of results to return (default: 50, max: 200)'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateTranslationsTool.prototype, "searchUnitsWithFilters", null);
__decorate([
    (0, mcp_nest_1.Tool)({
        name: 'createTranslationUnit',
        description: 'Create a new translation unit (key) in a Weblate translation. Use key+value for monolingual formats (JSON, Android) or context+source+target for bilingual formats (PO, XLIFF).',
        parameters: zod_1.z.object({
            projectSlug: zod_1.z.string().describe('The project URL slug'),
            componentSlug: zod_1.z.string().describe('The component URL slug'),
            languageCode: zod_1.z.string().describe('The translation language code'),
            key: zod_1.z
                .string()
                .optional()
                .describe('Key for monolingual formats (JSON, Android)'),
            value: zod_1.z
                .array(zod_1.z.string())
                .optional()
                .describe('Array of strings — single element for regular, multiple for plural forms, e.g. ["Hello"]'),
            context: zod_1.z
                .string()
                .optional()
                .describe('Context for bilingual formats (PO, XLIFF)'),
            source: zod_1.z
                .array(zod_1.z.string())
                .optional()
                .describe('Array of strings — single element for regular, multiple for plural forms, e.g. ["Hello"]'),
            target: zod_1.z
                .array(zod_1.z.string())
                .optional()
                .describe('Array of strings — single element for regular, multiple for plural forms, e.g. ["Hallo"]'),
            state: zod_1.z
                .number()
                .optional()
                .describe('Unit state: 0=untranslated, 10=needs editing, 20=translated, 30=approved'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeblateTranslationsTool.prototype, "createTranslationUnit", null);
exports.WeblateTranslationsTool = WeblateTranslationsTool = WeblateTranslationsTool_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.WeblateApiService])
], WeblateTranslationsTool);
//# sourceMappingURL=translations.tool.js.map