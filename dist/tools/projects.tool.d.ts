import { WeblateApiService } from '../services';
export declare class WeblateProjectsTool {
    private weblateApiService;
    private readonly logger;
    constructor(weblateApiService: WeblateApiService);
    listProjects(): Promise<{
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
