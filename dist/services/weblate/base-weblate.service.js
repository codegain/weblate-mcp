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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseWeblateService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
let BaseWeblateService = class BaseWeblateService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(this.constructor.name);
        const rawApiUrl = this.configService.get('WEBLATE_API_URL');
        const apiToken = this.configService.get('WEBLATE_API_TOKEN');
        if (!rawApiUrl || !apiToken) {
            throw new Error('WEBLATE_API_URL and WEBLATE_API_TOKEN must be configured');
        }
        const apiUrl = rawApiUrl.endsWith('/api') ? rawApiUrl : rawApiUrl + '/api';
        this.apiClient = axios_1.default.create({
            baseURL: apiUrl,
            headers: {
                Authorization: `Token ${apiToken}`,
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }
};
exports.BaseWeblateService = BaseWeblateService;
exports.BaseWeblateService = BaseWeblateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], BaseWeblateService);
//# sourceMappingURL=base-weblate.service.js.map