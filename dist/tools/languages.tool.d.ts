import { WeblateApiService } from '../services';
export declare class WeblateLanguagesTool {
    private weblateApiService;
    private readonly logger;
    constructor(weblateApiService: WeblateApiService);
    listLanguages({ projectSlug }: {
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
