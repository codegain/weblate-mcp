import { WeblateProjectsService, WeblateComponentsService, WeblateLanguagesService, WeblateTranslationsService, WeblateChangesService } from './weblate';
import { type Project, type Component, type Language, type Unit, type Change } from '../client';
import { SearchIn } from '../types';
export declare class WeblateApiService {
    private readonly projectsService;
    private readonly componentsService;
    private readonly languagesService;
    private readonly translationsService;
    private readonly changesService;
    constructor(projectsService: WeblateProjectsService, componentsService: WeblateComponentsService, languagesService: WeblateLanguagesService, translationsService: WeblateTranslationsService, changesService: WeblateChangesService);
    listProjects(): Promise<Project[]>;
    getProject(projectSlug: string): Promise<Project>;
    listComponents(projectSlug: string): Promise<Component[]>;
    listLanguages(projectSlug: string): Promise<Language[]>;
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
    searchTranslationKeys(projectSlug: string, keyPattern: string, componentSlug?: string): Promise<string[]>;
    findTranslationsForKey(projectSlug: string, key: string, componentSlug?: string): Promise<Unit[]>;
    listTranslationKeys(projectSlug: string, componentSlug?: string, languageCode?: string): Promise<string[]>;
    listRecentChanges(limit?: number, user?: string, timestampAfter?: string, timestampBefore?: string): Promise<{
        results: Change[];
        count: number;
        next?: string;
        previous?: string;
    }>;
    getProjectChanges(projectSlug: string): Promise<{
        results: Change[];
        count: number;
        next?: string;
        previous?: string;
    }>;
    getComponentChanges(projectSlug: string, componentSlug: string): Promise<{
        results: Change[];
        count: number;
        next?: string;
        previous?: string;
    }>;
    getChangesByAction(actionCodes: number[], limit?: number): Promise<{
        results: Change[];
        count: number;
        next?: string;
        previous?: string;
    }>;
    getChangesByUser(user: string, limit?: number): Promise<{
        results: Change[];
        count: number;
        next?: string;
        previous?: string;
    }>;
    searchUnitsWithQuery(projectSlug: string, componentSlug: string, languageCode: string, searchQuery: string, limit?: number): Promise<Unit[]>;
    createTranslationUnit(projectSlug: string, componentSlug: string, languageCode: string, params: {
        key?: string;
        value?: string[];
        context?: string;
        source?: string[];
        target?: string[];
        state?: number;
    }): Promise<Unit>;
}
