import { WeblateApiService } from '../services';
export declare class WeblateChangesTool {
    private weblateApiService;
    private readonly logger;
    constructor(weblateApiService: WeblateApiService);
    listRecentChanges({ limit, user, timestampAfter, timestampBefore, }: {
        limit?: number;
        user?: string;
        timestampAfter?: string;
        timestampBefore?: string;
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
    getProjectChanges({ projectSlug }: {
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
    getComponentChanges({ projectSlug, componentSlug, }: {
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
    getChangesByUser({ user, limit, }: {
        user: string;
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
    private formatChangeResult;
    private getActionDescription;
}
