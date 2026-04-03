import { WeblateClientService } from '../weblate-client.service';
import { type Component } from '../../client';
export declare class WeblateComponentsService {
    private weblateClientService;
    private readonly logger;
    constructor(weblateClientService: WeblateClientService);
    listComponents(projectSlug: string): Promise<Component[]>;
}
