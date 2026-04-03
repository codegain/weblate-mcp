import { WeblateClientService } from '../weblate-client.service';
import { type Language } from '../../client';
export declare class WeblateLanguagesService {
    private weblateClientService;
    private readonly logger;
    constructor(weblateClientService: WeblateClientService);
    listLanguages(projectSlug: string): Promise<Language[]>;
}
