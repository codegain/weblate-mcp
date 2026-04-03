import { WeblateClientService } from '../weblate-client.service';
import { WeblateComponentsService } from './components.service';
import { WeblateLanguagesService } from './languages.service';
export declare class WeblateStatisticsService {
    private clientService;
    private componentsService;
    private languagesService;
    private readonly logger;
    constructor(clientService: WeblateClientService, componentsService: WeblateComponentsService, languagesService: WeblateLanguagesService);
    getProjectStatistics(projectSlug: string): Promise<import("../../client").Project>;
    getComponentStatistics(projectSlug: string, componentSlug: string): Promise<import("../../client").Component>;
    getTranslationStatistics(projectSlug: string, componentSlug: string, languageCode: string): Promise<import("../../client").Translation>;
    getLanguageStatistics(languageCode: string): Promise<import("../../client").Language>;
    getUserStatistics(username: string): Promise<import("../../client").BasicUser>;
    getProjectDashboard(projectSlug: string): Promise<{
        project: import("../../client").Project;
        components: ({
            component: string;
            slug: string;
            statistics: import("../../client").Component;
            error?: undefined;
        } | {
            component: string;
            slug: string;
            statistics: any;
            error: any;
        })[];
    }>;
    getComponentLanguageProgress(projectSlug: string, componentSlug: string): Promise<({
        language: string;
        code: string;
        statistics: import("../../client").Translation;
        error?: undefined;
    } | {
        language: string;
        code: string;
        statistics: any;
        error: any;
    })[]>;
}
