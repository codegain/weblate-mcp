import { ConfigService } from '@nestjs/config';
import type { Client } from '../client/client/types';
export declare class WeblateClientService {
    private configService;
    private readonly client;
    constructor(configService: ConfigService);
    getClient(): Client;
}
