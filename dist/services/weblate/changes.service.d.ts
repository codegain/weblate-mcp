import { WeblateClientService } from '../weblate-client.service';
import { type Change } from '../../client';
export declare class WeblateChangesService {
    private weblateClientService;
    private readonly logger;
    constructor(weblateClientService: WeblateClientService);
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
}
