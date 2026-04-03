import { WeblateApiService } from '../services';
export declare class WeblateTranslationsTool {
    private weblateApiService;
    private readonly logger;
    constructor(weblateApiService: WeblateApiService);
    searchStringInProject({ projectSlug, value, searchIn, }: {
        projectSlug: string;
        value: string;
        searchIn?: 'source' | 'target' | 'both';
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
    getTranslationForKey({ projectSlug, componentSlug, languageCode, key, }: {
        projectSlug: string;
        componentSlug: string;
        languageCode: string;
        key: string;
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
    writeTranslation({ projectSlug, componentSlug, languageCode, key, value, markAsApproved, }: {
        projectSlug: string;
        componentSlug: string;
        languageCode: string;
        key: string;
        value: string;
        markAsApproved?: boolean;
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
    bulkWriteTranslations({ projectSlug, componentSlug, languageCode, translations, }: {
        projectSlug: string;
        componentSlug: string;
        languageCode: string;
        translations: Array<{
            key: string;
            value: string;
            markAsApproved?: boolean;
        }>;
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
    findTranslationsForKey({ projectSlug, key, }: {
        projectSlug: string;
        key: string;
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
    searchUnitsWithFilters({ projectSlug, componentSlug, languageCode, searchQuery, limit, }: {
        projectSlug: string;
        componentSlug: string;
        languageCode: string;
        searchQuery: string;
        limit?: number;
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
    createTranslationUnit({ projectSlug, componentSlug, languageCode, key, value, context, source, target, state, }: {
        projectSlug: string;
        componentSlug: string;
        languageCode: string;
        key?: string;
        value?: string[];
        context?: string;
        source?: string[];
        target?: string[];
        state?: number;
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
    private formatTranslationResult;
    private formatFilteredResults;
}
