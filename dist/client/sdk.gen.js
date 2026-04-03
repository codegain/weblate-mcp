"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupsPartialUpdate = exports.groupsRetrieve = exports.groupsDestroy = exports.groupsCreate = exports.groupsList = exports.componentsTranslationsCreate = exports.componentsTranslationsRetrieve = exports.componentsStatisticsRetrieve = exports.componentsScreenshotsRetrieve = exports.componentsRepositoryCreate = exports.componentsRepositoryRetrieve = exports.componentsNewTemplateRetrieve = exports.componentsMonolingualBaseRetrieve = exports.componentsLockCreate = exports.componentsLockRetrieve = exports.componentsLinksDestroy = exports.componentsLinksCreate = exports.componentsLinksRetrieve = exports.componentsFileRetrieve = exports.componentsCreditsRetrieve = exports.componentsChangesRetrieve = exports.componentsAddonsCreate = exports.componentsUpdate = exports.componentsPartialUpdate = exports.componentsRetrieve = exports.componentsDestroy = exports.componentsList = exports.componentListsComponentsDestroy = exports.componentListsComponentsCreate = exports.componentListsComponentsRetrieve = exports.componentListsUpdate = exports.componentListsPartialUpdate = exports.componentListsRetrieve = exports.componentListsDestroy = exports.componentListsCreate = exports.componentListsList = exports.changesRetrieve = exports.changesList = exports.categoriesStatisticsRetrieve = exports.categoriesUpdate = exports.categoriesPartialUpdate = exports.categoriesRetrieve = exports.categoriesDestroy = exports.categoriesCreate = exports.categoriesList = exports.addonsUpdate = exports.addonsPartialUpdate = exports.addonsRetrieve = exports.addonsDestroy = exports.addonsList = void 0;
exports.projectsStatisticsRetrieve = exports.projectsRepositoryCreate = exports.projectsRepositoryRetrieve = exports.projectsMachinerySettingsUpdate = exports.projectsMachinerySettingsCreate = exports.projectsMachinerySettingsPartialUpdate = exports.projectsMachinerySettingsRetrieve = exports.projectsLanguagesRetrieve = exports.projectsLabelsCreate = exports.projectsLabelsRetrieve = exports.projectsFileRetrieve = exports.projectsCreditsRetrieve = exports.projectsComponentsCreate = exports.projectsComponentsRetrieve = exports.projectsChangesRetrieve = exports.projectsCategoriesRetrieve = exports.projectsAddonsCreate = exports.projectsUpdate = exports.projectsPartialUpdate = exports.projectsRetrieve = exports.projectsDestroy = exports.projectsCreate = exports.projectsList = exports.metricsRetrieve = exports.memoryUpdate = exports.memoryPartialUpdate = exports.memoryRetrieve = exports.memoryDestroy = exports.memoryCreate = exports.memoryList = exports.languagesStatisticsRetrieve = exports.languagesUpdate = exports.languagesPartialUpdate = exports.languagesRetrieve = exports.languagesDestroy = exports.languagesCreate = exports.languagesList = exports.groupsRolesDestroy = exports.groupsRolesCreate = exports.groupsProjectsDestroy = exports.groupsProjectsCreate = exports.groupsLanguagesDestroy = exports.groupsLanguagesCreate = exports.groupsComponentsDestroy = exports.groupsComponentsCreate = exports.groupsComponentlistsDestroy = exports.groupsComponentlistsCreate = exports.groupsAdminsDestroy = exports.groupsAdminsCreate = exports.groupsUpdate = void 0;
exports.usersNotificationsDestroy = exports.usersNotificationsCreate = exports.usersNotificationsList = exports.usersGroupsCreate = exports.usersGroupsDestroy = exports.usersUpdate = exports.usersPartialUpdate = exports.usersRetrieve = exports.usersDestroy = exports.usersCreate = exports.usersList = exports.unitsTranslationsRetrieve = exports.unitsUpdate = exports.unitsPartialUpdate = exports.unitsRetrieve = exports.unitsDestroy = exports.unitsList = exports.translationsUnitsCreate = exports.translationsUnitsRetrieve = exports.translationsStatisticsRetrieve = exports.translationsRepositoryCreate = exports.translationsRepositoryRetrieve = exports.translationsFileUpdate = exports.translationsFileCreate = exports.translationsFileRetrieve = exports.translationsChangesRetrieve = exports.translationsAutotranslateCreate = exports.translationsRetrieve = exports.translationsDestroy = exports.translationsList = exports.tasksRetrieve = exports.tasksDestroy = exports.searchRetrieve = exports.screenshotsUnitsDestroy = exports.screenshotsUnitsCreate = exports.screenshotsFileUpdate = exports.screenshotsFileCreate = exports.screenshotsFileRetrieve = exports.screenshotsUpdate = exports.screenshotsPartialUpdate = exports.screenshotsRetrieve = exports.screenshotsDestroy = exports.screenshotsCreate = exports.screenshotsList = exports.rolesUpdate = exports.rolesPartialUpdate = exports.rolesRetrieve = exports.rolesDestroy = exports.rolesCreate = exports.rolesList = void 0;
exports.usersStatisticsRetrieve = exports.usersNotificationsUpdate = exports.usersNotificationsPartialUpdate = exports.usersNotificationsRetrieve = void 0;
const client_1 = require("./client");
const client_gen_1 = require("./client.gen");
const addonsList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/addons/',
        ...options
    });
};
exports.addonsList = addonsList;
const addonsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/addons/{id}/',
        ...options
    });
};
exports.addonsDestroy = addonsDestroy;
const addonsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/addons/{id}/',
        ...options
    });
};
exports.addonsRetrieve = addonsRetrieve;
const addonsPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/addons/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.addonsPartialUpdate = addonsPartialUpdate;
const addonsUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/addons/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.addonsUpdate = addonsUpdate;
const categoriesList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/categories/',
        ...options
    });
};
exports.categoriesList = categoriesList;
const categoriesCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/categories/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.categoriesCreate = categoriesCreate;
const categoriesDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/categories/{id}/',
        ...options
    });
};
exports.categoriesDestroy = categoriesDestroy;
const categoriesRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/categories/{id}/',
        ...options
    });
};
exports.categoriesRetrieve = categoriesRetrieve;
const categoriesPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/categories/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.categoriesPartialUpdate = categoriesPartialUpdate;
const categoriesUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/categories/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.categoriesUpdate = categoriesUpdate;
const categoriesStatisticsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/categories/{id}/statistics/',
        ...options
    });
};
exports.categoriesStatisticsRetrieve = categoriesStatisticsRetrieve;
const changesList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/changes/',
        ...options
    });
};
exports.changesList = changesList;
const changesRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/changes/{id}/',
        ...options
    });
};
exports.changesRetrieve = changesRetrieve;
const componentListsList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/component-lists/',
        ...options
    });
};
exports.componentListsList = componentListsList;
const componentListsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/component-lists/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.componentListsCreate = componentListsCreate;
const componentListsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/component-lists/{slug}/',
        ...options
    });
};
exports.componentListsDestroy = componentListsDestroy;
const componentListsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/component-lists/{slug}/',
        ...options
    });
};
exports.componentListsRetrieve = componentListsRetrieve;
const componentListsPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/component-lists/{slug}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.componentListsPartialUpdate = componentListsPartialUpdate;
const componentListsUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/component-lists/{slug}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.componentListsUpdate = componentListsUpdate;
const componentListsComponentsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/component-lists/{slug}/components/',
        ...options
    });
};
exports.componentListsComponentsRetrieve = componentListsComponentsRetrieve;
const componentListsComponentsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/component-lists/{slug}/components/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.componentListsComponentsCreate = componentListsComponentsCreate;
const componentListsComponentsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/component-lists/{slug}/components/{component_slug}/',
        ...options
    });
};
exports.componentListsComponentsDestroy = componentListsComponentsDestroy;
const componentsList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/',
        ...options
    });
};
exports.componentsList = componentsList;
const componentsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/',
        ...options
    });
};
exports.componentsDestroy = componentsDestroy;
const componentsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/',
        ...options
    });
};
exports.componentsRetrieve = componentsRetrieve;
const componentsPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.componentsPartialUpdate = componentsPartialUpdate;
const componentsUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.componentsUpdate = componentsUpdate;
const componentsAddonsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/addons/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.componentsAddonsCreate = componentsAddonsCreate;
const componentsChangesRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/changes/',
        ...options
    });
};
exports.componentsChangesRetrieve = componentsChangesRetrieve;
const componentsCreditsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/credits/',
        ...options
    });
};
exports.componentsCreditsRetrieve = componentsCreditsRetrieve;
const componentsFileRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/file/',
        ...options
    });
};
exports.componentsFileRetrieve = componentsFileRetrieve;
const componentsLinksRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/links/',
        ...options
    });
};
exports.componentsLinksRetrieve = componentsLinksRetrieve;
const componentsLinksCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/links/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.componentsLinksCreate = componentsLinksCreate;
const componentsLinksDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/links/{project_slug}/',
        ...options
    });
};
exports.componentsLinksDestroy = componentsLinksDestroy;
const componentsLockRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/lock/',
        ...options
    });
};
exports.componentsLockRetrieve = componentsLockRetrieve;
const componentsLockCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/lock/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.componentsLockCreate = componentsLockCreate;
const componentsMonolingualBaseRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/monolingual_base/',
        ...options
    });
};
exports.componentsMonolingualBaseRetrieve = componentsMonolingualBaseRetrieve;
const componentsNewTemplateRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/new_template/',
        ...options
    });
};
exports.componentsNewTemplateRetrieve = componentsNewTemplateRetrieve;
const componentsRepositoryRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/repository/',
        ...options
    });
};
exports.componentsRepositoryRetrieve = componentsRepositoryRetrieve;
const componentsRepositoryCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/repository/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.componentsRepositoryCreate = componentsRepositoryCreate;
const componentsScreenshotsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/screenshots/',
        ...options
    });
};
exports.componentsScreenshotsRetrieve = componentsScreenshotsRetrieve;
const componentsStatisticsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/statistics/',
        ...options
    });
};
exports.componentsStatisticsRetrieve = componentsStatisticsRetrieve;
const componentsTranslationsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/translations/',
        ...options
    });
};
exports.componentsTranslationsRetrieve = componentsTranslationsRetrieve;
const componentsTranslationsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/components/{project__slug}/{slug}/translations/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.componentsTranslationsCreate = componentsTranslationsCreate;
const groupsList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/',
        ...options
    });
};
exports.groupsList = groupsList;
const groupsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.groupsCreate = groupsCreate;
const groupsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/',
        ...options
    });
};
exports.groupsDestroy = groupsDestroy;
const groupsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/',
        ...options
    });
};
exports.groupsRetrieve = groupsRetrieve;
const groupsPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.groupsPartialUpdate = groupsPartialUpdate;
const groupsUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.groupsUpdate = groupsUpdate;
const groupsAdminsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/admins/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.groupsAdminsCreate = groupsAdminsCreate;
const groupsAdminsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/admins/{user_pk}/',
        ...options
    });
};
exports.groupsAdminsDestroy = groupsAdminsDestroy;
const groupsComponentlistsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/componentlists/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.groupsComponentlistsCreate = groupsComponentlistsCreate;
const groupsComponentlistsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/componentlists/{component_list_id}/',
        ...options
    });
};
exports.groupsComponentlistsDestroy = groupsComponentlistsDestroy;
const groupsComponentsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/components/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.groupsComponentsCreate = groupsComponentsCreate;
const groupsComponentsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/components/{component_id}/',
        ...options
    });
};
exports.groupsComponentsDestroy = groupsComponentsDestroy;
const groupsLanguagesCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/languages/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.groupsLanguagesCreate = groupsLanguagesCreate;
const groupsLanguagesDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/languages/{language_code}/',
        ...options
    });
};
exports.groupsLanguagesDestroy = groupsLanguagesDestroy;
const groupsProjectsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/projects/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.groupsProjectsCreate = groupsProjectsCreate;
const groupsProjectsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/projects/{project_id}/',
        ...options
    });
};
exports.groupsProjectsDestroy = groupsProjectsDestroy;
const groupsRolesCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/roles/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.groupsRolesCreate = groupsRolesCreate;
const groupsRolesDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/groups/{id}/roles/{role_id}/',
        ...options
    });
};
exports.groupsRolesDestroy = groupsRolesDestroy;
const languagesList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/languages/',
        ...options
    });
};
exports.languagesList = languagesList;
const languagesCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/languages/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.languagesCreate = languagesCreate;
const languagesDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/languages/{code}/',
        ...options
    });
};
exports.languagesDestroy = languagesDestroy;
const languagesRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/languages/{code}/',
        ...options
    });
};
exports.languagesRetrieve = languagesRetrieve;
const languagesPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/languages/{code}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.languagesPartialUpdate = languagesPartialUpdate;
const languagesUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/languages/{code}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.languagesUpdate = languagesUpdate;
const languagesStatisticsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/languages/{code}/statistics/',
        ...options
    });
};
exports.languagesStatisticsRetrieve = languagesStatisticsRetrieve;
const memoryList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/memory/',
        ...options
    });
};
exports.memoryList = memoryList;
const memoryCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/memory/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.memoryCreate = memoryCreate;
const memoryDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/memory/{id}/',
        ...options
    });
};
exports.memoryDestroy = memoryDestroy;
const memoryRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/memory/{id}/',
        ...options
    });
};
exports.memoryRetrieve = memoryRetrieve;
const memoryPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/memory/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.memoryPartialUpdate = memoryPartialUpdate;
const memoryUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/memory/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.memoryUpdate = memoryUpdate;
const metricsRetrieve = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/metrics/',
        ...options
    });
};
exports.metricsRetrieve = metricsRetrieve;
const projectsList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/',
        ...options
    });
};
exports.projectsList = projectsList;
const projectsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.projectsCreate = projectsCreate;
const projectsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/',
        ...options
    });
};
exports.projectsDestroy = projectsDestroy;
const projectsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/',
        ...options
    });
};
exports.projectsRetrieve = projectsRetrieve;
const projectsPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.projectsPartialUpdate = projectsPartialUpdate;
const projectsUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.projectsUpdate = projectsUpdate;
const projectsAddonsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/addons/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.projectsAddonsCreate = projectsAddonsCreate;
const projectsCategoriesRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/categories/',
        ...options
    });
};
exports.projectsCategoriesRetrieve = projectsCategoriesRetrieve;
const projectsChangesRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/changes/',
        ...options
    });
};
exports.projectsChangesRetrieve = projectsChangesRetrieve;
const projectsComponentsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/components/',
        ...options
    });
};
exports.projectsComponentsRetrieve = projectsComponentsRetrieve;
const projectsComponentsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/components/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.projectsComponentsCreate = projectsComponentsCreate;
const projectsCreditsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/credits/',
        ...options
    });
};
exports.projectsCreditsRetrieve = projectsCreditsRetrieve;
const projectsFileRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/file/',
        ...options
    });
};
exports.projectsFileRetrieve = projectsFileRetrieve;
const projectsLabelsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/labels/',
        ...options
    });
};
exports.projectsLabelsRetrieve = projectsLabelsRetrieve;
const projectsLabelsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/labels/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.projectsLabelsCreate = projectsLabelsCreate;
const projectsLanguagesRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/languages/',
        ...options
    });
};
exports.projectsLanguagesRetrieve = projectsLanguagesRetrieve;
const projectsMachinerySettingsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/machinery_settings/',
        ...options
    });
};
exports.projectsMachinerySettingsRetrieve = projectsMachinerySettingsRetrieve;
const projectsMachinerySettingsPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/machinery_settings/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.projectsMachinerySettingsPartialUpdate = projectsMachinerySettingsPartialUpdate;
const projectsMachinerySettingsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/machinery_settings/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.projectsMachinerySettingsCreate = projectsMachinerySettingsCreate;
const projectsMachinerySettingsUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/machinery_settings/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.projectsMachinerySettingsUpdate = projectsMachinerySettingsUpdate;
const projectsRepositoryRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/repository/',
        ...options
    });
};
exports.projectsRepositoryRetrieve = projectsRepositoryRetrieve;
const projectsRepositoryCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/repository/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.projectsRepositoryCreate = projectsRepositoryCreate;
const projectsStatisticsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/projects/{slug}/statistics/',
        ...options
    });
};
exports.projectsStatisticsRetrieve = projectsStatisticsRetrieve;
const rolesList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/roles/',
        ...options
    });
};
exports.rolesList = rolesList;
const rolesCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/roles/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.rolesCreate = rolesCreate;
const rolesDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/roles/{id}/',
        ...options
    });
};
exports.rolesDestroy = rolesDestroy;
const rolesRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/roles/{id}/',
        ...options
    });
};
exports.rolesRetrieve = rolesRetrieve;
const rolesPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/roles/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.rolesPartialUpdate = rolesPartialUpdate;
const rolesUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/roles/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.rolesUpdate = rolesUpdate;
const screenshotsList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/screenshots/',
        ...options
    });
};
exports.screenshotsList = screenshotsList;
const screenshotsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/screenshots/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.screenshotsCreate = screenshotsCreate;
const screenshotsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/screenshots/{id}/',
        ...options
    });
};
exports.screenshotsDestroy = screenshotsDestroy;
const screenshotsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/screenshots/{id}/',
        ...options
    });
};
exports.screenshotsRetrieve = screenshotsRetrieve;
const screenshotsPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/screenshots/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.screenshotsPartialUpdate = screenshotsPartialUpdate;
const screenshotsUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/screenshots/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.screenshotsUpdate = screenshotsUpdate;
const screenshotsFileRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/screenshots/{id}/file/',
        ...options
    });
};
exports.screenshotsFileRetrieve = screenshotsFileRetrieve;
const screenshotsFileCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        ...client_1.formDataBodySerializer,
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/screenshots/{id}/file/',
        ...options,
        headers: {
            'Content-Type': null,
            ...options.headers
        }
    });
};
exports.screenshotsFileCreate = screenshotsFileCreate;
const screenshotsFileUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        ...client_1.formDataBodySerializer,
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/screenshots/{id}/file/',
        ...options,
        headers: {
            'Content-Type': null,
            ...options.headers
        }
    });
};
exports.screenshotsFileUpdate = screenshotsFileUpdate;
const screenshotsUnitsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/screenshots/{id}/units/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.screenshotsUnitsCreate = screenshotsUnitsCreate;
const screenshotsUnitsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/screenshots/{id}/units/{unit_id}/',
        ...options
    });
};
exports.screenshotsUnitsDestroy = screenshotsUnitsDestroy;
const searchRetrieve = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/search/',
        ...options
    });
};
exports.searchRetrieve = searchRetrieve;
const tasksDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/tasks/{id}/',
        ...options
    });
};
exports.tasksDestroy = tasksDestroy;
const tasksRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/tasks/{id}/',
        ...options
    });
};
exports.tasksRetrieve = tasksRetrieve;
const translationsList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/translations/',
        ...options
    });
};
exports.translationsList = translationsList;
const translationsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/translations/{component__project__slug}/{component__slug}/{language__code}/',
        ...options
    });
};
exports.translationsDestroy = translationsDestroy;
const translationsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/translations/{component__project__slug}/{component__slug}/{language__code}/',
        ...options
    });
};
exports.translationsRetrieve = translationsRetrieve;
const translationsAutotranslateCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/translations/{component__project__slug}/{component__slug}/{language__code}/autotranslate/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.translationsAutotranslateCreate = translationsAutotranslateCreate;
const translationsChangesRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/translations/{component__project__slug}/{component__slug}/{language__code}/changes/',
        ...options
    });
};
exports.translationsChangesRetrieve = translationsChangesRetrieve;
const translationsFileRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/translations/{component__project__slug}/{component__slug}/{language__code}/file/',
        ...options
    });
};
exports.translationsFileRetrieve = translationsFileRetrieve;
const translationsFileCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        ...client_1.formDataBodySerializer,
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/translations/{component__project__slug}/{component__slug}/{language__code}/file/',
        ...options,
        headers: {
            'Content-Type': null,
            ...options.headers
        }
    });
};
exports.translationsFileCreate = translationsFileCreate;
const translationsFileUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        ...client_1.formDataBodySerializer,
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/translations/{component__project__slug}/{component__slug}/{language__code}/file/',
        ...options,
        headers: {
            'Content-Type': null,
            ...options.headers
        }
    });
};
exports.translationsFileUpdate = translationsFileUpdate;
const translationsRepositoryRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/translations/{component__project__slug}/{component__slug}/{language__code}/repository/',
        ...options
    });
};
exports.translationsRepositoryRetrieve = translationsRepositoryRetrieve;
const translationsRepositoryCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/translations/{component__project__slug}/{component__slug}/{language__code}/repository/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.translationsRepositoryCreate = translationsRepositoryCreate;
const translationsStatisticsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/translations/{component__project__slug}/{component__slug}/{language__code}/statistics/',
        ...options
    });
};
exports.translationsStatisticsRetrieve = translationsStatisticsRetrieve;
const translationsUnitsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/translations/{component__project__slug}/{component__slug}/{language__code}/units/',
        ...options
    });
};
exports.translationsUnitsRetrieve = translationsUnitsRetrieve;
const translationsUnitsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/translations/{component__project__slug}/{component__slug}/{language__code}/units/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.translationsUnitsCreate = translationsUnitsCreate;
const unitsList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/units/',
        ...options
    });
};
exports.unitsList = unitsList;
const unitsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/units/{id}/',
        ...options
    });
};
exports.unitsDestroy = unitsDestroy;
const unitsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/units/{id}/',
        ...options
    });
};
exports.unitsRetrieve = unitsRetrieve;
const unitsPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/units/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.unitsPartialUpdate = unitsPartialUpdate;
const unitsUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/units/{id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.unitsUpdate = unitsUpdate;
const unitsTranslationsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/units/{id}/translations/',
        ...options
    });
};
exports.unitsTranslationsRetrieve = unitsTranslationsRetrieve;
const usersList = (options) => {
    return (options?.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/',
        ...options
    });
};
exports.usersList = usersList;
const usersCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.usersCreate = usersCreate;
const usersDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/{username}/',
        ...options
    });
};
exports.usersDestroy = usersDestroy;
const usersRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/{username}/',
        ...options
    });
};
exports.usersRetrieve = usersRetrieve;
const usersPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/{username}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.usersPartialUpdate = usersPartialUpdate;
const usersUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/{username}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.usersUpdate = usersUpdate;
const usersGroupsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/{username}/groups/',
        ...options
    });
};
exports.usersGroupsDestroy = usersGroupsDestroy;
const usersGroupsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/{username}/groups/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.usersGroupsCreate = usersGroupsCreate;
const usersNotificationsList = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/{username}/notifications/',
        ...options
    });
};
exports.usersNotificationsList = usersNotificationsList;
const usersNotificationsCreate = (options) => {
    return (options.client ?? client_gen_1.client).post({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/{username}/notifications/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.usersNotificationsCreate = usersNotificationsCreate;
const usersNotificationsDestroy = (options) => {
    return (options.client ?? client_gen_1.client).delete({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/{username}/notifications/{subscription_id}/',
        ...options
    });
};
exports.usersNotificationsDestroy = usersNotificationsDestroy;
const usersNotificationsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/{username}/notifications/{subscription_id}/',
        ...options
    });
};
exports.usersNotificationsRetrieve = usersNotificationsRetrieve;
const usersNotificationsPartialUpdate = (options) => {
    return (options.client ?? client_gen_1.client).patch({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/{username}/notifications/{subscription_id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.usersNotificationsPartialUpdate = usersNotificationsPartialUpdate;
const usersNotificationsUpdate = (options) => {
    return (options.client ?? client_gen_1.client).put({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/{username}/notifications/{subscription_id}/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};
exports.usersNotificationsUpdate = usersNotificationsUpdate;
const usersStatisticsRetrieve = (options) => {
    return (options.client ?? client_gen_1.client).get({
        security: [
            {
                name: 'Token',
                type: 'apiKey'
            },
            {
                name: 'Bearer',
                type: 'apiKey'
            },
            {
                in: 'cookie',
                name: 'sessionid',
                type: 'apiKey'
            }
        ],
        url: '/users/{username}/statistics/',
        ...options
    });
};
exports.usersStatisticsRetrieve = usersStatisticsRetrieve;
//# sourceMappingURL=sdk.gen.js.map