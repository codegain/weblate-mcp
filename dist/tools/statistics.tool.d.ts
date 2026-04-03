import { WeblateApiService } from '../services';
import { WeblateStatisticsService } from '../services/weblate/statistics.service';
export declare class WeblateStatisticsTool {
    private apiService;
    private statisticsService;
    private readonly logger;
    constructor(apiService: WeblateApiService, statisticsService: WeblateStatisticsService);
    getProjectStatistics({ projectSlug }: {
        projectSlug: string;
    }): Promise<{
        content: {
            type: string;
            text: string;
        }[];
        isError?: undefined;
    } | {
        content: {
            type: string;
            text: string;
        }[];
        isError: boolean;
    }>;
    getComponentStatistics({ projectSlug, componentSlug, }: {
        projectSlug: string;
        componentSlug: string;
    }): Promise<{
        content: {
            type: string;
            text: string;
        }[];
        isError?: undefined;
    } | {
        content: {
            type: string;
            text: string;
        }[];
        isError: boolean;
    }>;
    getProjectDashboard({ projectSlug }: {
        projectSlug: string;
    }): Promise<{
        content: {
            type: string;
            text: string;
        }[];
        isError?: undefined;
    } | {
        content: {
            type: string;
            text: string;
        }[];
        isError: boolean;
    }>;
    getTranslationStatistics({ projectSlug, componentSlug, languageCode, }: {
        projectSlug: string;
        componentSlug: string;
        languageCode: string;
    }): Promise<{
        content: {
            type: string;
            text: string;
        }[];
        isError?: undefined;
    } | {
        content: {
            type: string;
            text: string;
        }[];
        isError: boolean;
    }>;
    getComponentLanguageProgress({ projectSlug, componentSlug, }: {
        projectSlug: string;
        componentSlug: string;
    }): Promise<{
        content: {
            type: string;
            text: string;
        }[];
        isError?: undefined;
    } | {
        content: {
            type: string;
            text: string;
        }[];
        isError: boolean;
    }>;
    getLanguageStatistics({ languageCode }: {
        languageCode: string;
    }): Promise<{
        content: {
            type: string;
            text: string;
        }[];
        isError?: undefined;
    } | {
        content: {
            type: string;
            text: string;
        }[];
        isError: boolean;
    }>;
    getUserStatistics({ username }: {
        username: string;
    }): Promise<{
        content: {
            type: string;
            text: string;
        }[];
        isError?: undefined;
    } | {
        content: {
            type: string;
            text: string;
        }[];
        isError: boolean;
    }>;
    private formatProjectStatistics;
    private formatComponentStatistics;
    private formatTranslationStatistics;
    private formatProjectDashboard;
    private formatComponentLanguageProgress;
    private formatLanguageStatistics;
    private formatUserStatistics;
    private generateProgressBar;
}
