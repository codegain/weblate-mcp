"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WeblateChangesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeblateChangesService = void 0;
const common_1 = require("@nestjs/common");
const weblate_client_service_1 = require("../weblate-client.service");
const client_1 = require("../../client");
let WeblateChangesService = WeblateChangesService_1 = class WeblateChangesService {
    constructor(weblateClientService) {
        this.weblateClientService = weblateClientService;
        this.logger = new common_1.Logger(WeblateChangesService_1.name);
    }
    async listRecentChanges(limit = 50, user, timestampAfter, timestampBefore) {
        try {
            const client = this.weblateClientService.getClient();
            const response = await (0, client_1.changesList)({
                client,
                query: {
                    page_size: limit,
                    ...(user && { user }),
                    ...(timestampAfter && { timestamp_after: timestampAfter }),
                    ...(timestampBefore && { timestamp_before: timestampBefore }),
                },
            });
            const changeList = response.data;
            return {
                results: changeList.results || [],
                count: changeList.count || 0,
                next: changeList.next || undefined,
                previous: changeList.previous || undefined,
            };
        }
        catch (error) {
            this.logger.error('Failed to list recent changes', error);
            throw new Error(`Failed to list recent changes: ${error.message}`);
        }
    }
    async getProjectChanges(projectSlug) {
        try {
            const client = this.weblateClientService.getClient();
            const response = await (0, client_1.projectsChangesRetrieve)({
                client,
                path: { slug: projectSlug },
            });
            const changeList = response.data;
            if (Array.isArray(changeList)) {
                return {
                    results: changeList,
                    count: changeList.length,
                };
            }
            if (changeList && changeList.results) {
                return {
                    results: changeList.results || [],
                    count: changeList.count || 0,
                    next: changeList.next || undefined,
                    previous: changeList.previous || undefined,
                };
            }
            return { results: [], count: 0 };
        }
        catch (error) {
            this.logger.error(`Failed to get changes for project ${projectSlug}`, error);
            throw new Error(`Failed to get project changes: ${error.message}`);
        }
    }
    async getComponentChanges(projectSlug, componentSlug) {
        try {
            const client = this.weblateClientService.getClient();
            const response = await (0, client_1.componentsChangesRetrieve)({
                client,
                path: {
                    project__slug: projectSlug,
                    slug: componentSlug
                },
            });
            const changeList = response.data;
            if (Array.isArray(changeList)) {
                return {
                    results: changeList,
                    count: changeList.length,
                };
            }
            if (changeList && changeList.results) {
                return {
                    results: changeList.results || [],
                    count: changeList.count || 0,
                    next: changeList.next || undefined,
                    previous: changeList.previous || undefined,
                };
            }
            return { results: [], count: 0 };
        }
        catch (error) {
            this.logger.error(`Failed to get changes for component ${componentSlug} in project ${projectSlug}`, error);
            throw new Error(`Failed to get component changes: ${error.message}`);
        }
    }
    async getChangesByAction(actionCodes, limit = 50) {
        try {
            const client = this.weblateClientService.getClient();
            const response = await (0, client_1.changesList)({
                client,
                query: {
                    page_size: limit,
                    action: actionCodes,
                },
            });
            const changeList = response.data;
            return {
                results: changeList.results || [],
                count: changeList.count || 0,
                next: changeList.next || undefined,
                previous: changeList.previous || undefined,
            };
        }
        catch (error) {
            this.logger.error(`Failed to get changes by action ${actionCodes.join(',')}`, error);
            throw new Error(`Failed to get changes by action: ${error.message}`);
        }
    }
    async getChangesByUser(user, limit = 50) {
        try {
            return this.listRecentChanges(limit, user);
        }
        catch (error) {
            this.logger.error(`Failed to get changes by user ${user}`, error);
            throw new Error(`Failed to get changes by user: ${error.message}`);
        }
    }
};
exports.WeblateChangesService = WeblateChangesService;
exports.WeblateChangesService = WeblateChangesService = WeblateChangesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [weblate_client_service_1.WeblateClientService])
], WeblateChangesService);
//# sourceMappingURL=changes.service.js.map