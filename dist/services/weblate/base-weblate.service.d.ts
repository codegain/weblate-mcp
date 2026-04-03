import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosInstance } from 'axios';
export declare abstract class BaseWeblateService {
    protected configService: ConfigService;
    protected readonly logger: Logger;
    protected readonly apiClient: AxiosInstance;
    constructor(configService: ConfigService);
}
