import { WeblateClientService } from '../weblate-client.service';
import { type Unit } from '../../client';
import { SearchIn } from '../../types';
export declare class WeblateTranslationsService {
    private weblateClientService;
    private readonly logger;
    constructor(weblateClientService: WeblateClientService);
    searchTranslations(projectSlug: string, componentSlug?: string, languageCode?: string, query?: string, source?: string, target?: string): Promise<{
        results: Unit[];
        count: number;
        next?: string;
        previous?: string;
    }>;
    getTranslationByKey(projectSlug: string, componentSlug: string, languageCode: string, key: string): Promise<Unit | null>;
    searchStringInProject(projectSlug: string, searchValue: string, searchIn?: SearchIn): Promise<Unit[]>;
    writeTranslation(projectSlug: string, componentSlug: string, languageCode: string, key: string, value: string, markAsApproved?: boolean): Promise<Unit | null>;
    bulkWriteTranslations(projectSlug: string, componentSlug: string, languageCode: string, translations: Array<{
        key: string;
        value: string;
        markAsApproved?: boolean;
    }>): Promise<{
        successful: Array<{
            key: string;
            unit: Unit;
        }>;
        failed: Array<{
            key: string;
            error: string;
        }>;
        summary: {
            total: number;
            successful: number;
            failed: number;
        };
    }>;
    findTranslationsForKey(projectSlug: string, key: string, componentSlug?: string): Promise<Unit[]>;
    listTranslationKeys(projectSlug: string, componentSlug?: string, languageCode?: string): Promise<string[]>;
    searchTranslationKeys(projectSlug: string, keyPattern: string, componentSlug?: string): Promise<string[]>;
    searchUnitsWithQuery(projectSlug: string, componentSlug: string, languageCode: string, searchQuery: string, limit?: number): Promise<Unit[]>;
    private readonly PLURALIZATION_RULES;
    private getExpectedPluralForms;
    private parsePluralForms;
    createTranslationUnit(projectSlug: string, componentSlug: string, languageCode: string, params: {
        key?: string;
        value?: string[];
        context?: string;
        source?: string[];
        target?: string[];
        state?: number;
    }): Promise<Unit>;
}
