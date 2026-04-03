import { WeblateApiService } from '../services/weblate-api.service';
import { ConfigService } from '@nestjs/config';
export declare class DebugTool {
    private weblateApiService;
    private configService;
    constructor(weblateApiService: WeblateApiService, configService: ConfigService);
    debugConfiguration(): Promise<{
        api_url: string;
        token_configured: boolean;
        token_length: number;
        token_prefix: string;
        debug_mode: boolean;
    }>;
    testApiConnection(): Promise<{
        status: string;
        message: any;
    }>;
    debugListProjects(): Promise<{
        success: boolean;
        project_count: number;
        projects: {
            slug: string;
            name: string;
        }[];
        error?: undefined;
        stack?: undefined;
    } | {
        success: boolean;
        error: any;
        stack: any;
        project_count?: undefined;
        projects?: undefined;
    }>;
}
