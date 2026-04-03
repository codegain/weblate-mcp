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
var WeblateStatisticsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeblateStatisticsService = void 0;
const common_1 = require("@nestjs/common");
const weblate_client_service_1 = require("../weblate-client.service");
const components_service_1 = require("./components.service");
const languages_service_1 = require("./languages.service");
const client_1 = require("../../client");
let WeblateStatisticsService = WeblateStatisticsService_1 = class WeblateStatisticsService {
    constructor(clientService, componentsService, languagesService) {
        this.clientService = clientService;
        this.componentsService = componentsService;
        this.languagesService = languagesService;
        this.logger = new common_1.Logger(WeblateStatisticsService_1.name);
    }
    async getProjectStatistics(projectSlug) {
        try {
            const response = await (0, client_1.projectsStatisticsRetrieve)({
                client: this.clientService.getClient(),
                path: { slug: projectSlug },
                query: { format: 'json' },
            });
            if (response.error) {
                throw new Error(`Failed to get project statistics: ${response.error}`);
            }
            return response.data;
        }
        catch (error) {
            this.logger.error(`Failed to get project statistics for ${projectSlug}`, error);
            throw error;
        }
    }
    async getComponentStatistics(projectSlug, componentSlug) {
        try {
            const response = await (0, client_1.componentsStatisticsRetrieve)({
                client: this.clientService.getClient(),
                path: {
                    project__slug: projectSlug,
                    slug: componentSlug
                },
                query: { format: 'json' },
            });
            if (response.error) {
                throw new Error(`Failed to get component statistics: ${response.error}`);
            }
            return response.data;
        }
        catch (error) {
            this.logger.error(`Failed to get component statistics for ${projectSlug}/${componentSlug}`, error);
            throw error;
        }
    }
    async getTranslationStatistics(projectSlug, componentSlug, languageCode) {
        try {
            const response = await (0, client_1.translationsStatisticsRetrieve)({
                client: this.clientService.getClient(),
                path: {
                    component__project__slug: projectSlug,
                    component__slug: componentSlug,
                    language__code: languageCode,
                },
                query: { format: 'json' },
            });
            if (response.error) {
                throw new Error(`Failed to get translation statistics: ${response.error}`);
            }
            return response.data;
        }
        catch (error) {
            this.logger.error(`Failed to get translation statistics for ${projectSlug}/${componentSlug}/${languageCode}`, error);
            throw error;
        }
    }
    async getLanguageStatistics(languageCode) {
        try {
            const response = await (0, client_1.languagesStatisticsRetrieve)({
                client: this.clientService.getClient(),
                path: { code: languageCode },
                query: { format: 'json' },
            });
            if (response.error) {
                throw new Error(`Failed to get language statistics: ${response.error}`);
            }
            return response.data;
        }
        catch (error) {
            this.logger.error(`Failed to get language statistics for ${languageCode}`, error);
            throw error;
        }
    }
    async getUserStatistics(username) {
        try {
            const response = await (0, client_1.usersStatisticsRetrieve)({
                client: this.clientService.getClient(),
                path: { username },
                query: { format: 'json' },
            });
            if (response.error) {
                throw new Error(`Failed to get user statistics: ${response.error}`);
            }
            return response.data;
        }
        catch (error) {
            this.logger.error(`Failed to get user statistics for ${username}`, error);
            throw error;
        }
    }
    async getProjectDashboard(projectSlug) {
        try {
            const [projectStats, components] = await Promise.all([
                this.getProjectStatistics(projectSlug),
                this.componentsService.listComponents(projectSlug),
            ]);
            const componentStats = await Promise.all(components.map(async (component) => {
                try {
                    const stats = await this.getComponentStatistics(projectSlug, component.slug);
                    return {
                        component: component.name,
                        slug: component.slug,
                        statistics: stats,
                    };
                }
                catch (error) {
                    this.logger.warn(`Failed to get stats for component ${component.slug}`, error);
                    return {
                        component: component.name,
                        slug: component.slug,
                        statistics: null,
                        error: error.message,
                    };
                }
            }));
            return {
                project: projectStats,
                components: componentStats,
            };
        }
        catch (error) {
            this.logger.error(`Failed to get project dashboard for ${projectSlug}`, error);
            throw error;
        }
    }
    async getComponentLanguageProgress(projectSlug, componentSlug) {
        try {
            const languages = await this.languagesService.listLanguages(projectSlug);
            const languageProgress = await Promise.all(languages.map(async (language) => {
                try {
                    const stats = await this.getTranslationStatistics(projectSlug, componentSlug, language.code);
                    return {
                        language: language.name,
                        code: language.code,
                        statistics: stats,
                    };
                }
                catch (error) {
                    this.logger.warn(`Failed to get translation stats for ${language.code} in ${componentSlug}`, error);
                    return {
                        language: language.name,
                        code: language.code,
                        statistics: null,
                        error: error.message,
                    };
                }
            }));
            return languageProgress;
        }
        catch (error) {
            this.logger.error(`Failed to get component language progress for ${projectSlug}/${componentSlug}`, error);
            throw error;
        }
    }
};
exports.WeblateStatisticsService = WeblateStatisticsService;
exports.WeblateStatisticsService = WeblateStatisticsService = WeblateStatisticsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [weblate_client_service_1.WeblateClientService,
        components_service_1.WeblateComponentsService,
        languages_service_1.WeblateLanguagesService])
], WeblateStatisticsService);
//# sourceMappingURL=statistics.service.js.map