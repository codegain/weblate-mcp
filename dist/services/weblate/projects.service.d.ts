import { WeblateClientService } from '../weblate-client.service';
import { type Project } from '../../client';
export declare class WeblateProjectsService {
    private weblateClientService;
    private readonly logger;
    constructor(weblateClientService: WeblateClientService);
    listProjects(): Promise<Project[]>;
    getProject(projectSlug: string): Promise<Project>;
}
