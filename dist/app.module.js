"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mcp_nest_1 = require("@rekog/mcp-nest");
const services_1 = require("./services");
const weblate_client_service_1 = require("./services/weblate-client.service");
const tools_1 = require("./tools");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            mcp_nest_1.McpModule.forRoot({
                name: process.env.MCP_SERVER_NAME || 'weblate-mcp-server',
                version: process.env.MCP_SERVER_VERSION || '1.0.0',
                transport: mcp_nest_1.McpTransportType.STDIO,
                instructions: `This is a Weblate MCP server that provides tools for managing translations.
      
Available tools:
Translation Management:
- listProjects: List all available Weblate projects
- listComponents: List components in a specific project
- listLanguages: List languages available in a specific project
- searchStringInProject: Search for translations containing specific text
- getTranslationForKey: Get translation value for a specific key
- writeTranslation: Write or update a translation value
- createTranslationUnit: Create a new translation unit (key) - supports monolingual and bilingual formats
- searchTranslationsByKey: Search for translations by key pattern
- findTranslationsForKey: Find all translations for a specific key
- listTranslationKeys: List all translation keys in a project
- searchTranslationKeys: Search for translation keys by pattern

Change Tracking & History:
- listRecentChanges: List recent changes across all projects
- getProjectChanges: Get recent changes for a specific project
- getComponentChanges: Get recent changes for a specific component
- getChangesByUser: Get recent changes by a specific user

Translation Statistics Dashboard:
- getProjectStatistics: Get comprehensive project statistics with completion rates
- getComponentStatistics: Get detailed statistics for a specific component
- getProjectDashboard: Get full dashboard overview with all component statistics
- getTranslationStatistics: Get statistics for specific translation (project/component/language)
- getComponentLanguageProgress: Get translation progress for all languages in a component
- getLanguageStatistics: Get statistics for a language across all projects
- getUserStatistics: Get contribution statistics for a specific user`,
            }),
        ],
        providers: [
            weblate_client_service_1.WeblateClientService,
            services_1.WeblateProjectsService,
            services_1.WeblateComponentsService,
            services_1.WeblateLanguagesService,
            services_1.WeblateTranslationsService,
            services_1.WeblateChangesService,
            services_1.WeblateApiService,
            services_1.WeblateStatisticsService,
            tools_1.WeblateProjectsTool,
            tools_1.WeblateComponentsTool,
            tools_1.WeblateLanguagesTool,
            tools_1.WeblateTranslationsTool,
            tools_1.WeblateChangesTool,
            tools_1.WeblateStatisticsTool,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map