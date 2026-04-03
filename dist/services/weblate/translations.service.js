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
var WeblateTranslationsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeblateTranslationsService = void 0;
const common_1 = require("@nestjs/common");
const weblate_client_service_1 = require("../weblate-client.service");
const client_1 = require("../../client");
let WeblateTranslationsService = WeblateTranslationsService_1 = class WeblateTranslationsService {
    constructor(weblateClientService) {
        this.weblateClientService = weblateClientService;
        this.logger = new common_1.Logger(WeblateTranslationsService_1.name);
        this.PLURALIZATION_RULES = {
            'en': { forms: 2, rule: 'n != 1' },
            'de': { forms: 2, rule: 'n != 1' },
            'es': { forms: 2, rule: 'n != 1' },
            'fr': { forms: 2, rule: 'n > 1' },
            'it': { forms: 2, rule: 'n != 1' },
            'pt': { forms: 2, rule: 'n != 1' },
            'nl': { forms: 2, rule: 'n != 1' },
            'da': { forms: 2, rule: 'n != 1' },
            'sv': { forms: 2, rule: 'n != 1' },
            'no': { forms: 2, rule: 'n != 1' },
            'cs': { forms: 3, rule: '(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2' },
            'sk': { forms: 3, rule: '(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2' },
            'pl': { forms: 3, rule: '(n==1) ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20)) ? 1 : 2' },
            'hr': { forms: 3, rule: '(n%10==1 && n%100!=11) ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20)) ? 1 : 2' },
            'sr': { forms: 3, rule: '(n%10==1 && n%100!=11) ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20)) ? 1 : 2' },
            'sl': { forms: 4, rule: '(n%100==1) ? 0 : (n%100==2) ? 1 : (n%100==3 || n%100==4) ? 2 : 3' },
            'ar': { forms: 6, rule: '(n==0) ? 0 : (n==1) ? 1 : (n==2) ? 2 : (n%100>=3 && n%100<=10) ? 3 : (n%100>=11) ? 4 : 5' },
            'default': { forms: 2, rule: 'n != 1' }
        };
    }
    async searchTranslations(projectSlug, componentSlug, languageCode, query, source, target) {
        try {
            const client = this.weblateClientService.getClient();
            const q_parts = [];
            if (query) {
                q_parts.push(query);
            }
            if (source) {
                q_parts.push(`source:"${source}"`);
            }
            if (target) {
                q_parts.push(`target:"${target}"`);
            }
            q_parts.push(`project:${projectSlug}`);
            if (componentSlug) {
                q_parts.push(`component:${componentSlug}`);
            }
            if (languageCode) {
                q_parts.push(`language:${languageCode}`);
            }
            const options = {
                url: '/units/',
                query: {
                    page_size: 1000,
                },
            };
            if (q_parts.length > 0) {
                options.query.q = q_parts.join(' ');
            }
            const response = await (0, client_1.unitsList)({
                client,
                ...options,
            });
            if (response.error) {
                throw new Error(`API error: ${JSON.stringify(response.error)}`);
            }
            const data = response.data;
            return {
                results: data.results || [],
                count: data.count || 0,
                next: data.next || undefined,
                previous: data.previous || undefined,
            };
        }
        catch (error) {
            this.logger.error(`Failed to search translations: ${error.message}`, error.stack);
            throw new Error(`Failed to search translations: ${error.message}`);
        }
    }
    async getTranslationByKey(projectSlug, componentSlug, languageCode, key) {
        try {
            const searchResult = await this.searchTranslations(projectSlug, componentSlug, languageCode, `context:"${key}"`);
            return searchResult.results.length > 0 ? searchResult.results[0] : null;
        }
        catch (error) {
            this.logger.error(`Failed to get translation for key ${key}`, error);
            throw new Error(`Failed to get translation for key ${key}: ${error.message}`);
        }
    }
    async searchStringInProject(projectSlug, searchValue, searchIn = 'both') {
        try {
            let results = [];
            if (searchIn === 'source' || searchIn === 'both') {
                const sourceResults = await this.searchTranslations(projectSlug, undefined, undefined, undefined, searchValue);
                results = results.concat(sourceResults.results);
            }
            if (searchIn === 'target' || searchIn === 'both') {
                const targetResults = await this.searchTranslations(projectSlug, undefined, undefined, undefined, undefined, searchValue);
                results = results.concat(targetResults.results);
            }
            const uniqueResults = results.filter((unit, index, self) => index === self.findIndex(u => u.id === unit.id));
            return uniqueResults;
        }
        catch (error) {
            this.logger.error(`Failed to search string in project ${projectSlug}`, error);
            throw new Error(`Failed to search string in project: ${error.message}`);
        }
    }
    async writeTranslation(projectSlug, componentSlug, languageCode, key, value, markAsApproved = false) {
        try {
            const unit = await this.getTranslationByKey(projectSlug, componentSlug, languageCode, key);
            if (!unit || !unit.id) {
                throw new Error(`Translation unit not found for key "${key}"`);
            }
            const client = this.weblateClientService.getClient();
            const targetArray = this.parsePluralForms(value, unit.source, languageCode);
            const response = await (0, client_1.unitsPartialUpdate)({
                client,
                path: { id: unit.id.toString() },
                body: {
                    target: targetArray,
                    state: markAsApproved ? 30 : 20,
                },
            });
            return response.data;
        }
        catch (error) {
            this.logger.error(`Failed to write translation for key ${key}`, error);
            throw new Error(`Failed to write translation for key ${key}: ${error.message}`);
        }
    }
    async bulkWriteTranslations(projectSlug, componentSlug, languageCode, translations) {
        const successful = [];
        const failed = [];
        this.logger.log(`Starting bulk update of ${translations.length} translations for ${projectSlug}/${componentSlug}/${languageCode}`);
        const concurrencyLimit = 5;
        const chunks = [];
        for (let i = 0; i < translations.length; i += concurrencyLimit) {
            chunks.push(translations.slice(i, i + concurrencyLimit));
        }
        for (const chunk of chunks) {
            const promises = chunk.map(async ({ key, value, markAsApproved = false }) => {
                try {
                    const updatedUnit = await this.writeTranslation(projectSlug, componentSlug, languageCode, key, value, markAsApproved);
                    if (updatedUnit) {
                        successful.push({ key, unit: updatedUnit });
                        this.logger.debug(`Successfully updated translation for key: ${key}`);
                    }
                    else {
                        failed.push({ key, error: 'No unit returned from update' });
                    }
                }
                catch (error) {
                    failed.push({ key, error: error.message });
                    this.logger.warn(`Failed to update translation for key ${key}: ${error.message}`);
                }
            });
            await Promise.allSettled(promises);
        }
        const summary = {
            total: translations.length,
            successful: successful.length,
            failed: failed.length,
        };
        this.logger.log(`Bulk update completed: ${summary.successful}/${summary.total} successful, ${summary.failed} failed`);
        return {
            successful,
            failed,
            summary,
        };
    }
    async findTranslationsForKey(projectSlug, key, componentSlug) {
        try {
            const searchResult = await this.searchTranslations(projectSlug, componentSlug, undefined, `context:"${key}"`);
            return searchResult.results;
        }
        catch (error) {
            this.logger.error(`Failed to find translations for key "${key}" in project ${projectSlug}`, error);
            throw new Error(`Failed to find translations for key: ${error.message}`);
        }
    }
    async listTranslationKeys(projectSlug, componentSlug, languageCode) {
        try {
            const searchResult = await this.searchTranslations(projectSlug, componentSlug, languageCode);
            const keys = [...new Set(searchResult.results
                    .map(translation => translation.context)
                    .filter(context => context && context.trim() !== ''))];
            return keys.sort();
        }
        catch (error) {
            this.logger.error(`Failed to list translation keys in project ${projectSlug}`, error);
            throw new Error(`Failed to list translation keys: ${error.message}`);
        }
    }
    async searchTranslationKeys(projectSlug, keyPattern, componentSlug) {
        try {
            const allKeys = await this.listTranslationKeys(projectSlug, componentSlug);
            const matchingKeys = allKeys.filter(key => key.toLowerCase().includes(keyPattern.toLowerCase()));
            return matchingKeys;
        }
        catch (error) {
            this.logger.error(`Failed to search translation keys by pattern "${keyPattern}" in project ${projectSlug}`, error);
            throw new Error(`Failed to search translation keys: ${error.message}`);
        }
    }
    async searchUnitsWithQuery(projectSlug, componentSlug, languageCode, searchQuery, limit = 50) {
        try {
            const client = this.weblateClientService.getClient();
            const queryParts = [searchQuery];
            queryParts.push(`project:${projectSlug}`);
            queryParts.push(`component:${componentSlug}`);
            queryParts.push(`language:${languageCode}`);
            const options = {
                url: '/units/',
                query: {
                    q: queryParts.join(' AND '),
                    page_size: Math.min(limit, 1000),
                },
            };
            const response = await (0, client_1.unitsList)({
                client,
                ...options,
            });
            if (response.error) {
                throw new Error(`API error: ${JSON.stringify(response.error)}`);
            }
            const data = response.data;
            return data.results || [];
        }
        catch (error) {
            this.logger.error(`Failed to search units with query "${searchQuery}" in ${projectSlug}/${componentSlug}/${languageCode}`, error);
            throw new Error(`Failed to search units: ${error.message}`);
        }
    }
    getExpectedPluralForms(languageCode) {
        const langRule = this.PLURALIZATION_RULES[languageCode] || this.PLURALIZATION_RULES['default'];
        return langRule.forms;
    }
    parsePluralForms(value, sourceArray, languageCode) {
        if (!Array.isArray(sourceArray) || sourceArray.length <= 1) {
            return [value];
        }
        const expectedPluralCount = this.getExpectedPluralForms(languageCode);
        const targetPluralCount = Math.max(expectedPluralCount, sourceArray.length);
        let parts = [];
        const percentDParts = value.split(/(?=%d)/g).filter(part => part.length > 0);
        if (percentDParts.length === targetPluralCount) {
            parts = percentDParts;
        }
        else if (percentDParts.length > 1) {
            if (percentDParts.length > targetPluralCount) {
                parts = percentDParts.slice(0, targetPluralCount - 1);
                parts.push(percentDParts.slice(targetPluralCount - 1).join(''));
            }
            else {
                parts = percentDParts;
            }
        }
        else {
            const wordBoundaryPattern = /(?<=%d\s+[^\s%]+)(?=\s*%d)|(?<=%d[^\s%]+)(?=%d)/g;
            const wordParts = value.split(wordBoundaryPattern).filter(part => part.length > 0);
            if (wordParts.length === targetPluralCount) {
                parts = wordParts;
            }
            else {
                const avgLength = Math.floor(value.length / targetPluralCount);
                parts = [];
                for (let i = 0; i < targetPluralCount; i++) {
                    const start = i * avgLength;
                    const end = i === targetPluralCount - 1 ? value.length : (i + 1) * avgLength;
                    parts.push(value.substring(start, end));
                }
            }
        }
        while (parts.length < targetPluralCount) {
            parts.push('');
        }
        if (parts.length > targetPluralCount) {
            parts = parts.slice(0, targetPluralCount);
        }
        const cleanedParts = parts.filter(part => part.trim().length > 0);
        if (cleanedParts.length >= targetPluralCount) {
            return cleanedParts.slice(0, targetPluralCount);
        }
        return parts;
    }
    async createTranslationUnit(projectSlug, componentSlug, languageCode, params) {
        try {
            const client = this.weblateClientService.getClient();
            const response = await (0, client_1.translationsUnitsCreate)({
                client,
                path: {
                    component__project__slug: projectSlug,
                    component__slug: componentSlug,
                    language__code: languageCode,
                },
                body: params,
            });
            if (response.error) {
                throw new Error(`API error: ${JSON.stringify(response.error)}`);
            }
            return response.data;
        }
        catch (error) {
            this.logger.error(`Failed to create translation unit in ${projectSlug}/${componentSlug}/${languageCode}`, error);
            throw new Error(`Failed to create translation unit: ${error.message}`);
        }
    }
};
exports.WeblateTranslationsService = WeblateTranslationsService;
exports.WeblateTranslationsService = WeblateTranslationsService = WeblateTranslationsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [weblate_client_service_1.WeblateClientService])
], WeblateTranslationsService);
//# sourceMappingURL=translations.service.js.map