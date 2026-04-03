import { WeblateApiService } from '../services';
export declare class WeblateComponentsTool {
    private weblateApiService;
    private readonly logger;
    constructor(weblateApiService: WeblateApiService);
    listComponents({ projectSlug }: {
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
}
