export type ActionEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 13 | 14 | 15 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 41 | 42 | 43 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79;
export type Addon = {
    readonly component: string;
    readonly project: string;
    name: string;
    readonly id: number;
    configuration?: unknown;
    readonly url: string;
};
export type AddonsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type AddonsListErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type AddonsPartialUpdateConfigurationErrorComponent = {
    attr: 'configuration';
    code: 'invalid' | 'null';
    detail: string;
};
export type AddonsPartialUpdateError = ({
    attr: 'non_field_errors';
} & AddonsPartialUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & AddonsPartialUpdateNameErrorComponent) | ({
    attr: 'configuration';
} & AddonsPartialUpdateConfigurationErrorComponent);
export type AddonsPartialUpdateErrorResponse400 = ({
    type: 'validation_error';
} & AddonsPartialUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type AddonsPartialUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type AddonsPartialUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type AddonsPartialUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<AddonsPartialUpdateError>;
};
export type AddonsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type AddonsUpdateConfigurationErrorComponent = {
    attr: 'configuration';
    code: 'invalid' | 'null';
    detail: string;
};
export type AddonsUpdateError = ({
    attr: 'non_field_errors';
} & AddonsUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & AddonsUpdateNameErrorComponent) | ({
    attr: 'configuration';
} & AddonsUpdateConfigurationErrorComponent);
export type AddonsUpdateErrorResponse400 = ({
    type: 'validation_error';
} & AddonsUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type AddonsUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type AddonsUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type AddonsUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<AddonsUpdateError>;
};
export type AutoComponentList = {
    project_match?: string;
    component_match?: string;
};
export type BasicUser = {
    readonly id: number;
    full_name: string;
    username: string;
};
export type BlankEnum = '';
export type CategoriesCreateCategoryErrorComponent = {
    attr: 'category';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null' | 'required';
    detail: string;
};
export type CategoriesCreateError = ({
    attr: 'non_field_errors';
} & CategoriesCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & CategoriesCreateNameErrorComponent) | ({
    attr: 'slug';
} & CategoriesCreateSlugErrorComponent) | ({
    attr: 'project';
} & CategoriesCreateProjectErrorComponent) | ({
    attr: 'category';
} & CategoriesCreateCategoryErrorComponent);
export type CategoriesCreateErrorResponse400 = ({
    type: 'validation_error';
} & CategoriesCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type CategoriesCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type CategoriesCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null' | 'unique';
    detail: string;
};
export type CategoriesCreateProjectErrorComponent = {
    attr: 'project';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null' | 'required';
    detail: string;
};
export type CategoriesCreateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type CategoriesCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<CategoriesCreateError>;
};
export type CategoriesDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type CategoriesListErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type CategoriesPartialUpdateCategoryErrorComponent = {
    attr: 'category';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null' | 'required';
    detail: string;
};
export type CategoriesPartialUpdateError = ({
    attr: 'non_field_errors';
} & CategoriesPartialUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & CategoriesPartialUpdateNameErrorComponent) | ({
    attr: 'slug';
} & CategoriesPartialUpdateSlugErrorComponent) | ({
    attr: 'project';
} & CategoriesPartialUpdateProjectErrorComponent) | ({
    attr: 'category';
} & CategoriesPartialUpdateCategoryErrorComponent);
export type CategoriesPartialUpdateErrorResponse400 = ({
    type: 'validation_error';
} & CategoriesPartialUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type CategoriesPartialUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type CategoriesPartialUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null' | 'unique';
    detail: string;
};
export type CategoriesPartialUpdateProjectErrorComponent = {
    attr: 'project';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null' | 'required';
    detail: string;
};
export type CategoriesPartialUpdateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type CategoriesPartialUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<CategoriesPartialUpdateError>;
};
export type CategoriesRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type CategoriesStatisticsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type CategoriesUpdateCategoryErrorComponent = {
    attr: 'category';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null' | 'required';
    detail: string;
};
export type CategoriesUpdateError = ({
    attr: 'non_field_errors';
} & CategoriesUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & CategoriesUpdateNameErrorComponent) | ({
    attr: 'slug';
} & CategoriesUpdateSlugErrorComponent) | ({
    attr: 'project';
} & CategoriesUpdateProjectErrorComponent) | ({
    attr: 'category';
} & CategoriesUpdateCategoryErrorComponent);
export type CategoriesUpdateErrorResponse400 = ({
    type: 'validation_error';
} & CategoriesUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type CategoriesUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type CategoriesUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null' | 'unique';
    detail: string;
};
export type CategoriesUpdateProjectErrorComponent = {
    attr: 'project';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null' | 'required';
    detail: string;
};
export type CategoriesUpdateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type CategoriesUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<CategoriesUpdateError>;
};
export type Category = {
    readonly id: number;
    name: string;
    slug: string;
    project: string;
    category?: string;
    readonly url: string;
    readonly statistics_url: string;
};
export type Change = {
    readonly unit: string;
    readonly component: string;
    readonly translation: string;
    readonly user: string;
    readonly author: string;
    readonly timestamp: string;
    action?: ActionEnum;
    target?: string;
    old?: string;
    details?: unknown;
    readonly id: number;
    readonly action_name: string;
    readonly url: string;
};
export type ChangesListActionErrorComponent = {
    attr: 'action';
    code: 'invalid_choice' | 'invalid_list';
    detail: string;
};
export type ChangesListError = ({
    attr: 'action';
} & ChangesListActionErrorComponent) | ({
    attr: 'user';
} & ChangesListUserErrorComponent) | ({
    attr: 'timestamp';
} & ChangesListTimestampErrorComponent);
export type ChangesListErrorResponse400 = ({
    type: 'validation_error';
} & ChangesListValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ChangesListTimestampErrorComponent = {
    attr: 'timestamp';
    code: 'invalid';
    detail: string;
};
export type ChangesListUserErrorComponent = {
    attr: 'user';
    code: 'null_characters_not_allowed';
    detail: string;
};
export type ChangesListValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ChangesListError>;
};
export type ChangesRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ClientErrorEnum = 'client_error';
export type ColorEnum = 'navy' | 'blue' | 'aqua' | 'teal' | 'olive' | 'green' | 'lime' | 'yellow' | 'orange' | 'red' | 'maroon' | 'fuchsia' | 'purple' | 'black' | 'gray' | 'silver';
export type Component = {
    name: string;
    slug: string;
    readonly id: number;
    source_language?: Language;
    project: Project;
    vcs?: VcsEnum;
    repo: string;
    git_export?: string;
    branch?: string;
    push_branch?: string;
    filemask: string;
    screenshot_filemask?: string;
    template?: string;
    edit_template?: boolean;
    intermediate?: string;
    new_base?: string;
    file_format: FileFormatEnum;
    license?: LicenseEnum | BlankEnum;
    readonly license_url: string;
    agreement?: string;
    readonly web_url: string;
    readonly url: string;
    readonly repository_url: string;
    readonly translations_url: string;
    readonly statistics_url: string;
    readonly lock_url: string;
    readonly links_url: string;
    readonly changes_list_url: string;
    readonly task_url: string | null;
    readonly credits_url: string;
    new_lang?: NewLangEnum;
    language_code_style?: LanguageCodeStyleEnum | BlankEnum;
    push?: string;
    check_flags?: string;
    priority?: PriorityEnum;
    enforced_checks?: unknown;
    restricted?: boolean;
    repoweb?: string;
    report_source_bugs?: string;
    merge_style?: MergeStyleEnum;
    commit_message?: string;
    add_message?: string;
    delete_message?: string;
    merge_message?: string;
    addon_message?: string;
    pull_message?: string;
    allow_translation_propagation?: boolean;
    manage_units?: boolean;
    enable_suggestions?: boolean;
    suggestion_voting?: boolean;
    suggestion_autoaccept?: number;
    push_on_commit?: boolean;
    commit_pending_age?: number;
    auto_lock_error?: boolean;
    language_regex?: string;
    key_filter?: string;
    secondary_language?: number | null;
    variant_regex?: string;
    zipfile?: string;
    docfile?: string;
    readonly addons: Array<string>;
    is_glossary?: boolean;
    glossary_color?: ColorEnum;
    disable_autoshare?: boolean;
    category?: string | null;
    readonly linked_component: string;
    readonly locked: boolean;
};
export type ComponentList = {
    name: string;
    slug: string;
    readonly id: number;
    show_dashboard?: boolean;
    readonly components: Array<string>;
    readonly auto_assign: Array<AutoComponentList>;
    readonly url: string;
};
export type ComponentListsComponentsCreateError = ({
    attr: 'non_field_errors';
} & ComponentListsComponentsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ComponentListsComponentsCreateNameErrorComponent) | ({
    attr: 'slug';
} & ComponentListsComponentsCreateSlugErrorComponent) | ({
    attr: 'show_dashboard';
} & ComponentListsComponentsCreateShowDashboardErrorComponent);
export type ComponentListsComponentsCreateErrorResponse400 = ({
    type: 'validation_error';
} & ComponentListsComponentsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ComponentListsComponentsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ComponentListsComponentsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentListsComponentsCreateShowDashboardErrorComponent = {
    attr: 'show_dashboard';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentListsComponentsCreateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ComponentListsComponentsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ComponentListsComponentsCreateError>;
};
export type ComponentListsComponentsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentListsComponentsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentListsCreateError = ({
    attr: 'non_field_errors';
} & ComponentListsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ComponentListsCreateNameErrorComponent) | ({
    attr: 'slug';
} & ComponentListsCreateSlugErrorComponent) | ({
    attr: 'show_dashboard';
} & ComponentListsCreateShowDashboardErrorComponent);
export type ComponentListsCreateErrorResponse400 = ({
    type: 'validation_error';
} & ComponentListsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ComponentListsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ComponentListsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentListsCreateShowDashboardErrorComponent = {
    attr: 'show_dashboard';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentListsCreateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ComponentListsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ComponentListsCreateError>;
};
export type ComponentListsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentListsListErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentListsPartialUpdateError = ({
    attr: 'non_field_errors';
} & ComponentListsPartialUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ComponentListsPartialUpdateNameErrorComponent) | ({
    attr: 'slug';
} & ComponentListsPartialUpdateSlugErrorComponent) | ({
    attr: 'show_dashboard';
} & ComponentListsPartialUpdateShowDashboardErrorComponent);
export type ComponentListsPartialUpdateErrorResponse400 = ({
    type: 'validation_error';
} & ComponentListsPartialUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ComponentListsPartialUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ComponentListsPartialUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentListsPartialUpdateShowDashboardErrorComponent = {
    attr: 'show_dashboard';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentListsPartialUpdateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ComponentListsPartialUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ComponentListsPartialUpdateError>;
};
export type ComponentListsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentListsUpdateError = ({
    attr: 'non_field_errors';
} & ComponentListsUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ComponentListsUpdateNameErrorComponent) | ({
    attr: 'slug';
} & ComponentListsUpdateSlugErrorComponent) | ({
    attr: 'show_dashboard';
} & ComponentListsUpdateShowDashboardErrorComponent);
export type ComponentListsUpdateErrorResponse400 = ({
    type: 'validation_error';
} & ComponentListsUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ComponentListsUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ComponentListsUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentListsUpdateShowDashboardErrorComponent = {
    attr: 'show_dashboard';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentListsUpdateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ComponentListsUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ComponentListsUpdateError>;
};
export type ComponentsAddonsCreateAddMessageErrorComponent = {
    attr: 'add_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateAddonMessageErrorComponent = {
    attr: 'addon_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateAgreementErrorComponent = {
    attr: 'agreement';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateAllowTranslationPropagationErrorComponent = {
    attr: 'allow_translation_propagation';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateAutoLockErrorErrorComponent = {
    attr: 'auto_lock_error';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateBranchErrorComponent = {
    attr: 'branch';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateCategoryErrorComponent = {
    attr: 'category';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match';
    detail: string;
};
export type ComponentsAddonsCreateCheckFlagsErrorComponent = {
    attr: 'check_flags';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateCommitMessageErrorComponent = {
    attr: 'commit_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateCommitPendingAgeErrorComponent = {
    attr: 'commit_pending_age';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateDeleteMessageErrorComponent = {
    attr: 'delete_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateDisableAutoshareErrorComponent = {
    attr: 'disable_autoshare';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateDocfileErrorComponent = {
    attr: 'docfile';
    code: 'empty' | 'invalid' | 'no_name' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateEditTemplateErrorComponent = {
    attr: 'edit_template';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateEnableSuggestionsErrorComponent = {
    attr: 'enable_suggestions';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateEnforcedChecksErrorComponent = {
    attr: 'enforced_checks';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateError = ({
    attr: 'non_field_errors';
} & ComponentsAddonsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ComponentsAddonsCreateNameErrorComponent) | ({
    attr: 'slug';
} & ComponentsAddonsCreateSlugErrorComponent) | ({
    attr: 'source_language.non_field_errors';
} & ComponentsAddonsCreateSourceLanguageNonFieldErrorsErrorComponent) | ({
    attr: 'source_language.code';
} & ComponentsAddonsCreateSourceLanguageCodeErrorComponent) | ({
    attr: 'source_language.name';
} & ComponentsAddonsCreateSourceLanguageNameErrorComponent) | ({
    attr: 'source_language.plural.non_field_errors';
} & ComponentsAddonsCreateSourceLanguagePluralNonFieldErrorsErrorComponent) | ({
    attr: 'source_language.plural.source';
} & ComponentsAddonsCreateSourceLanguagePluralSourceErrorComponent) | ({
    attr: 'source_language.plural.number';
} & ComponentsAddonsCreateSourceLanguagePluralNumberErrorComponent) | ({
    attr: 'source_language.plural.formula';
} & ComponentsAddonsCreateSourceLanguagePluralFormulaErrorComponent) | ({
    attr: 'source_language.direction';
} & ComponentsAddonsCreateSourceLanguageDirectionErrorComponent) | ({
    attr: 'source_language.population';
} & ComponentsAddonsCreateSourceLanguagePopulationErrorComponent) | ({
    attr: 'vcs';
} & ComponentsAddonsCreateVcsErrorComponent) | ({
    attr: 'repo';
} & ComponentsAddonsCreateRepoErrorComponent) | ({
    attr: 'git_export';
} & ComponentsAddonsCreateGitExportErrorComponent) | ({
    attr: 'branch';
} & ComponentsAddonsCreateBranchErrorComponent) | ({
    attr: 'push_branch';
} & ComponentsAddonsCreatePushBranchErrorComponent) | ({
    attr: 'filemask';
} & ComponentsAddonsCreateFilemaskErrorComponent) | ({
    attr: 'screenshot_filemask';
} & ComponentsAddonsCreateScreenshotFilemaskErrorComponent) | ({
    attr: 'template';
} & ComponentsAddonsCreateTemplateErrorComponent) | ({
    attr: 'edit_template';
} & ComponentsAddonsCreateEditTemplateErrorComponent) | ({
    attr: 'intermediate';
} & ComponentsAddonsCreateIntermediateErrorComponent) | ({
    attr: 'new_base';
} & ComponentsAddonsCreateNewBaseErrorComponent) | ({
    attr: 'file_format';
} & ComponentsAddonsCreateFileFormatErrorComponent) | ({
    attr: 'license';
} & ComponentsAddonsCreateLicenseErrorComponent) | ({
    attr: 'agreement';
} & ComponentsAddonsCreateAgreementErrorComponent) | ({
    attr: 'new_lang';
} & ComponentsAddonsCreateNewLangErrorComponent) | ({
    attr: 'language_code_style';
} & ComponentsAddonsCreateLanguageCodeStyleErrorComponent) | ({
    attr: 'push';
} & ComponentsAddonsCreatePushErrorComponent) | ({
    attr: 'check_flags';
} & ComponentsAddonsCreateCheckFlagsErrorComponent) | ({
    attr: 'priority';
} & ComponentsAddonsCreatePriorityErrorComponent) | ({
    attr: 'enforced_checks';
} & ComponentsAddonsCreateEnforcedChecksErrorComponent) | ({
    attr: 'restricted';
} & ComponentsAddonsCreateRestrictedErrorComponent) | ({
    attr: 'repoweb';
} & ComponentsAddonsCreateRepowebErrorComponent) | ({
    attr: 'report_source_bugs';
} & ComponentsAddonsCreateReportSourceBugsErrorComponent) | ({
    attr: 'merge_style';
} & ComponentsAddonsCreateMergeStyleErrorComponent) | ({
    attr: 'commit_message';
} & ComponentsAddonsCreateCommitMessageErrorComponent) | ({
    attr: 'add_message';
} & ComponentsAddonsCreateAddMessageErrorComponent) | ({
    attr: 'delete_message';
} & ComponentsAddonsCreateDeleteMessageErrorComponent) | ({
    attr: 'merge_message';
} & ComponentsAddonsCreateMergeMessageErrorComponent) | ({
    attr: 'addon_message';
} & ComponentsAddonsCreateAddonMessageErrorComponent) | ({
    attr: 'pull_message';
} & ComponentsAddonsCreatePullMessageErrorComponent) | ({
    attr: 'allow_translation_propagation';
} & ComponentsAddonsCreateAllowTranslationPropagationErrorComponent) | ({
    attr: 'manage_units';
} & ComponentsAddonsCreateManageUnitsErrorComponent) | ({
    attr: 'enable_suggestions';
} & ComponentsAddonsCreateEnableSuggestionsErrorComponent) | ({
    attr: 'suggestion_voting';
} & ComponentsAddonsCreateSuggestionVotingErrorComponent) | ({
    attr: 'suggestion_autoaccept';
} & ComponentsAddonsCreateSuggestionAutoacceptErrorComponent) | ({
    attr: 'push_on_commit';
} & ComponentsAddonsCreatePushOnCommitErrorComponent) | ({
    attr: 'commit_pending_age';
} & ComponentsAddonsCreateCommitPendingAgeErrorComponent) | ({
    attr: 'auto_lock_error';
} & ComponentsAddonsCreateAutoLockErrorErrorComponent) | ({
    attr: 'language_regex';
} & ComponentsAddonsCreateLanguageRegexErrorComponent) | ({
    attr: 'key_filter';
} & ComponentsAddonsCreateKeyFilterErrorComponent) | ({
    attr: 'secondary_language';
} & ComponentsAddonsCreateSecondaryLanguageErrorComponent) | ({
    attr: 'variant_regex';
} & ComponentsAddonsCreateVariantRegexErrorComponent) | ({
    attr: 'zipfile';
} & ComponentsAddonsCreateZipfileErrorComponent) | ({
    attr: 'docfile';
} & ComponentsAddonsCreateDocfileErrorComponent) | ({
    attr: 'is_glossary';
} & ComponentsAddonsCreateIsGlossaryErrorComponent) | ({
    attr: 'glossary_color';
} & ComponentsAddonsCreateGlossaryColorErrorComponent) | ({
    attr: 'disable_autoshare';
} & ComponentsAddonsCreateDisableAutoshareErrorComponent) | ({
    attr: 'category';
} & ComponentsAddonsCreateCategoryErrorComponent);
export type ComponentsAddonsCreateErrorResponse400 = ({
    type: 'validation_error';
} & ComponentsAddonsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ComponentsAddonsCreateFileFormatErrorComponent = {
    attr: 'file_format';
    code: 'invalid_choice' | 'null' | 'required';
    detail: string;
};
export type ComponentsAddonsCreateFilemaskErrorComponent = {
    attr: 'filemask';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateGitExportErrorComponent = {
    attr: 'git_export';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateGlossaryColorErrorComponent = {
    attr: 'glossary_color';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateIntermediateErrorComponent = {
    attr: 'intermediate';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateIsGlossaryErrorComponent = {
    attr: 'is_glossary';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateKeyFilterErrorComponent = {
    attr: 'key_filter';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateLanguageCodeStyleErrorComponent = {
    attr: 'language_code_style';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateLanguageRegexErrorComponent = {
    attr: 'language_regex';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateLicenseErrorComponent = {
    attr: 'license';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateManageUnitsErrorComponent = {
    attr: 'manage_units';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateMergeMessageErrorComponent = {
    attr: 'merge_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateMergeStyleErrorComponent = {
    attr: 'merge_style';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateNewBaseErrorComponent = {
    attr: 'new_base';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateNewLangErrorComponent = {
    attr: 'new_lang';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreatePriorityErrorComponent = {
    attr: 'priority';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsAddonsCreatePullMessageErrorComponent = {
    attr: 'pull_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreatePushBranchErrorComponent = {
    attr: 'push_branch';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreatePushErrorComponent = {
    attr: 'push';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreatePushOnCommitErrorComponent = {
    attr: 'push_on_commit';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateRepoErrorComponent = {
    attr: 'repo';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateReportSourceBugsErrorComponent = {
    attr: 'report_source_bugs';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateRepowebErrorComponent = {
    attr: 'repoweb';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateRestrictedErrorComponent = {
    attr: 'restricted';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateScreenshotFilemaskErrorComponent = {
    attr: 'screenshot_filemask';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateSecondaryLanguageErrorComponent = {
    attr: 'secondary_language';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type ComponentsAddonsCreateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateSourceLanguageCodeErrorComponent = {
    attr: 'source_language.code';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateSourceLanguageDirectionErrorComponent = {
    attr: 'source_language.direction';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateSourceLanguageNameErrorComponent = {
    attr: 'source_language.name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateSourceLanguageNonFieldErrorsErrorComponent = {
    attr: 'source_language.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateSourceLanguagePluralFormulaErrorComponent = {
    attr: 'source_language.plural.formula';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateSourceLanguagePluralNonFieldErrorsErrorComponent = {
    attr: 'source_language.plural.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateSourceLanguagePluralNumberErrorComponent = {
    attr: 'source_language.plural.number';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateSourceLanguagePluralSourceErrorComponent = {
    attr: 'source_language.plural.source';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateSourceLanguagePopulationErrorComponent = {
    attr: 'source_language.population';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateSuggestionAutoacceptErrorComponent = {
    attr: 'suggestion_autoaccept';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateSuggestionVotingErrorComponent = {
    attr: 'suggestion_voting';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateTemplateErrorComponent = {
    attr: 'template';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ComponentsAddonsCreateError>;
};
export type ComponentsAddonsCreateVariantRegexErrorComponent = {
    attr: 'variant_regex';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsAddonsCreateVcsErrorComponent = {
    attr: 'vcs';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsAddonsCreateZipfileErrorComponent = {
    attr: 'zipfile';
    code: 'empty' | 'invalid' | 'no_name' | 'null';
    detail: string;
};
export type ComponentsChangesRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsCreditsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsFileRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsLinksCreateAddMessageErrorComponent = {
    attr: 'add_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateAddonMessageErrorComponent = {
    attr: 'addon_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateAgreementErrorComponent = {
    attr: 'agreement';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateAllowTranslationPropagationErrorComponent = {
    attr: 'allow_translation_propagation';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreateAutoLockErrorErrorComponent = {
    attr: 'auto_lock_error';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreateBranchErrorComponent = {
    attr: 'branch';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateCategoryErrorComponent = {
    attr: 'category';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match';
    detail: string;
};
export type ComponentsLinksCreateCheckFlagsErrorComponent = {
    attr: 'check_flags';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateCommitMessageErrorComponent = {
    attr: 'commit_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateCommitPendingAgeErrorComponent = {
    attr: 'commit_pending_age';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsLinksCreateDeleteMessageErrorComponent = {
    attr: 'delete_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateDisableAutoshareErrorComponent = {
    attr: 'disable_autoshare';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreateDocfileErrorComponent = {
    attr: 'docfile';
    code: 'empty' | 'invalid' | 'no_name' | 'null';
    detail: string;
};
export type ComponentsLinksCreateEditTemplateErrorComponent = {
    attr: 'edit_template';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreateEnableSuggestionsErrorComponent = {
    attr: 'enable_suggestions';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreateEnforcedChecksErrorComponent = {
    attr: 'enforced_checks';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreateError = ({
    attr: 'non_field_errors';
} & ComponentsLinksCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ComponentsLinksCreateNameErrorComponent) | ({
    attr: 'slug';
} & ComponentsLinksCreateSlugErrorComponent) | ({
    attr: 'source_language.non_field_errors';
} & ComponentsLinksCreateSourceLanguageNonFieldErrorsErrorComponent) | ({
    attr: 'source_language.code';
} & ComponentsLinksCreateSourceLanguageCodeErrorComponent) | ({
    attr: 'source_language.name';
} & ComponentsLinksCreateSourceLanguageNameErrorComponent) | ({
    attr: 'source_language.plural.non_field_errors';
} & ComponentsLinksCreateSourceLanguagePluralNonFieldErrorsErrorComponent) | ({
    attr: 'source_language.plural.source';
} & ComponentsLinksCreateSourceLanguagePluralSourceErrorComponent) | ({
    attr: 'source_language.plural.number';
} & ComponentsLinksCreateSourceLanguagePluralNumberErrorComponent) | ({
    attr: 'source_language.plural.formula';
} & ComponentsLinksCreateSourceLanguagePluralFormulaErrorComponent) | ({
    attr: 'source_language.direction';
} & ComponentsLinksCreateSourceLanguageDirectionErrorComponent) | ({
    attr: 'source_language.population';
} & ComponentsLinksCreateSourceLanguagePopulationErrorComponent) | ({
    attr: 'vcs';
} & ComponentsLinksCreateVcsErrorComponent) | ({
    attr: 'repo';
} & ComponentsLinksCreateRepoErrorComponent) | ({
    attr: 'git_export';
} & ComponentsLinksCreateGitExportErrorComponent) | ({
    attr: 'branch';
} & ComponentsLinksCreateBranchErrorComponent) | ({
    attr: 'push_branch';
} & ComponentsLinksCreatePushBranchErrorComponent) | ({
    attr: 'filemask';
} & ComponentsLinksCreateFilemaskErrorComponent) | ({
    attr: 'screenshot_filemask';
} & ComponentsLinksCreateScreenshotFilemaskErrorComponent) | ({
    attr: 'template';
} & ComponentsLinksCreateTemplateErrorComponent) | ({
    attr: 'edit_template';
} & ComponentsLinksCreateEditTemplateErrorComponent) | ({
    attr: 'intermediate';
} & ComponentsLinksCreateIntermediateErrorComponent) | ({
    attr: 'new_base';
} & ComponentsLinksCreateNewBaseErrorComponent) | ({
    attr: 'file_format';
} & ComponentsLinksCreateFileFormatErrorComponent) | ({
    attr: 'license';
} & ComponentsLinksCreateLicenseErrorComponent) | ({
    attr: 'agreement';
} & ComponentsLinksCreateAgreementErrorComponent) | ({
    attr: 'new_lang';
} & ComponentsLinksCreateNewLangErrorComponent) | ({
    attr: 'language_code_style';
} & ComponentsLinksCreateLanguageCodeStyleErrorComponent) | ({
    attr: 'push';
} & ComponentsLinksCreatePushErrorComponent) | ({
    attr: 'check_flags';
} & ComponentsLinksCreateCheckFlagsErrorComponent) | ({
    attr: 'priority';
} & ComponentsLinksCreatePriorityErrorComponent) | ({
    attr: 'enforced_checks';
} & ComponentsLinksCreateEnforcedChecksErrorComponent) | ({
    attr: 'restricted';
} & ComponentsLinksCreateRestrictedErrorComponent) | ({
    attr: 'repoweb';
} & ComponentsLinksCreateRepowebErrorComponent) | ({
    attr: 'report_source_bugs';
} & ComponentsLinksCreateReportSourceBugsErrorComponent) | ({
    attr: 'merge_style';
} & ComponentsLinksCreateMergeStyleErrorComponent) | ({
    attr: 'commit_message';
} & ComponentsLinksCreateCommitMessageErrorComponent) | ({
    attr: 'add_message';
} & ComponentsLinksCreateAddMessageErrorComponent) | ({
    attr: 'delete_message';
} & ComponentsLinksCreateDeleteMessageErrorComponent) | ({
    attr: 'merge_message';
} & ComponentsLinksCreateMergeMessageErrorComponent) | ({
    attr: 'addon_message';
} & ComponentsLinksCreateAddonMessageErrorComponent) | ({
    attr: 'pull_message';
} & ComponentsLinksCreatePullMessageErrorComponent) | ({
    attr: 'allow_translation_propagation';
} & ComponentsLinksCreateAllowTranslationPropagationErrorComponent) | ({
    attr: 'manage_units';
} & ComponentsLinksCreateManageUnitsErrorComponent) | ({
    attr: 'enable_suggestions';
} & ComponentsLinksCreateEnableSuggestionsErrorComponent) | ({
    attr: 'suggestion_voting';
} & ComponentsLinksCreateSuggestionVotingErrorComponent) | ({
    attr: 'suggestion_autoaccept';
} & ComponentsLinksCreateSuggestionAutoacceptErrorComponent) | ({
    attr: 'push_on_commit';
} & ComponentsLinksCreatePushOnCommitErrorComponent) | ({
    attr: 'commit_pending_age';
} & ComponentsLinksCreateCommitPendingAgeErrorComponent) | ({
    attr: 'auto_lock_error';
} & ComponentsLinksCreateAutoLockErrorErrorComponent) | ({
    attr: 'language_regex';
} & ComponentsLinksCreateLanguageRegexErrorComponent) | ({
    attr: 'key_filter';
} & ComponentsLinksCreateKeyFilterErrorComponent) | ({
    attr: 'secondary_language';
} & ComponentsLinksCreateSecondaryLanguageErrorComponent) | ({
    attr: 'variant_regex';
} & ComponentsLinksCreateVariantRegexErrorComponent) | ({
    attr: 'zipfile';
} & ComponentsLinksCreateZipfileErrorComponent) | ({
    attr: 'docfile';
} & ComponentsLinksCreateDocfileErrorComponent) | ({
    attr: 'is_glossary';
} & ComponentsLinksCreateIsGlossaryErrorComponent) | ({
    attr: 'glossary_color';
} & ComponentsLinksCreateGlossaryColorErrorComponent) | ({
    attr: 'disable_autoshare';
} & ComponentsLinksCreateDisableAutoshareErrorComponent) | ({
    attr: 'category';
} & ComponentsLinksCreateCategoryErrorComponent);
export type ComponentsLinksCreateErrorResponse400 = ({
    type: 'validation_error';
} & ComponentsLinksCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ComponentsLinksCreateFileFormatErrorComponent = {
    attr: 'file_format';
    code: 'invalid_choice' | 'null' | 'required';
    detail: string;
};
export type ComponentsLinksCreateFilemaskErrorComponent = {
    attr: 'filemask';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateGitExportErrorComponent = {
    attr: 'git_export';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateGlossaryColorErrorComponent = {
    attr: 'glossary_color';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsLinksCreateIntermediateErrorComponent = {
    attr: 'intermediate';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateIsGlossaryErrorComponent = {
    attr: 'is_glossary';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreateKeyFilterErrorComponent = {
    attr: 'key_filter';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateLanguageCodeStyleErrorComponent = {
    attr: 'language_code_style';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsLinksCreateLanguageRegexErrorComponent = {
    attr: 'language_regex';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateLicenseErrorComponent = {
    attr: 'license';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsLinksCreateManageUnitsErrorComponent = {
    attr: 'manage_units';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreateMergeMessageErrorComponent = {
    attr: 'merge_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateMergeStyleErrorComponent = {
    attr: 'merge_style';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsLinksCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateNewBaseErrorComponent = {
    attr: 'new_base';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateNewLangErrorComponent = {
    attr: 'new_lang';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsLinksCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreatePriorityErrorComponent = {
    attr: 'priority';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsLinksCreatePullMessageErrorComponent = {
    attr: 'pull_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreatePushBranchErrorComponent = {
    attr: 'push_branch';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreatePushErrorComponent = {
    attr: 'push';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreatePushOnCommitErrorComponent = {
    attr: 'push_on_commit';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreateRepoErrorComponent = {
    attr: 'repo';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateReportSourceBugsErrorComponent = {
    attr: 'report_source_bugs';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateRepowebErrorComponent = {
    attr: 'repoweb';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateRestrictedErrorComponent = {
    attr: 'restricted';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreateScreenshotFilemaskErrorComponent = {
    attr: 'screenshot_filemask';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateSecondaryLanguageErrorComponent = {
    attr: 'secondary_language';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type ComponentsLinksCreateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateSourceLanguageCodeErrorComponent = {
    attr: 'source_language.code';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateSourceLanguageDirectionErrorComponent = {
    attr: 'source_language.direction';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsLinksCreateSourceLanguageNameErrorComponent = {
    attr: 'source_language.name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateSourceLanguageNonFieldErrorsErrorComponent = {
    attr: 'source_language.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreateSourceLanguagePluralFormulaErrorComponent = {
    attr: 'source_language.plural.formula';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateSourceLanguagePluralNonFieldErrorsErrorComponent = {
    attr: 'source_language.plural.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreateSourceLanguagePluralNumberErrorComponent = {
    attr: 'source_language.plural.number';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsLinksCreateSourceLanguagePluralSourceErrorComponent = {
    attr: 'source_language.plural.source';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsLinksCreateSourceLanguagePopulationErrorComponent = {
    attr: 'source_language.population';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsLinksCreateSuggestionAutoacceptErrorComponent = {
    attr: 'suggestion_autoaccept';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsLinksCreateSuggestionVotingErrorComponent = {
    attr: 'suggestion_voting';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLinksCreateTemplateErrorComponent = {
    attr: 'template';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ComponentsLinksCreateError>;
};
export type ComponentsLinksCreateVariantRegexErrorComponent = {
    attr: 'variant_regex';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsLinksCreateVcsErrorComponent = {
    attr: 'vcs';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsLinksCreateZipfileErrorComponent = {
    attr: 'zipfile';
    code: 'empty' | 'invalid' | 'no_name' | 'null';
    detail: string;
};
export type ComponentsLinksDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsLinksRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsListErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsLockCreateError = ({
    attr: 'non_field_errors';
} & ComponentsLockCreateNonFieldErrorsErrorComponent) | ({
    attr: 'lock';
} & ComponentsLockCreateLockErrorComponent);
export type ComponentsLockCreateErrorResponse400 = ({
    type: 'validation_error';
} & ComponentsLockCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ComponentsLockCreateLockErrorComponent = {
    attr: 'lock';
    code: 'invalid' | 'null' | 'required';
    detail: string;
};
export type ComponentsLockCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsLockCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ComponentsLockCreateError>;
};
export type ComponentsLockRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsMonolingualBaseRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsNewTemplateRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsPartialUpdateAddMessageErrorComponent = {
    attr: 'add_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateAddonMessageErrorComponent = {
    attr: 'addon_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateAgreementErrorComponent = {
    attr: 'agreement';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateAllowTranslationPropagationErrorComponent = {
    attr: 'allow_translation_propagation';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateAutoLockErrorErrorComponent = {
    attr: 'auto_lock_error';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateBranchErrorComponent = {
    attr: 'branch';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateCategoryErrorComponent = {
    attr: 'category';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match';
    detail: string;
};
export type ComponentsPartialUpdateCheckFlagsErrorComponent = {
    attr: 'check_flags';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateCommitMessageErrorComponent = {
    attr: 'commit_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateCommitPendingAgeErrorComponent = {
    attr: 'commit_pending_age';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateDeleteMessageErrorComponent = {
    attr: 'delete_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateDisableAutoshareErrorComponent = {
    attr: 'disable_autoshare';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateDocfileErrorComponent = {
    attr: 'docfile';
    code: 'empty' | 'invalid' | 'no_name' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateEditTemplateErrorComponent = {
    attr: 'edit_template';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateEnableSuggestionsErrorComponent = {
    attr: 'enable_suggestions';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateEnforcedChecksErrorComponent = {
    attr: 'enforced_checks';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateError = ({
    attr: 'non_field_errors';
} & ComponentsPartialUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ComponentsPartialUpdateNameErrorComponent) | ({
    attr: 'slug';
} & ComponentsPartialUpdateSlugErrorComponent) | ({
    attr: 'source_language.non_field_errors';
} & ComponentsPartialUpdateSourceLanguageNonFieldErrorsErrorComponent) | ({
    attr: 'source_language.code';
} & ComponentsPartialUpdateSourceLanguageCodeErrorComponent) | ({
    attr: 'source_language.name';
} & ComponentsPartialUpdateSourceLanguageNameErrorComponent) | ({
    attr: 'source_language.plural.non_field_errors';
} & ComponentsPartialUpdateSourceLanguagePluralNonFieldErrorsErrorComponent) | ({
    attr: 'source_language.plural.source';
} & ComponentsPartialUpdateSourceLanguagePluralSourceErrorComponent) | ({
    attr: 'source_language.plural.number';
} & ComponentsPartialUpdateSourceLanguagePluralNumberErrorComponent) | ({
    attr: 'source_language.plural.formula';
} & ComponentsPartialUpdateSourceLanguagePluralFormulaErrorComponent) | ({
    attr: 'source_language.direction';
} & ComponentsPartialUpdateSourceLanguageDirectionErrorComponent) | ({
    attr: 'source_language.population';
} & ComponentsPartialUpdateSourceLanguagePopulationErrorComponent) | ({
    attr: 'vcs';
} & ComponentsPartialUpdateVcsErrorComponent) | ({
    attr: 'repo';
} & ComponentsPartialUpdateRepoErrorComponent) | ({
    attr: 'git_export';
} & ComponentsPartialUpdateGitExportErrorComponent) | ({
    attr: 'branch';
} & ComponentsPartialUpdateBranchErrorComponent) | ({
    attr: 'push_branch';
} & ComponentsPartialUpdatePushBranchErrorComponent) | ({
    attr: 'filemask';
} & ComponentsPartialUpdateFilemaskErrorComponent) | ({
    attr: 'screenshot_filemask';
} & ComponentsPartialUpdateScreenshotFilemaskErrorComponent) | ({
    attr: 'template';
} & ComponentsPartialUpdateTemplateErrorComponent) | ({
    attr: 'edit_template';
} & ComponentsPartialUpdateEditTemplateErrorComponent) | ({
    attr: 'intermediate';
} & ComponentsPartialUpdateIntermediateErrorComponent) | ({
    attr: 'new_base';
} & ComponentsPartialUpdateNewBaseErrorComponent) | ({
    attr: 'file_format';
} & ComponentsPartialUpdateFileFormatErrorComponent) | ({
    attr: 'license';
} & ComponentsPartialUpdateLicenseErrorComponent) | ({
    attr: 'agreement';
} & ComponentsPartialUpdateAgreementErrorComponent) | ({
    attr: 'new_lang';
} & ComponentsPartialUpdateNewLangErrorComponent) | ({
    attr: 'language_code_style';
} & ComponentsPartialUpdateLanguageCodeStyleErrorComponent) | ({
    attr: 'push';
} & ComponentsPartialUpdatePushErrorComponent) | ({
    attr: 'check_flags';
} & ComponentsPartialUpdateCheckFlagsErrorComponent) | ({
    attr: 'priority';
} & ComponentsPartialUpdatePriorityErrorComponent) | ({
    attr: 'enforced_checks';
} & ComponentsPartialUpdateEnforcedChecksErrorComponent) | ({
    attr: 'restricted';
} & ComponentsPartialUpdateRestrictedErrorComponent) | ({
    attr: 'repoweb';
} & ComponentsPartialUpdateRepowebErrorComponent) | ({
    attr: 'report_source_bugs';
} & ComponentsPartialUpdateReportSourceBugsErrorComponent) | ({
    attr: 'merge_style';
} & ComponentsPartialUpdateMergeStyleErrorComponent) | ({
    attr: 'commit_message';
} & ComponentsPartialUpdateCommitMessageErrorComponent) | ({
    attr: 'add_message';
} & ComponentsPartialUpdateAddMessageErrorComponent) | ({
    attr: 'delete_message';
} & ComponentsPartialUpdateDeleteMessageErrorComponent) | ({
    attr: 'merge_message';
} & ComponentsPartialUpdateMergeMessageErrorComponent) | ({
    attr: 'addon_message';
} & ComponentsPartialUpdateAddonMessageErrorComponent) | ({
    attr: 'pull_message';
} & ComponentsPartialUpdatePullMessageErrorComponent) | ({
    attr: 'allow_translation_propagation';
} & ComponentsPartialUpdateAllowTranslationPropagationErrorComponent) | ({
    attr: 'manage_units';
} & ComponentsPartialUpdateManageUnitsErrorComponent) | ({
    attr: 'enable_suggestions';
} & ComponentsPartialUpdateEnableSuggestionsErrorComponent) | ({
    attr: 'suggestion_voting';
} & ComponentsPartialUpdateSuggestionVotingErrorComponent) | ({
    attr: 'suggestion_autoaccept';
} & ComponentsPartialUpdateSuggestionAutoacceptErrorComponent) | ({
    attr: 'push_on_commit';
} & ComponentsPartialUpdatePushOnCommitErrorComponent) | ({
    attr: 'commit_pending_age';
} & ComponentsPartialUpdateCommitPendingAgeErrorComponent) | ({
    attr: 'auto_lock_error';
} & ComponentsPartialUpdateAutoLockErrorErrorComponent) | ({
    attr: 'language_regex';
} & ComponentsPartialUpdateLanguageRegexErrorComponent) | ({
    attr: 'key_filter';
} & ComponentsPartialUpdateKeyFilterErrorComponent) | ({
    attr: 'secondary_language';
} & ComponentsPartialUpdateSecondaryLanguageErrorComponent) | ({
    attr: 'variant_regex';
} & ComponentsPartialUpdateVariantRegexErrorComponent) | ({
    attr: 'zipfile';
} & ComponentsPartialUpdateZipfileErrorComponent) | ({
    attr: 'docfile';
} & ComponentsPartialUpdateDocfileErrorComponent) | ({
    attr: 'is_glossary';
} & ComponentsPartialUpdateIsGlossaryErrorComponent) | ({
    attr: 'glossary_color';
} & ComponentsPartialUpdateGlossaryColorErrorComponent) | ({
    attr: 'disable_autoshare';
} & ComponentsPartialUpdateDisableAutoshareErrorComponent) | ({
    attr: 'category';
} & ComponentsPartialUpdateCategoryErrorComponent);
export type ComponentsPartialUpdateErrorResponse400 = ({
    type: 'validation_error';
} & ComponentsPartialUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ComponentsPartialUpdateFileFormatErrorComponent = {
    attr: 'file_format';
    code: 'invalid_choice' | 'null' | 'required';
    detail: string;
};
export type ComponentsPartialUpdateFilemaskErrorComponent = {
    attr: 'filemask';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateGitExportErrorComponent = {
    attr: 'git_export';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateGlossaryColorErrorComponent = {
    attr: 'glossary_color';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateIntermediateErrorComponent = {
    attr: 'intermediate';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateIsGlossaryErrorComponent = {
    attr: 'is_glossary';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateKeyFilterErrorComponent = {
    attr: 'key_filter';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateLanguageCodeStyleErrorComponent = {
    attr: 'language_code_style';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateLanguageRegexErrorComponent = {
    attr: 'language_regex';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateLicenseErrorComponent = {
    attr: 'license';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateManageUnitsErrorComponent = {
    attr: 'manage_units';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateMergeMessageErrorComponent = {
    attr: 'merge_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateMergeStyleErrorComponent = {
    attr: 'merge_style';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateNewBaseErrorComponent = {
    attr: 'new_base';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateNewLangErrorComponent = {
    attr: 'new_lang';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdatePriorityErrorComponent = {
    attr: 'priority';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsPartialUpdatePullMessageErrorComponent = {
    attr: 'pull_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdatePushBranchErrorComponent = {
    attr: 'push_branch';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdatePushErrorComponent = {
    attr: 'push';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdatePushOnCommitErrorComponent = {
    attr: 'push_on_commit';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateRepoErrorComponent = {
    attr: 'repo';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateReportSourceBugsErrorComponent = {
    attr: 'report_source_bugs';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateRepowebErrorComponent = {
    attr: 'repoweb';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateRestrictedErrorComponent = {
    attr: 'restricted';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateScreenshotFilemaskErrorComponent = {
    attr: 'screenshot_filemask';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateSecondaryLanguageErrorComponent = {
    attr: 'secondary_language';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type ComponentsPartialUpdateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateSourceLanguageCodeErrorComponent = {
    attr: 'source_language.code';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateSourceLanguageDirectionErrorComponent = {
    attr: 'source_language.direction';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateSourceLanguageNameErrorComponent = {
    attr: 'source_language.name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateSourceLanguageNonFieldErrorsErrorComponent = {
    attr: 'source_language.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateSourceLanguagePluralFormulaErrorComponent = {
    attr: 'source_language.plural.formula';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateSourceLanguagePluralNonFieldErrorsErrorComponent = {
    attr: 'source_language.plural.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateSourceLanguagePluralNumberErrorComponent = {
    attr: 'source_language.plural.number';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateSourceLanguagePluralSourceErrorComponent = {
    attr: 'source_language.plural.source';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateSourceLanguagePopulationErrorComponent = {
    attr: 'source_language.population';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateSuggestionAutoacceptErrorComponent = {
    attr: 'suggestion_autoaccept';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateSuggestionVotingErrorComponent = {
    attr: 'suggestion_voting';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateTemplateErrorComponent = {
    attr: 'template';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ComponentsPartialUpdateError>;
};
export type ComponentsPartialUpdateVariantRegexErrorComponent = {
    attr: 'variant_regex';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsPartialUpdateVcsErrorComponent = {
    attr: 'vcs';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsPartialUpdateZipfileErrorComponent = {
    attr: 'zipfile';
    code: 'empty' | 'invalid' | 'no_name' | 'null';
    detail: string;
};
export type ComponentsRepositoryCreateError = ({
    attr: 'non_field_errors';
} & ComponentsRepositoryCreateNonFieldErrorsErrorComponent) | ({
    attr: 'operation';
} & ComponentsRepositoryCreateOperationErrorComponent);
export type ComponentsRepositoryCreateErrorResponse400 = ({
    type: 'validation_error';
} & ComponentsRepositoryCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ComponentsRepositoryCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsRepositoryCreateOperationErrorComponent = {
    attr: 'operation';
    code: 'invalid_choice' | 'null' | 'required';
    detail: string;
};
export type ComponentsRepositoryCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ComponentsRepositoryCreateError>;
};
export type ComponentsRepositoryRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsScreenshotsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsStatisticsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsTranslationsCreateAddMessageErrorComponent = {
    attr: 'add_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateAddonMessageErrorComponent = {
    attr: 'addon_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateAgreementErrorComponent = {
    attr: 'agreement';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateAllowTranslationPropagationErrorComponent = {
    attr: 'allow_translation_propagation';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateAutoLockErrorErrorComponent = {
    attr: 'auto_lock_error';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateBranchErrorComponent = {
    attr: 'branch';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateCategoryErrorComponent = {
    attr: 'category';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match';
    detail: string;
};
export type ComponentsTranslationsCreateCheckFlagsErrorComponent = {
    attr: 'check_flags';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateCommitMessageErrorComponent = {
    attr: 'commit_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateCommitPendingAgeErrorComponent = {
    attr: 'commit_pending_age';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateDeleteMessageErrorComponent = {
    attr: 'delete_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateDisableAutoshareErrorComponent = {
    attr: 'disable_autoshare';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateDocfileErrorComponent = {
    attr: 'docfile';
    code: 'empty' | 'invalid' | 'no_name' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateEditTemplateErrorComponent = {
    attr: 'edit_template';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateEnableSuggestionsErrorComponent = {
    attr: 'enable_suggestions';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateEnforcedChecksErrorComponent = {
    attr: 'enforced_checks';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateError = ({
    attr: 'non_field_errors';
} & ComponentsTranslationsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ComponentsTranslationsCreateNameErrorComponent) | ({
    attr: 'slug';
} & ComponentsTranslationsCreateSlugErrorComponent) | ({
    attr: 'source_language.non_field_errors';
} & ComponentsTranslationsCreateSourceLanguageNonFieldErrorsErrorComponent) | ({
    attr: 'source_language.code';
} & ComponentsTranslationsCreateSourceLanguageCodeErrorComponent) | ({
    attr: 'source_language.name';
} & ComponentsTranslationsCreateSourceLanguageNameErrorComponent) | ({
    attr: 'source_language.plural.non_field_errors';
} & ComponentsTranslationsCreateSourceLanguagePluralNonFieldErrorsErrorComponent) | ({
    attr: 'source_language.plural.source';
} & ComponentsTranslationsCreateSourceLanguagePluralSourceErrorComponent) | ({
    attr: 'source_language.plural.number';
} & ComponentsTranslationsCreateSourceLanguagePluralNumberErrorComponent) | ({
    attr: 'source_language.plural.formula';
} & ComponentsTranslationsCreateSourceLanguagePluralFormulaErrorComponent) | ({
    attr: 'source_language.direction';
} & ComponentsTranslationsCreateSourceLanguageDirectionErrorComponent) | ({
    attr: 'source_language.population';
} & ComponentsTranslationsCreateSourceLanguagePopulationErrorComponent) | ({
    attr: 'vcs';
} & ComponentsTranslationsCreateVcsErrorComponent) | ({
    attr: 'repo';
} & ComponentsTranslationsCreateRepoErrorComponent) | ({
    attr: 'git_export';
} & ComponentsTranslationsCreateGitExportErrorComponent) | ({
    attr: 'branch';
} & ComponentsTranslationsCreateBranchErrorComponent) | ({
    attr: 'push_branch';
} & ComponentsTranslationsCreatePushBranchErrorComponent) | ({
    attr: 'filemask';
} & ComponentsTranslationsCreateFilemaskErrorComponent) | ({
    attr: 'screenshot_filemask';
} & ComponentsTranslationsCreateScreenshotFilemaskErrorComponent) | ({
    attr: 'template';
} & ComponentsTranslationsCreateTemplateErrorComponent) | ({
    attr: 'edit_template';
} & ComponentsTranslationsCreateEditTemplateErrorComponent) | ({
    attr: 'intermediate';
} & ComponentsTranslationsCreateIntermediateErrorComponent) | ({
    attr: 'new_base';
} & ComponentsTranslationsCreateNewBaseErrorComponent) | ({
    attr: 'file_format';
} & ComponentsTranslationsCreateFileFormatErrorComponent) | ({
    attr: 'license';
} & ComponentsTranslationsCreateLicenseErrorComponent) | ({
    attr: 'agreement';
} & ComponentsTranslationsCreateAgreementErrorComponent) | ({
    attr: 'new_lang';
} & ComponentsTranslationsCreateNewLangErrorComponent) | ({
    attr: 'language_code_style';
} & ComponentsTranslationsCreateLanguageCodeStyleErrorComponent) | ({
    attr: 'push';
} & ComponentsTranslationsCreatePushErrorComponent) | ({
    attr: 'check_flags';
} & ComponentsTranslationsCreateCheckFlagsErrorComponent) | ({
    attr: 'priority';
} & ComponentsTranslationsCreatePriorityErrorComponent) | ({
    attr: 'enforced_checks';
} & ComponentsTranslationsCreateEnforcedChecksErrorComponent) | ({
    attr: 'restricted';
} & ComponentsTranslationsCreateRestrictedErrorComponent) | ({
    attr: 'repoweb';
} & ComponentsTranslationsCreateRepowebErrorComponent) | ({
    attr: 'report_source_bugs';
} & ComponentsTranslationsCreateReportSourceBugsErrorComponent) | ({
    attr: 'merge_style';
} & ComponentsTranslationsCreateMergeStyleErrorComponent) | ({
    attr: 'commit_message';
} & ComponentsTranslationsCreateCommitMessageErrorComponent) | ({
    attr: 'add_message';
} & ComponentsTranslationsCreateAddMessageErrorComponent) | ({
    attr: 'delete_message';
} & ComponentsTranslationsCreateDeleteMessageErrorComponent) | ({
    attr: 'merge_message';
} & ComponentsTranslationsCreateMergeMessageErrorComponent) | ({
    attr: 'addon_message';
} & ComponentsTranslationsCreateAddonMessageErrorComponent) | ({
    attr: 'pull_message';
} & ComponentsTranslationsCreatePullMessageErrorComponent) | ({
    attr: 'allow_translation_propagation';
} & ComponentsTranslationsCreateAllowTranslationPropagationErrorComponent) | ({
    attr: 'manage_units';
} & ComponentsTranslationsCreateManageUnitsErrorComponent) | ({
    attr: 'enable_suggestions';
} & ComponentsTranslationsCreateEnableSuggestionsErrorComponent) | ({
    attr: 'suggestion_voting';
} & ComponentsTranslationsCreateSuggestionVotingErrorComponent) | ({
    attr: 'suggestion_autoaccept';
} & ComponentsTranslationsCreateSuggestionAutoacceptErrorComponent) | ({
    attr: 'push_on_commit';
} & ComponentsTranslationsCreatePushOnCommitErrorComponent) | ({
    attr: 'commit_pending_age';
} & ComponentsTranslationsCreateCommitPendingAgeErrorComponent) | ({
    attr: 'auto_lock_error';
} & ComponentsTranslationsCreateAutoLockErrorErrorComponent) | ({
    attr: 'language_regex';
} & ComponentsTranslationsCreateLanguageRegexErrorComponent) | ({
    attr: 'key_filter';
} & ComponentsTranslationsCreateKeyFilterErrorComponent) | ({
    attr: 'secondary_language';
} & ComponentsTranslationsCreateSecondaryLanguageErrorComponent) | ({
    attr: 'variant_regex';
} & ComponentsTranslationsCreateVariantRegexErrorComponent) | ({
    attr: 'zipfile';
} & ComponentsTranslationsCreateZipfileErrorComponent) | ({
    attr: 'docfile';
} & ComponentsTranslationsCreateDocfileErrorComponent) | ({
    attr: 'is_glossary';
} & ComponentsTranslationsCreateIsGlossaryErrorComponent) | ({
    attr: 'glossary_color';
} & ComponentsTranslationsCreateGlossaryColorErrorComponent) | ({
    attr: 'disable_autoshare';
} & ComponentsTranslationsCreateDisableAutoshareErrorComponent) | ({
    attr: 'category';
} & ComponentsTranslationsCreateCategoryErrorComponent);
export type ComponentsTranslationsCreateErrorResponse400 = ({
    type: 'validation_error';
} & ComponentsTranslationsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ComponentsTranslationsCreateFileFormatErrorComponent = {
    attr: 'file_format';
    code: 'invalid_choice' | 'null' | 'required';
    detail: string;
};
export type ComponentsTranslationsCreateFilemaskErrorComponent = {
    attr: 'filemask';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateGitExportErrorComponent = {
    attr: 'git_export';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateGlossaryColorErrorComponent = {
    attr: 'glossary_color';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateIntermediateErrorComponent = {
    attr: 'intermediate';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateIsGlossaryErrorComponent = {
    attr: 'is_glossary';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateKeyFilterErrorComponent = {
    attr: 'key_filter';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateLanguageCodeStyleErrorComponent = {
    attr: 'language_code_style';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateLanguageRegexErrorComponent = {
    attr: 'language_regex';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateLicenseErrorComponent = {
    attr: 'license';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateManageUnitsErrorComponent = {
    attr: 'manage_units';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateMergeMessageErrorComponent = {
    attr: 'merge_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateMergeStyleErrorComponent = {
    attr: 'merge_style';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateNewBaseErrorComponent = {
    attr: 'new_base';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateNewLangErrorComponent = {
    attr: 'new_lang';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreatePriorityErrorComponent = {
    attr: 'priority';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreatePullMessageErrorComponent = {
    attr: 'pull_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreatePushBranchErrorComponent = {
    attr: 'push_branch';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreatePushErrorComponent = {
    attr: 'push';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreatePushOnCommitErrorComponent = {
    attr: 'push_on_commit';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateRepoErrorComponent = {
    attr: 'repo';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateReportSourceBugsErrorComponent = {
    attr: 'report_source_bugs';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateRepowebErrorComponent = {
    attr: 'repoweb';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateRestrictedErrorComponent = {
    attr: 'restricted';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateScreenshotFilemaskErrorComponent = {
    attr: 'screenshot_filemask';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateSecondaryLanguageErrorComponent = {
    attr: 'secondary_language';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type ComponentsTranslationsCreateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateSourceLanguageCodeErrorComponent = {
    attr: 'source_language.code';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateSourceLanguageDirectionErrorComponent = {
    attr: 'source_language.direction';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateSourceLanguageNameErrorComponent = {
    attr: 'source_language.name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateSourceLanguageNonFieldErrorsErrorComponent = {
    attr: 'source_language.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateSourceLanguagePluralFormulaErrorComponent = {
    attr: 'source_language.plural.formula';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateSourceLanguagePluralNonFieldErrorsErrorComponent = {
    attr: 'source_language.plural.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateSourceLanguagePluralNumberErrorComponent = {
    attr: 'source_language.plural.number';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateSourceLanguagePluralSourceErrorComponent = {
    attr: 'source_language.plural.source';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateSourceLanguagePopulationErrorComponent = {
    attr: 'source_language.population';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateSuggestionAutoacceptErrorComponent = {
    attr: 'suggestion_autoaccept';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateSuggestionVotingErrorComponent = {
    attr: 'suggestion_voting';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateTemplateErrorComponent = {
    attr: 'template';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ComponentsTranslationsCreateError>;
};
export type ComponentsTranslationsCreateVariantRegexErrorComponent = {
    attr: 'variant_regex';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsTranslationsCreateVcsErrorComponent = {
    attr: 'vcs';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsTranslationsCreateZipfileErrorComponent = {
    attr: 'zipfile';
    code: 'empty' | 'invalid' | 'no_name' | 'null';
    detail: string;
};
export type ComponentsTranslationsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ComponentsUpdateAddMessageErrorComponent = {
    attr: 'add_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateAddonMessageErrorComponent = {
    attr: 'addon_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateAgreementErrorComponent = {
    attr: 'agreement';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateAllowTranslationPropagationErrorComponent = {
    attr: 'allow_translation_propagation';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdateAutoLockErrorErrorComponent = {
    attr: 'auto_lock_error';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdateBranchErrorComponent = {
    attr: 'branch';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateCategoryErrorComponent = {
    attr: 'category';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match';
    detail: string;
};
export type ComponentsUpdateCheckFlagsErrorComponent = {
    attr: 'check_flags';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateCommitMessageErrorComponent = {
    attr: 'commit_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateCommitPendingAgeErrorComponent = {
    attr: 'commit_pending_age';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsUpdateDeleteMessageErrorComponent = {
    attr: 'delete_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateDisableAutoshareErrorComponent = {
    attr: 'disable_autoshare';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdateDocfileErrorComponent = {
    attr: 'docfile';
    code: 'empty' | 'invalid' | 'no_name' | 'null';
    detail: string;
};
export type ComponentsUpdateEditTemplateErrorComponent = {
    attr: 'edit_template';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdateEnableSuggestionsErrorComponent = {
    attr: 'enable_suggestions';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdateEnforcedChecksErrorComponent = {
    attr: 'enforced_checks';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdateError = ({
    attr: 'non_field_errors';
} & ComponentsUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ComponentsUpdateNameErrorComponent) | ({
    attr: 'slug';
} & ComponentsUpdateSlugErrorComponent) | ({
    attr: 'source_language.non_field_errors';
} & ComponentsUpdateSourceLanguageNonFieldErrorsErrorComponent) | ({
    attr: 'source_language.code';
} & ComponentsUpdateSourceLanguageCodeErrorComponent) | ({
    attr: 'source_language.name';
} & ComponentsUpdateSourceLanguageNameErrorComponent) | ({
    attr: 'source_language.plural.non_field_errors';
} & ComponentsUpdateSourceLanguagePluralNonFieldErrorsErrorComponent) | ({
    attr: 'source_language.plural.source';
} & ComponentsUpdateSourceLanguagePluralSourceErrorComponent) | ({
    attr: 'source_language.plural.number';
} & ComponentsUpdateSourceLanguagePluralNumberErrorComponent) | ({
    attr: 'source_language.plural.formula';
} & ComponentsUpdateSourceLanguagePluralFormulaErrorComponent) | ({
    attr: 'source_language.direction';
} & ComponentsUpdateSourceLanguageDirectionErrorComponent) | ({
    attr: 'source_language.population';
} & ComponentsUpdateSourceLanguagePopulationErrorComponent) | ({
    attr: 'vcs';
} & ComponentsUpdateVcsErrorComponent) | ({
    attr: 'repo';
} & ComponentsUpdateRepoErrorComponent) | ({
    attr: 'git_export';
} & ComponentsUpdateGitExportErrorComponent) | ({
    attr: 'branch';
} & ComponentsUpdateBranchErrorComponent) | ({
    attr: 'push_branch';
} & ComponentsUpdatePushBranchErrorComponent) | ({
    attr: 'filemask';
} & ComponentsUpdateFilemaskErrorComponent) | ({
    attr: 'screenshot_filemask';
} & ComponentsUpdateScreenshotFilemaskErrorComponent) | ({
    attr: 'template';
} & ComponentsUpdateTemplateErrorComponent) | ({
    attr: 'edit_template';
} & ComponentsUpdateEditTemplateErrorComponent) | ({
    attr: 'intermediate';
} & ComponentsUpdateIntermediateErrorComponent) | ({
    attr: 'new_base';
} & ComponentsUpdateNewBaseErrorComponent) | ({
    attr: 'file_format';
} & ComponentsUpdateFileFormatErrorComponent) | ({
    attr: 'license';
} & ComponentsUpdateLicenseErrorComponent) | ({
    attr: 'agreement';
} & ComponentsUpdateAgreementErrorComponent) | ({
    attr: 'new_lang';
} & ComponentsUpdateNewLangErrorComponent) | ({
    attr: 'language_code_style';
} & ComponentsUpdateLanguageCodeStyleErrorComponent) | ({
    attr: 'push';
} & ComponentsUpdatePushErrorComponent) | ({
    attr: 'check_flags';
} & ComponentsUpdateCheckFlagsErrorComponent) | ({
    attr: 'priority';
} & ComponentsUpdatePriorityErrorComponent) | ({
    attr: 'enforced_checks';
} & ComponentsUpdateEnforcedChecksErrorComponent) | ({
    attr: 'restricted';
} & ComponentsUpdateRestrictedErrorComponent) | ({
    attr: 'repoweb';
} & ComponentsUpdateRepowebErrorComponent) | ({
    attr: 'report_source_bugs';
} & ComponentsUpdateReportSourceBugsErrorComponent) | ({
    attr: 'merge_style';
} & ComponentsUpdateMergeStyleErrorComponent) | ({
    attr: 'commit_message';
} & ComponentsUpdateCommitMessageErrorComponent) | ({
    attr: 'add_message';
} & ComponentsUpdateAddMessageErrorComponent) | ({
    attr: 'delete_message';
} & ComponentsUpdateDeleteMessageErrorComponent) | ({
    attr: 'merge_message';
} & ComponentsUpdateMergeMessageErrorComponent) | ({
    attr: 'addon_message';
} & ComponentsUpdateAddonMessageErrorComponent) | ({
    attr: 'pull_message';
} & ComponentsUpdatePullMessageErrorComponent) | ({
    attr: 'allow_translation_propagation';
} & ComponentsUpdateAllowTranslationPropagationErrorComponent) | ({
    attr: 'manage_units';
} & ComponentsUpdateManageUnitsErrorComponent) | ({
    attr: 'enable_suggestions';
} & ComponentsUpdateEnableSuggestionsErrorComponent) | ({
    attr: 'suggestion_voting';
} & ComponentsUpdateSuggestionVotingErrorComponent) | ({
    attr: 'suggestion_autoaccept';
} & ComponentsUpdateSuggestionAutoacceptErrorComponent) | ({
    attr: 'push_on_commit';
} & ComponentsUpdatePushOnCommitErrorComponent) | ({
    attr: 'commit_pending_age';
} & ComponentsUpdateCommitPendingAgeErrorComponent) | ({
    attr: 'auto_lock_error';
} & ComponentsUpdateAutoLockErrorErrorComponent) | ({
    attr: 'language_regex';
} & ComponentsUpdateLanguageRegexErrorComponent) | ({
    attr: 'key_filter';
} & ComponentsUpdateKeyFilterErrorComponent) | ({
    attr: 'secondary_language';
} & ComponentsUpdateSecondaryLanguageErrorComponent) | ({
    attr: 'variant_regex';
} & ComponentsUpdateVariantRegexErrorComponent) | ({
    attr: 'zipfile';
} & ComponentsUpdateZipfileErrorComponent) | ({
    attr: 'docfile';
} & ComponentsUpdateDocfileErrorComponent) | ({
    attr: 'is_glossary';
} & ComponentsUpdateIsGlossaryErrorComponent) | ({
    attr: 'glossary_color';
} & ComponentsUpdateGlossaryColorErrorComponent) | ({
    attr: 'disable_autoshare';
} & ComponentsUpdateDisableAutoshareErrorComponent) | ({
    attr: 'category';
} & ComponentsUpdateCategoryErrorComponent);
export type ComponentsUpdateErrorResponse400 = ({
    type: 'validation_error';
} & ComponentsUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ComponentsUpdateFileFormatErrorComponent = {
    attr: 'file_format';
    code: 'invalid_choice' | 'null' | 'required';
    detail: string;
};
export type ComponentsUpdateFilemaskErrorComponent = {
    attr: 'filemask';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateGitExportErrorComponent = {
    attr: 'git_export';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateGlossaryColorErrorComponent = {
    attr: 'glossary_color';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsUpdateIntermediateErrorComponent = {
    attr: 'intermediate';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateIsGlossaryErrorComponent = {
    attr: 'is_glossary';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdateKeyFilterErrorComponent = {
    attr: 'key_filter';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateLanguageCodeStyleErrorComponent = {
    attr: 'language_code_style';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsUpdateLanguageRegexErrorComponent = {
    attr: 'language_regex';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateLicenseErrorComponent = {
    attr: 'license';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsUpdateManageUnitsErrorComponent = {
    attr: 'manage_units';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdateMergeMessageErrorComponent = {
    attr: 'merge_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateMergeStyleErrorComponent = {
    attr: 'merge_style';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateNewBaseErrorComponent = {
    attr: 'new_base';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateNewLangErrorComponent = {
    attr: 'new_lang';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdatePriorityErrorComponent = {
    attr: 'priority';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsUpdatePullMessageErrorComponent = {
    attr: 'pull_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdatePushBranchErrorComponent = {
    attr: 'push_branch';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdatePushErrorComponent = {
    attr: 'push';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdatePushOnCommitErrorComponent = {
    attr: 'push_on_commit';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdateRepoErrorComponent = {
    attr: 'repo';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateReportSourceBugsErrorComponent = {
    attr: 'report_source_bugs';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateRepowebErrorComponent = {
    attr: 'repoweb';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateRestrictedErrorComponent = {
    attr: 'restricted';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdateScreenshotFilemaskErrorComponent = {
    attr: 'screenshot_filemask';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateSecondaryLanguageErrorComponent = {
    attr: 'secondary_language';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type ComponentsUpdateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateSourceLanguageCodeErrorComponent = {
    attr: 'source_language.code';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateSourceLanguageDirectionErrorComponent = {
    attr: 'source_language.direction';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsUpdateSourceLanguageNameErrorComponent = {
    attr: 'source_language.name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateSourceLanguageNonFieldErrorsErrorComponent = {
    attr: 'source_language.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdateSourceLanguagePluralFormulaErrorComponent = {
    attr: 'source_language.plural.formula';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateSourceLanguagePluralNonFieldErrorsErrorComponent = {
    attr: 'source_language.plural.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdateSourceLanguagePluralNumberErrorComponent = {
    attr: 'source_language.plural.number';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsUpdateSourceLanguagePluralSourceErrorComponent = {
    attr: 'source_language.plural.source';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsUpdateSourceLanguagePopulationErrorComponent = {
    attr: 'source_language.population';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsUpdateSuggestionAutoacceptErrorComponent = {
    attr: 'suggestion_autoaccept';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ComponentsUpdateSuggestionVotingErrorComponent = {
    attr: 'suggestion_voting';
    code: 'invalid' | 'null';
    detail: string;
};
export type ComponentsUpdateTemplateErrorComponent = {
    attr: 'template';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ComponentsUpdateError>;
};
export type ComponentsUpdateVariantRegexErrorComponent = {
    attr: 'variant_regex';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ComponentsUpdateVcsErrorComponent = {
    attr: 'vcs';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ComponentsUpdateZipfileErrorComponent = {
    attr: 'zipfile';
    code: 'empty' | 'invalid' | 'no_name' | 'null';
    detail: string;
};
export type ConflictsEnum = 'ignore' | 'replace-translated' | 'replace-approved';
export type DirectionEnum = 'ltr' | 'rtl';
export type Error401 = {
    code: ErrorCode401Enum;
    detail: string;
    attr: string | null;
};
export type Error403 = {
    code: ErrorCode403Enum;
    detail: string;
    attr: string | null;
};
export type Error404 = {
    code: ErrorCode404Enum;
    detail: string;
    attr: string | null;
};
export type Error405 = {
    code: ErrorCode405Enum;
    detail: string;
    attr: string | null;
};
export type Error406 = {
    code: ErrorCode406Enum;
    detail: string;
    attr: string | null;
};
export type Error415 = {
    code: ErrorCode415Enum;
    detail: string;
    attr: string | null;
};
export type Error423 = {
    code: ErrorCode423Enum;
    detail: string;
    attr: string | null;
};
export type Error429 = {
    code: ErrorCode429Enum;
    detail: string;
    attr: string | null;
};
export type Error500 = {
    code: ErrorCode500Enum;
    detail: string;
    attr: string | null;
};
export type ErrorCode401Enum = 'authentication_failed' | 'not_authenticated';
export type ErrorCode403Enum = 'permission_denied';
export type ErrorCode404Enum = 'not_found';
export type ErrorCode405Enum = 'method_not_allowed';
export type ErrorCode406Enum = 'not_acceptable';
export type ErrorCode415Enum = 'unsupported_media_type';
export type ErrorCode423Enum = 'repository-locked' | 'component-locked' | 'unknown-locked';
export type ErrorCode429Enum = 'throttled';
export type ErrorCode500Enum = 'error';
export type ErrorResponse401 = {
    type: ClientErrorEnum;
    errors: Array<Error401>;
};
export type ErrorResponse403 = {
    type: ClientErrorEnum;
    errors: Array<Error403>;
};
export type ErrorResponse404 = {
    type: ClientErrorEnum;
    errors: Array<Error404>;
};
export type ErrorResponse405 = {
    type: ClientErrorEnum;
    errors: Array<Error405>;
};
export type ErrorResponse406 = {
    type: ClientErrorEnum;
    errors: Array<Error406>;
};
export type ErrorResponse415 = {
    type: ClientErrorEnum;
    errors: Array<Error415>;
};
export type ErrorResponse423 = {
    type: ServerErrorEnum;
    errors: Array<Error423>;
};
export type ErrorResponse429 = {
    type: ClientErrorEnum;
    errors: Array<Error429>;
};
export type ErrorResponse500 = {
    type: ServerErrorEnum;
    errors: Array<Error500>;
};
export type FileFormatEnum = 'appstore' | 'arb' | 'aresource' | 'ass' | 'csv' | 'csv-multi-utf-8' | 'csv-simple' | 'csv-simple-iso' | 'csv-simple-utf-8' | 'csv-utf-8' | 'dokuwiki' | 'dtd' | 'flatxml' | 'fluent' | 'formatjs' | 'go-i18n-json' | 'go-i18n-json-v2' | 'gotext' | 'gwt' | 'gwt-iso' | 'html' | 'i18next' | 'i18nextv4' | 'idml' | 'ini' | 'islu' | 'joomla' | 'json' | 'json-nested' | 'laravel' | 'markdown' | 'mediawiki' | 'mi18n-lang' | 'moko-resource' | 'odf' | 'php' | 'plainxliff' | 'po' | 'po-mono' | 'poxliff' | 'properties' | 'properties-utf16' | 'properties-utf8' | 'rc' | 'resourcedictionary' | 'resx' | 'ruby-yaml' | 'srt' | 'ssa' | 'strings' | 'strings-utf8' | 'stringsdict' | 'sub' | 'tbx' | 'ts' | 'txt' | 'webextension' | 'xliff' | 'xlsx' | 'xwiki-fullpage' | 'xwiki-java-properties' | 'xwiki-page-properties' | 'yaml';
export type FrequencyEnum = 0 | 1 | 2 | 3 | 4;
export type FuzzyEnum = 'process' | 'approve';
export type Group = {
    readonly id: number;
    name: string;
    defining_project?: string;
    project_selection?: ProjectSelectionEnum;
    language_selection?: LanguageSelectionEnum;
    readonly url: string;
    readonly roles: Array<string>;
    readonly languages: Array<string>;
    readonly projects: Array<string>;
    readonly componentlists: Array<string>;
    readonly components: Array<string>;
    enforced_2fa?: boolean;
};
export type GroupsAdminsCreateDefiningProjectErrorComponent = {
    attr: 'defining_project';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null';
    detail: string;
};
export type GroupsAdminsCreateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsAdminsCreateError = ({
    attr: 'non_field_errors';
} & GroupsAdminsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & GroupsAdminsCreateNameErrorComponent) | ({
    attr: 'defining_project';
} & GroupsAdminsCreateDefiningProjectErrorComponent) | ({
    attr: 'project_selection';
} & GroupsAdminsCreateProjectSelectionErrorComponent) | ({
    attr: 'language_selection';
} & GroupsAdminsCreateLanguageSelectionErrorComponent) | ({
    attr: 'enforced_2fa';
} & GroupsAdminsCreateEnforced2FaErrorComponent);
export type GroupsAdminsCreateErrorResponse400 = ({
    type: 'validation_error';
} & GroupsAdminsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type GroupsAdminsCreateLanguageSelectionErrorComponent = {
    attr: 'language_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsAdminsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type GroupsAdminsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsAdminsCreateProjectSelectionErrorComponent = {
    attr: 'project_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsAdminsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<GroupsAdminsCreateError>;
};
export type GroupsAdminsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type GroupsComponentlistsCreateDefiningProjectErrorComponent = {
    attr: 'defining_project';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null';
    detail: string;
};
export type GroupsComponentlistsCreateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsComponentlistsCreateError = ({
    attr: 'non_field_errors';
} & GroupsComponentlistsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & GroupsComponentlistsCreateNameErrorComponent) | ({
    attr: 'defining_project';
} & GroupsComponentlistsCreateDefiningProjectErrorComponent) | ({
    attr: 'project_selection';
} & GroupsComponentlistsCreateProjectSelectionErrorComponent) | ({
    attr: 'language_selection';
} & GroupsComponentlistsCreateLanguageSelectionErrorComponent) | ({
    attr: 'enforced_2fa';
} & GroupsComponentlistsCreateEnforced2FaErrorComponent);
export type GroupsComponentlistsCreateErrorResponse400 = ({
    type: 'validation_error';
} & GroupsComponentlistsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type GroupsComponentlistsCreateLanguageSelectionErrorComponent = {
    attr: 'language_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsComponentlistsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type GroupsComponentlistsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsComponentlistsCreateProjectSelectionErrorComponent = {
    attr: 'project_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsComponentlistsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<GroupsComponentlistsCreateError>;
};
export type GroupsComponentlistsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type GroupsComponentsCreateDefiningProjectErrorComponent = {
    attr: 'defining_project';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null';
    detail: string;
};
export type GroupsComponentsCreateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsComponentsCreateError = ({
    attr: 'non_field_errors';
} & GroupsComponentsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & GroupsComponentsCreateNameErrorComponent) | ({
    attr: 'defining_project';
} & GroupsComponentsCreateDefiningProjectErrorComponent) | ({
    attr: 'project_selection';
} & GroupsComponentsCreateProjectSelectionErrorComponent) | ({
    attr: 'language_selection';
} & GroupsComponentsCreateLanguageSelectionErrorComponent) | ({
    attr: 'enforced_2fa';
} & GroupsComponentsCreateEnforced2FaErrorComponent);
export type GroupsComponentsCreateErrorResponse400 = ({
    type: 'validation_error';
} & GroupsComponentsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type GroupsComponentsCreateLanguageSelectionErrorComponent = {
    attr: 'language_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsComponentsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type GroupsComponentsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsComponentsCreateProjectSelectionErrorComponent = {
    attr: 'project_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsComponentsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<GroupsComponentsCreateError>;
};
export type GroupsComponentsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type GroupsCreateDefiningProjectErrorComponent = {
    attr: 'defining_project';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null';
    detail: string;
};
export type GroupsCreateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsCreateError = ({
    attr: 'non_field_errors';
} & GroupsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & GroupsCreateNameErrorComponent) | ({
    attr: 'defining_project';
} & GroupsCreateDefiningProjectErrorComponent) | ({
    attr: 'project_selection';
} & GroupsCreateProjectSelectionErrorComponent) | ({
    attr: 'language_selection';
} & GroupsCreateLanguageSelectionErrorComponent) | ({
    attr: 'enforced_2fa';
} & GroupsCreateEnforced2FaErrorComponent);
export type GroupsCreateErrorResponse400 = ({
    type: 'validation_error';
} & GroupsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type GroupsCreateLanguageSelectionErrorComponent = {
    attr: 'language_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type GroupsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsCreateProjectSelectionErrorComponent = {
    attr: 'project_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<GroupsCreateError>;
};
export type GroupsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type GroupsLanguagesCreateDefiningProjectErrorComponent = {
    attr: 'defining_project';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null';
    detail: string;
};
export type GroupsLanguagesCreateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsLanguagesCreateError = ({
    attr: 'non_field_errors';
} & GroupsLanguagesCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & GroupsLanguagesCreateNameErrorComponent) | ({
    attr: 'defining_project';
} & GroupsLanguagesCreateDefiningProjectErrorComponent) | ({
    attr: 'project_selection';
} & GroupsLanguagesCreateProjectSelectionErrorComponent) | ({
    attr: 'language_selection';
} & GroupsLanguagesCreateLanguageSelectionErrorComponent) | ({
    attr: 'enforced_2fa';
} & GroupsLanguagesCreateEnforced2FaErrorComponent);
export type GroupsLanguagesCreateErrorResponse400 = ({
    type: 'validation_error';
} & GroupsLanguagesCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type GroupsLanguagesCreateLanguageSelectionErrorComponent = {
    attr: 'language_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsLanguagesCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type GroupsLanguagesCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsLanguagesCreateProjectSelectionErrorComponent = {
    attr: 'project_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsLanguagesCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<GroupsLanguagesCreateError>;
};
export type GroupsLanguagesDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type GroupsListErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type GroupsPartialUpdateDefiningProjectErrorComponent = {
    attr: 'defining_project';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null';
    detail: string;
};
export type GroupsPartialUpdateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsPartialUpdateError = ({
    attr: 'non_field_errors';
} & GroupsPartialUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & GroupsPartialUpdateNameErrorComponent) | ({
    attr: 'defining_project';
} & GroupsPartialUpdateDefiningProjectErrorComponent) | ({
    attr: 'project_selection';
} & GroupsPartialUpdateProjectSelectionErrorComponent) | ({
    attr: 'language_selection';
} & GroupsPartialUpdateLanguageSelectionErrorComponent) | ({
    attr: 'enforced_2fa';
} & GroupsPartialUpdateEnforced2FaErrorComponent);
export type GroupsPartialUpdateErrorResponse400 = ({
    type: 'validation_error';
} & GroupsPartialUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type GroupsPartialUpdateLanguageSelectionErrorComponent = {
    attr: 'language_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsPartialUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type GroupsPartialUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsPartialUpdateProjectSelectionErrorComponent = {
    attr: 'project_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsPartialUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<GroupsPartialUpdateError>;
};
export type GroupsProjectsCreateDefiningProjectErrorComponent = {
    attr: 'defining_project';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null';
    detail: string;
};
export type GroupsProjectsCreateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsProjectsCreateError = ({
    attr: 'non_field_errors';
} & GroupsProjectsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & GroupsProjectsCreateNameErrorComponent) | ({
    attr: 'defining_project';
} & GroupsProjectsCreateDefiningProjectErrorComponent) | ({
    attr: 'project_selection';
} & GroupsProjectsCreateProjectSelectionErrorComponent) | ({
    attr: 'language_selection';
} & GroupsProjectsCreateLanguageSelectionErrorComponent) | ({
    attr: 'enforced_2fa';
} & GroupsProjectsCreateEnforced2FaErrorComponent);
export type GroupsProjectsCreateErrorResponse400 = ({
    type: 'validation_error';
} & GroupsProjectsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type GroupsProjectsCreateLanguageSelectionErrorComponent = {
    attr: 'language_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsProjectsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type GroupsProjectsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsProjectsCreateProjectSelectionErrorComponent = {
    attr: 'project_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsProjectsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<GroupsProjectsCreateError>;
};
export type GroupsProjectsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type GroupsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type GroupsRolesCreateDefiningProjectErrorComponent = {
    attr: 'defining_project';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null';
    detail: string;
};
export type GroupsRolesCreateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsRolesCreateError = ({
    attr: 'non_field_errors';
} & GroupsRolesCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & GroupsRolesCreateNameErrorComponent) | ({
    attr: 'defining_project';
} & GroupsRolesCreateDefiningProjectErrorComponent) | ({
    attr: 'project_selection';
} & GroupsRolesCreateProjectSelectionErrorComponent) | ({
    attr: 'language_selection';
} & GroupsRolesCreateLanguageSelectionErrorComponent) | ({
    attr: 'enforced_2fa';
} & GroupsRolesCreateEnforced2FaErrorComponent);
export type GroupsRolesCreateErrorResponse400 = ({
    type: 'validation_error';
} & GroupsRolesCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type GroupsRolesCreateLanguageSelectionErrorComponent = {
    attr: 'language_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsRolesCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type GroupsRolesCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsRolesCreateProjectSelectionErrorComponent = {
    attr: 'project_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsRolesCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<GroupsRolesCreateError>;
};
export type GroupsRolesDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type GroupsUpdateDefiningProjectErrorComponent = {
    attr: 'defining_project';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match' | 'null';
    detail: string;
};
export type GroupsUpdateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsUpdateError = ({
    attr: 'non_field_errors';
} & GroupsUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & GroupsUpdateNameErrorComponent) | ({
    attr: 'defining_project';
} & GroupsUpdateDefiningProjectErrorComponent) | ({
    attr: 'project_selection';
} & GroupsUpdateProjectSelectionErrorComponent) | ({
    attr: 'language_selection';
} & GroupsUpdateLanguageSelectionErrorComponent) | ({
    attr: 'enforced_2fa';
} & GroupsUpdateEnforced2FaErrorComponent);
export type GroupsUpdateErrorResponse400 = ({
    type: 'validation_error';
} & GroupsUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type GroupsUpdateLanguageSelectionErrorComponent = {
    attr: 'language_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type GroupsUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type GroupsUpdateProjectSelectionErrorComponent = {
    attr: 'project_selection';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type GroupsUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<GroupsUpdateError>;
};
export type Language = {
    readonly id: number;
    code: string;
    name?: string;
    plural?: LanguagePlural;
    readonly aliases: Array<unknown>;
    direction?: DirectionEnum | BlankEnum;
    population?: number;
    readonly web_url: string;
    readonly url: string;
    readonly statistics_url: string;
};
export type LanguageCodeStyleEnum = 'posix' | 'posix_lowercase' | 'bcp' | 'posix_long' | 'posix_long_lowercase' | 'bcp_long' | 'bcp_legacy' | 'bcp_lower' | 'android' | 'appstore' | 'googleplay' | 'linux' | 'linux_lowercase';
export type LanguagePlural = {
    readonly id: number;
    source?: SourceEnum;
    number?: number;
    formula?: string;
    readonly type: number;
};
export type LanguageSelectionEnum = 0 | 1;
export type LanguagesCreateCodeErrorComponent = {
    attr: 'code';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type LanguagesCreateDirectionErrorComponent = {
    attr: 'direction';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type LanguagesCreateError = ({
    attr: 'non_field_errors';
} & LanguagesCreateNonFieldErrorsErrorComponent) | ({
    attr: 'code';
} & LanguagesCreateCodeErrorComponent) | ({
    attr: 'name';
} & LanguagesCreateNameErrorComponent) | ({
    attr: 'plural.non_field_errors';
} & LanguagesCreatePluralNonFieldErrorsErrorComponent) | ({
    attr: 'plural.source';
} & LanguagesCreatePluralSourceErrorComponent) | ({
    attr: 'plural.number';
} & LanguagesCreatePluralNumberErrorComponent) | ({
    attr: 'plural.formula';
} & LanguagesCreatePluralFormulaErrorComponent) | ({
    attr: 'direction';
} & LanguagesCreateDirectionErrorComponent) | ({
    attr: 'population';
} & LanguagesCreatePopulationErrorComponent);
export type LanguagesCreateErrorResponse400 = ({
    type: 'validation_error';
} & LanguagesCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type LanguagesCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type LanguagesCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type LanguagesCreatePluralFormulaErrorComponent = {
    attr: 'plural.formula';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type LanguagesCreatePluralNonFieldErrorsErrorComponent = {
    attr: 'plural.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type LanguagesCreatePluralNumberErrorComponent = {
    attr: 'plural.number';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type LanguagesCreatePluralSourceErrorComponent = {
    attr: 'plural.source';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type LanguagesCreatePopulationErrorComponent = {
    attr: 'population';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type LanguagesCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<LanguagesCreateError>;
};
export type LanguagesDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type LanguagesListErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type LanguagesPartialUpdateCodeErrorComponent = {
    attr: 'code';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type LanguagesPartialUpdateDirectionErrorComponent = {
    attr: 'direction';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type LanguagesPartialUpdateError = ({
    attr: 'non_field_errors';
} & LanguagesPartialUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'code';
} & LanguagesPartialUpdateCodeErrorComponent) | ({
    attr: 'name';
} & LanguagesPartialUpdateNameErrorComponent) | ({
    attr: 'plural.non_field_errors';
} & LanguagesPartialUpdatePluralNonFieldErrorsErrorComponent) | ({
    attr: 'plural.source';
} & LanguagesPartialUpdatePluralSourceErrorComponent) | ({
    attr: 'plural.number';
} & LanguagesPartialUpdatePluralNumberErrorComponent) | ({
    attr: 'plural.formula';
} & LanguagesPartialUpdatePluralFormulaErrorComponent) | ({
    attr: 'direction';
} & LanguagesPartialUpdateDirectionErrorComponent) | ({
    attr: 'population';
} & LanguagesPartialUpdatePopulationErrorComponent);
export type LanguagesPartialUpdateErrorResponse400 = ({
    type: 'validation_error';
} & LanguagesPartialUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type LanguagesPartialUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type LanguagesPartialUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type LanguagesPartialUpdatePluralFormulaErrorComponent = {
    attr: 'plural.formula';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type LanguagesPartialUpdatePluralNonFieldErrorsErrorComponent = {
    attr: 'plural.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type LanguagesPartialUpdatePluralNumberErrorComponent = {
    attr: 'plural.number';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type LanguagesPartialUpdatePluralSourceErrorComponent = {
    attr: 'plural.source';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type LanguagesPartialUpdatePopulationErrorComponent = {
    attr: 'population';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type LanguagesPartialUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<LanguagesPartialUpdateError>;
};
export type LanguagesRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type LanguagesStatisticsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type LanguagesUpdateCodeErrorComponent = {
    attr: 'code';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type LanguagesUpdateDirectionErrorComponent = {
    attr: 'direction';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type LanguagesUpdateError = ({
    attr: 'non_field_errors';
} & LanguagesUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'code';
} & LanguagesUpdateCodeErrorComponent) | ({
    attr: 'name';
} & LanguagesUpdateNameErrorComponent) | ({
    attr: 'plural.non_field_errors';
} & LanguagesUpdatePluralNonFieldErrorsErrorComponent) | ({
    attr: 'plural.source';
} & LanguagesUpdatePluralSourceErrorComponent) | ({
    attr: 'plural.number';
} & LanguagesUpdatePluralNumberErrorComponent) | ({
    attr: 'plural.formula';
} & LanguagesUpdatePluralFormulaErrorComponent) | ({
    attr: 'direction';
} & LanguagesUpdateDirectionErrorComponent) | ({
    attr: 'population';
} & LanguagesUpdatePopulationErrorComponent);
export type LanguagesUpdateErrorResponse400 = ({
    type: 'validation_error';
} & LanguagesUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type LanguagesUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type LanguagesUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type LanguagesUpdatePluralFormulaErrorComponent = {
    attr: 'plural.formula';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type LanguagesUpdatePluralNonFieldErrorsErrorComponent = {
    attr: 'plural.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type LanguagesUpdatePluralNumberErrorComponent = {
    attr: 'plural.number';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type LanguagesUpdatePluralSourceErrorComponent = {
    attr: 'plural.source';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type LanguagesUpdatePopulationErrorComponent = {
    attr: 'population';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type LanguagesUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<LanguagesUpdateError>;
};
export type LicenseEnum = 'proprietary' | '3D-Slicer-1.0' | 'Glide' | 'Abstyles' | 'AFL-1.1' | 'AFL-1.2' | 'AFL-2.0' | 'AFL-2.1' | 'AFL-3.0' | 'AMPAS' | 'AdaCore-doc' | 'APL-1.0' | 'Adobe-Display-PostScript' | 'Adobe-Glyph' | 'APAFML' | 'Adobe-2006' | 'Adobe-Utopia' | 'AGPL-1.0-only' | 'AGPL-1.0-or-later' | 'Afmparse' | 'Aladdin' | 'ADSL' | 'AMD-newlib' | 'AMDPLPA' | 'AML-glslang' | 'ANTLR-PD' | 'ANTLR-PD-fallback' | 'any-OSI' | 'any-OSI-perl-modules' | 'Apache-1.0' | 'Apache-1.1' | 'Apache-2.0' | 'App-s2p' | 'AML' | 'APSL-1.0' | 'APSL-1.1' | 'APSL-1.2' | 'APSL-2.0' | 'Arphic-1999' | 'Artistic-1.0' | 'Artistic-1.0-Perl' | 'Artistic-1.0-cl8' | 'Artistic-2.0' | 'ASWF-Digital-Assets-1.1' | 'ASWF-Digital-Assets-1.0' | 'AAL' | 'Baekmuk' | 'Bahyph' | 'Barr' | 'bcrypt-Solar-Designer' | 'Beerware' | 'Bitstream-Charter' | 'Bitstream-Vera' | 'BitTorrent-1.0' | 'BitTorrent-1.1' | 'BlueOak-1.0.0' | 'Boehm-GC' | 'Boehm-GC-without-fee' | 'BSL-1.0' | 'Borceux' | 'Brian-Gladman-2-Clause' | 'Brian-Gladman-3-Clause' | 'BSD-1-Clause' | 'BSD-2-Clause' | 'BSD-2-Clause-first-lines' | 'BSD-2-Clause-Darwin' | 'BSD-2-Clause-pkgconf-disclaimer' | 'BSD-2-Clause-Views' | 'BSD-3-Clause' | 'BSD-3-Clause-acpica' | 'BSD-3-Clause-Clear' | 'BSD-3-Clause-flex' | 'BSD-3-Clause-Modification' | 'BSD-3-Clause-No-Military-License' | 'BSD-3-Clause-No-Nuclear-License' | 'BSD-3-Clause-No-Nuclear-License-2014' | 'BSD-3-Clause-No-Nuclear-Warranty' | 'BSD-3-Clause-Open-MPI' | 'BSD-3-Clause-Sun' | 'BSD-4-Clause-Shortened' | 'BSD-4-Clause' | 'BSD-4.3RENO' | 'BSD-4.3TAHOE' | 'BSD-Advertising-Acknowledgement' | 'BSD-Protection' | 'BSD-Source-Code' | 'BSD-Source-beginning-file' | 'BSD-3-Clause-Attribution' | 'BSD-Attribution-HPND-disclaimer' | '0BSD' | 'BSD-2-Clause-Patent' | 'BSD-4-Clause-UC' | 'BSD-Inferno-Nettverk' | 'BUSL-1.1' | 'bzip2-1.0.6' | 'Caldera' | 'Caldera-no-preamble' | 'Catharon' | 'CECILL-1.0' | 'CECILL-1.1' | 'CECILL-2.0' | 'CECILL-2.1' | 'CECILL-B' | 'CECILL-C' | 'CERN-OHL-1.1' | 'CERN-OHL-1.2' | 'CERN-OHL-P-2.0' | 'CERN-OHL-S-2.0' | 'CERN-OHL-W-2.0' | 'CFITSIO' | 'check-cvs' | 'checkmk' | 'ClArtistic' | 'Clips' | 'CMU-Mach-nodoc' | 'MIT-CMU' | 'CMU-Mach' | 'CNRI-Jython' | 'CNRI-Python' | 'CNRI-Python-GPL-Compatible' | 'CPOL-1.02' | 'CDDL-1.0' | 'CDDL-1.1' | 'CDL-1.0' | 'LOOP' | 'CPAL-1.0' | 'CPL-1.0' | 'cve-tou' | 'CDLA-Permissive-1.0' | 'CDLA-Permissive-2.0' | 'CDLA-Sharing-1.0' | 'Community-Spec-1.0' | 'C-UDA-1.0' | 'CATOSL-1.1' | 'Condor-1.1' | 'COIL-1.0' | 'copyleft-next-0.3.0' | 'copyleft-next-0.3.1' | 'Cornell-Lossless-JPEG' | 'CC-PDM-1.0' | 'CC-BY-1.0' | 'CC-BY-2.0' | 'CC-BY-2.5-AU' | 'CC-BY-2.5' | 'CC-BY-3.0-AU' | 'CC-BY-3.0-AT' | 'CC-BY-3.0-DE' | 'CC-BY-3.0-IGO' | 'CC-BY-3.0-NL' | 'CC-BY-3.0-US' | 'CC-BY-3.0' | 'CC-BY-4.0' | 'CC-BY-ND-1.0' | 'CC-BY-ND-2.0' | 'CC-BY-ND-2.5' | 'CC-BY-ND-3.0-DE' | 'CC-BY-ND-3.0' | 'CC-BY-ND-4.0' | 'CC-BY-NC-1.0' | 'CC-BY-NC-2.0' | 'CC-BY-NC-2.5' | 'CC-BY-NC-3.0-DE' | 'CC-BY-NC-3.0' | 'CC-BY-NC-4.0' | 'CC-BY-NC-ND-1.0' | 'CC-BY-NC-ND-2.0' | 'CC-BY-NC-ND-2.5' | 'CC-BY-NC-ND-3.0-DE' | 'CC-BY-NC-ND-3.0-IGO' | 'CC-BY-NC-ND-3.0' | 'CC-BY-NC-ND-4.0' | 'CC-BY-NC-SA-1.0' | 'CC-BY-NC-SA-2.0-UK' | 'CC-BY-NC-SA-2.0' | 'CC-BY-NC-SA-2.0-DE' | 'CC-BY-NC-SA-2.5' | 'CC-BY-NC-SA-3.0-DE' | 'CC-BY-NC-SA-3.0-IGO' | 'CC-BY-NC-SA-3.0' | 'CC-BY-NC-SA-4.0' | 'CC-BY-SA-1.0' | 'CC-BY-SA-2.0-UK' | 'CC-BY-SA-2.0' | 'CC-BY-SA-2.1-JP' | 'CC-BY-SA-2.5' | 'CC-BY-SA-3.0-AT' | 'CC-BY-SA-3.0-DE' | 'CC-BY-SA-3.0' | 'CC-BY-SA-4.0' | 'CC-BY-NC-SA-2.0-FR' | 'CC-BY-SA-3.0-IGO' | 'CC-PDDC' | 'CC-SA-1.0' | 'CC0-1.0' | 'Cronyx' | 'Crossword' | 'CAL-1.0' | 'CAL-1.0-Combined-Work-Exception' | 'CryptoSwift' | 'CrystalStacker' | 'CUA-OPL-1.0' | 'Cube' | 'curl' | 'DL-DE-BY-2.0' | 'DL-DE-ZERO-2.0' | 'dtoa' | 'DEC-3-Clause' | 'DRL-1.0' | 'DRL-1.1' | 'D-FSL-1.0' | 'diffmark' | 'WTFPL' | 'DOC' | 'DocBook-DTD' | 'DocBook-Schema' | 'DocBook-Stylesheet' | 'DocBook-XML' | 'Dotseqn' | 'DSDP' | 'dvipdfm' | 'EPL-1.0' | 'EPL-2.0' | 'ECL-1.0' | 'ECL-2.0' | 'eGenix' | 'EFL-1.0' | 'EFL-2.0' | 'Elastic-2.0' | 'MIT-advertising' | 'MIT-enna' | 'Entessa' | 'EPICS' | 'ErlPL-1.1' | 'etalab-2.0' | 'EUDatagrid' | 'EUPL-1.0' | 'EUPL-1.1' | 'EUPL-1.2' | 'Eurosym' | 'Fair' | 'MIT-feh' | 'Ferguson-Twofish' | 'Frameworx-1.0' | 'FDK-AAC' | 'FreeBSD-DOC' | 'FreeImage' | 'FTL' | 'FSFAP' | 'FSFAP-no-warranty-disclaimer' | 'FSFUL' | 'FSFULLRWD' | 'FSFULLR' | 'FSL-1.1-ALv2' | 'FSL-1.1-MIT' | 'Furuseth' | 'FBM' | 'fwlw' | 'Game-Programming-Gems' | 'GD' | 'generic-xts' | 'Giftware' | 'GL2PS' | 'Glulxe' | 'GCR-docs' | 'AGPL-3.0-only' | 'AGPL-3.0-or-later' | 'GFDL-1.1-only' | 'GFDL-1.1-invariants-only' | 'GFDL-1.1-no-invariants-only' | 'GFDL-1.1-or-later' | 'GFDL-1.1-invariants-or-later' | 'GFDL-1.1-no-invariants-or-later' | 'GFDL-1.2-only' | 'GFDL-1.2-invariants-only' | 'GFDL-1.2-no-invariants-only' | 'GFDL-1.2-or-later' | 'GFDL-1.2-invariants-or-later' | 'GFDL-1.2-no-invariants-or-later' | 'GFDL-1.3-only' | 'GFDL-1.3-invariants-only' | 'GFDL-1.3-no-invariants-only' | 'GFDL-1.3-or-later' | 'GFDL-1.3-invariants-or-later' | 'GFDL-1.3-no-invariants-or-later' | 'GPL-1.0-only' | 'GPL-1.0-or-later' | 'GPL-2.0-only' | 'GPL-2.0-or-later' | 'GPL-3.0-only' | 'GPL-3.0-or-later' | 'LGPL-2.1-only' | 'LGPL-2.1-or-later' | 'LGPL-3.0-only' | 'LGPL-3.0-or-later' | 'LGPL-2.0-only' | 'LGPL-2.0-or-later' | 'gnuplot' | 'GLWTPL' | 'Graphics-Gems' | 'gSOAP-1.3b' | 'gtkbook' | 'Gutmann' | 'HaskellReport' | 'hdparm' | 'HP-1986' | 'HP-1989' | 'BSD-3-Clause-HP' | 'HIDAPI' | 'Hippocratic-2.1' | 'HPND' | 'HPND-INRIA-IMAG' | 'HPND-DEC' | 'HPND-doc-sell' | 'HPND-doc' | 'HPND-Fenneberg-Livingston' | 'HPND-Intel' | 'HPND-Kevlin-Henney' | 'HPND-Markus-Kuhn' | 'HPND-merchantability-variant' | 'HPND-Netrek' | 'HPND-Pbmplus' | 'HPND-sell-regexpr' | 'HPND-sell-variant' | 'HPND-sell-MIT-disclaimer-xserver' | 'HPND-UC' | 'HPND-UC-export-US' | 'HPND-MIT-disclaimer' | 'HPND-sell-variant-MIT-disclaimer' | 'HPND-sell-variant-MIT-disclaimer-rev' | 'HPND-export2-US' | 'HPND-export-US' | 'HPND-export-US-acknowledgement' | 'HPND-export-US-modify' | 'HTMLTIDY' | 'IBM-pibs' | 'IPL-1.0' | 'ICU' | 'IEC-Code-Components-EULA' | 'ImageMagick' | 'iMatix' | 'Imlib2' | 'IJG' | 'IJG-short' | 'Info-ZIP' | 'Inner-Net-2.0' | 'InnoSetup' | 'Intel-ACPI' | 'Intel' | 'Interbase-1.0' | 'IPA' | 'ISC' | 'ISC-Veillard' | 'Jam' | 'JPNIC' | 'JasPer-2.0' | 'JPL-image' | 'JSON' | 'Kastrup' | 'Kazlib' | 'Knuth-CTAN' | 'LPPL-1.0' | 'LPPL-1.1' | 'LPPL-1.2' | 'LPPL-1.3a' | 'LPPL-1.3c' | 'Latex2e' | 'Latex2e-translated-notice' | 'BSD-3-Clause-LBNL' | 'Leptonica' | 'LGPLLR' | 'Libpng' | 'libselinux-1.0' | 'libtiff' | 'libutil-David-Nugent' | 'LAL-1.2' | 'LAL-1.3' | 'LiLiQ-P-1.1' | 'LiLiQ-Rplus-1.1' | 'LiLiQ-R-1.1' | 'Linux-OpenIB' | 'Linux-man-pages-1-para' | 'Linux-man-pages-copyleft' | 'Linux-man-pages-copyleft-2-para' | 'Linux-man-pages-copyleft-var' | 'LPD-document' | 'lsof' | 'LPL-1.02' | 'LPL-1.0' | 'Lucida-Bitmap-Fonts' | 'LZMA-SDK-9.11-to-9.20' | 'LZMA-SDK-9.22' | 'Mackerras-3-Clause-acknowledgment' | 'Mackerras-3-Clause' | 'magaz' | 'mailprio' | 'MakeIndex' | 'man2html' | 'Martin-Birgmeier' | 'MTLL' | 'McPhee-slideshow' | 'metamail' | 'UMich-Merit' | 'MS-LPL' | 'MS-PL' | 'MS-RL' | 'Minpack' | 'MIPS' | 'MITNFA' | 'MIT-Click' | 'MIT-Festival' | 'MIT-Khronos-old' | 'MIT' | 'MIT-Modern-Variant' | 'MIT-0' | 'MIT-open-group' | 'MIT-testregex' | 'MIT-Wu' | 'MMIXware' | 'Motosoto' | 'MPL-1.0' | 'MPL-1.1' | 'MPL-2.0' | 'MPL-2.0-no-copyleft-exception' | 'MPEG-SSG' | 'mpi-permissive' | 'mpich2' | 'mplus' | 'MulanPSL-1.0' | 'MulanPSL-2.0' | 'Multics' | 'Mup' | 'NAIST-2003' | 'NASA-1.3' | 'Naumen' | 'NCBI-PD' | 'NCL' | 'NBPL-1.0' | 'NetCDF' | 'NGPL' | 'NOSL' | 'NPL-1.0' | 'NPL-1.1' | 'Newsletr' | 'NICTA-1.0' | 'NIST-PD' | 'NIST-PD-fallback' | 'NIST-Software' | 'NLPL' | 'Nokia' | 'NCGL-UK-2.0' | 'NPOSL-3.0' | 'NLOD-1.0' | 'NLOD-2.0' | 'Noweb' | 'NRL' | 'NTIA-PD' | 'NTP' | 'NTP-0' | 'OAR' | 'OCLC-2.0' | 'OFFIS' | 'OGC-1.0' | 'OCCT-PL' | 'ODC-By-1.0' | 'ODbL-1.0' | 'PDDL-1.0' | 'OGL-Canada-2.0' | 'OGL-UK-1.0' | 'OGL-UK-2.0' | 'OGL-UK-3.0' | 'OGTSL' | 'OLDAP-2.2.2' | 'OLDAP-1.1' | 'OLDAP-1.2' | 'OLDAP-1.3' | 'OLDAP-1.4' | 'OLDAP-2.0' | 'OLDAP-2.0.1' | 'OLDAP-2.1' | 'OLDAP-2.2' | 'OLDAP-2.2.1' | 'OLDAP-2.3' | 'OLDAP-2.4' | 'OLDAP-2.5' | 'OLDAP-2.6' | 'OLDAP-2.7' | 'OLDAP-2.8' | 'OLFL-1.3' | 'OML' | 'OPL-1.0' | 'OPUBL-1.0' | 'OSL-1.0' | 'OSL-1.1' | 'OSL-2.0' | 'OSL-2.1' | 'OSL-3.0' | 'O-UDA-1.0' | 'OpenPBS-2.3' | 'OpenSSL' | 'OpenSSL-standalone' | 'OpenVision' | 'OSET-PL-2.1' | 'PADL' | 'PPL' | 'PHP-3.0' | 'PHP-3.01' | 'Pixar' | 'pkgconf' | 'Plexus' | 'libpng-2.0' | 'pnmstitch' | 'PolyForm-Noncommercial-1.0.0' | 'PolyForm-Small-Business-1.0.0' | 'PostgreSQL' | 'psfrag' | 'psutils' | 'python-ldap' | 'Python-2.0' | 'Python-2.0.1' | 'PSF-2.0' | 'QPL-1.0' | 'QPL-1.0-INRIA-2004' | 'Qhull' | 'radvd' | 'Rdisc' | 'RPSL-1.0' | 'RPL-1.1' | 'RPL-1.5' | 'RHeCos-1.1' | 'RSCPL' | 'RSA-MD' | 'Ruby' | 'Ruby-pty' | 'SAX-PD' | 'SAX-PD-2.0' | 'Saxpath' | 'SCEA' | 'SchemeReport' | 'SWL' | 'SMPPL' | 'Sendmail' | 'Sendmail-8.23' | 'Sendmail-Open-Source-1.1' | 'SSPL-1.0' | 'SGI-B-1.0' | 'SGI-B-1.1' | 'SGI-B-2.0' | 'SGI-OpenGL' | 'SGP4' | 'OFL-1.0' | 'OFL-1.0-no-RFN' | 'OFL-1.0-RFN' | 'OFL-1.1' | 'OFL-1.1-no-RFN' | 'OFL-1.1-RFN' | 'SimPL-2.0' | 'SL' | 'Sleepycat' | 'SMAIL-GPL' | 'SNIA' | 'snprintf' | 'softSurfer' | 'SHL-0.5' | 'SHL-0.51' | 'Soundex' | 'Spencer-86' | 'Spencer-94' | 'Spencer-99' | 'blessing' | 'SSH-OpenSSH' | 'SSH-short' | 'ssh-keyscan' | 'SSLeay-standalone' | 'SMLNJ' | 'SugarCRM-1.1.3' | 'SISSL' | 'SISSL-1.2' | 'Sun-PPP' | 'Sun-PPP-2000' | 'SPL-1.0' | 'SunPro' | 'swrule' | 'Watcom-1.0' | 'Symlinks' | 'BSD-Systemics' | 'BSD-Systemics-W3Works' | 'OGDL-Taiwan-1.0' | 'TAPR-OHL-1.0' | 'TCL' | 'TCP-wrappers' | 'TU-Berlin-1.0' | 'TU-Berlin-2.0' | 'TermReadKey' | 'TTWL' | 'MirOS' | 'Parity-6.0.0' | 'Parity-7.0.0' | 'Unlicense' | 'ThirdEye' | 'TPL-1.0' | 'threeparttable' | 'TPDL' | 'TMate' | 'TORQUE-1.1' | 'TGPPL-1.0' | 'TOSL' | 'TrustedQSL' | 'TTYP0' | 'Ubuntu-font-1.0' | 'UCAR' | 'ulem' | 'Unicode-DFS-2015' | 'Unicode-DFS-2016' | 'Unicode-3.0' | 'Unicode-TOU' | 'OPL-UK-3.0' | 'UPL-1.0' | 'NCSA' | 'UnixCrypt' | 'UCL-1.0' | 'URT-RLE' | 'Vim' | 'VOSTROM' | 'VSL-1.0' | 'W3C-20150513' | 'W3C-19980720' | 'W3C' | 'w3m' | 'Widget-Workshop' | 'Wsuipa' | 'wwl' | 'Xnet' | 'X11' | 'X11-distribute-modifications-variant' | 'X11-swapped' | 'Xdebug-1.03' | 'Xerox' | 'Xfig' | 'XFree86-1.1' | 'xinetd' | 'xkeyboard-config-Zinoviev' | 'xlock' | 'xpp' | 'XSkat' | 'xzoom' | 'YPL-1.0' | 'YPL-1.1' | 'Zed' | 'Zeeff' | 'Zend-2.0' | 'Zimbra-1.3' | 'Zimbra-1.4' | 'Zlib' | 'zlib-acknowledgement' | 'ZPL-1.1' | 'ZPL-2.0' | 'ZPL-2.1';
export type LockRequest = {
    lock: boolean;
};
export type Memory = {
    readonly id: number;
    source: string;
    target: string;
    source_language: number;
    target_language: number;
    origin: string;
    project?: number | null;
    from_file?: boolean;
    shared?: boolean;
};
export type MemoryCreateError = ({
    attr: 'non_field_errors';
} & MemoryCreateNonFieldErrorsErrorComponent) | ({
    attr: 'source';
} & MemoryCreateSourceErrorComponent) | ({
    attr: 'target';
} & MemoryCreateTargetErrorComponent) | ({
    attr: 'source_language';
} & MemoryCreateSourceLanguageErrorComponent) | ({
    attr: 'target_language';
} & MemoryCreateTargetLanguageErrorComponent) | ({
    attr: 'origin';
} & MemoryCreateOriginErrorComponent) | ({
    attr: 'project';
} & MemoryCreateProjectErrorComponent) | ({
    attr: 'from_file';
} & MemoryCreateFromFileErrorComponent) | ({
    attr: 'shared';
} & MemoryCreateSharedErrorComponent);
export type MemoryCreateErrorResponse400 = ({
    type: 'validation_error';
} & MemoryCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type MemoryCreateFromFileErrorComponent = {
    attr: 'from_file';
    code: 'invalid' | 'null';
    detail: string;
};
export type MemoryCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type MemoryCreateOriginErrorComponent = {
    attr: 'origin';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type MemoryCreateProjectErrorComponent = {
    attr: 'project';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type MemoryCreateSharedErrorComponent = {
    attr: 'shared';
    code: 'invalid' | 'null';
    detail: string;
};
export type MemoryCreateSourceErrorComponent = {
    attr: 'source';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type MemoryCreateSourceLanguageErrorComponent = {
    attr: 'source_language';
    code: 'does_not_exist' | 'incorrect_type' | 'null' | 'required';
    detail: string;
};
export type MemoryCreateTargetErrorComponent = {
    attr: 'target';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type MemoryCreateTargetLanguageErrorComponent = {
    attr: 'target_language';
    code: 'does_not_exist' | 'incorrect_type' | 'null' | 'required';
    detail: string;
};
export type MemoryCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<MemoryCreateError>;
};
export type MemoryDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type MemoryListErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type MemoryPartialUpdateError = ({
    attr: 'non_field_errors';
} & MemoryPartialUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'source';
} & MemoryPartialUpdateSourceErrorComponent) | ({
    attr: 'target';
} & MemoryPartialUpdateTargetErrorComponent) | ({
    attr: 'source_language';
} & MemoryPartialUpdateSourceLanguageErrorComponent) | ({
    attr: 'target_language';
} & MemoryPartialUpdateTargetLanguageErrorComponent) | ({
    attr: 'origin';
} & MemoryPartialUpdateOriginErrorComponent) | ({
    attr: 'project';
} & MemoryPartialUpdateProjectErrorComponent) | ({
    attr: 'from_file';
} & MemoryPartialUpdateFromFileErrorComponent) | ({
    attr: 'shared';
} & MemoryPartialUpdateSharedErrorComponent);
export type MemoryPartialUpdateErrorResponse400 = ({
    type: 'validation_error';
} & MemoryPartialUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type MemoryPartialUpdateFromFileErrorComponent = {
    attr: 'from_file';
    code: 'invalid' | 'null';
    detail: string;
};
export type MemoryPartialUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type MemoryPartialUpdateOriginErrorComponent = {
    attr: 'origin';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type MemoryPartialUpdateProjectErrorComponent = {
    attr: 'project';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type MemoryPartialUpdateSharedErrorComponent = {
    attr: 'shared';
    code: 'invalid' | 'null';
    detail: string;
};
export type MemoryPartialUpdateSourceErrorComponent = {
    attr: 'source';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type MemoryPartialUpdateSourceLanguageErrorComponent = {
    attr: 'source_language';
    code: 'does_not_exist' | 'incorrect_type' | 'null' | 'required';
    detail: string;
};
export type MemoryPartialUpdateTargetErrorComponent = {
    attr: 'target';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type MemoryPartialUpdateTargetLanguageErrorComponent = {
    attr: 'target_language';
    code: 'does_not_exist' | 'incorrect_type' | 'null' | 'required';
    detail: string;
};
export type MemoryPartialUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<MemoryPartialUpdateError>;
};
export type MemoryRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type MemoryUpdateError = ({
    attr: 'non_field_errors';
} & MemoryUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'source';
} & MemoryUpdateSourceErrorComponent) | ({
    attr: 'target';
} & MemoryUpdateTargetErrorComponent) | ({
    attr: 'source_language';
} & MemoryUpdateSourceLanguageErrorComponent) | ({
    attr: 'target_language';
} & MemoryUpdateTargetLanguageErrorComponent) | ({
    attr: 'origin';
} & MemoryUpdateOriginErrorComponent) | ({
    attr: 'project';
} & MemoryUpdateProjectErrorComponent) | ({
    attr: 'from_file';
} & MemoryUpdateFromFileErrorComponent) | ({
    attr: 'shared';
} & MemoryUpdateSharedErrorComponent);
export type MemoryUpdateErrorResponse400 = ({
    type: 'validation_error';
} & MemoryUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type MemoryUpdateFromFileErrorComponent = {
    attr: 'from_file';
    code: 'invalid' | 'null';
    detail: string;
};
export type MemoryUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type MemoryUpdateOriginErrorComponent = {
    attr: 'origin';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type MemoryUpdateProjectErrorComponent = {
    attr: 'project';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type MemoryUpdateSharedErrorComponent = {
    attr: 'shared';
    code: 'invalid' | 'null';
    detail: string;
};
export type MemoryUpdateSourceErrorComponent = {
    attr: 'source';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type MemoryUpdateSourceLanguageErrorComponent = {
    attr: 'source_language';
    code: 'does_not_exist' | 'incorrect_type' | 'null' | 'required';
    detail: string;
};
export type MemoryUpdateTargetErrorComponent = {
    attr: 'target';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type MemoryUpdateTargetLanguageErrorComponent = {
    attr: 'target_language';
    code: 'does_not_exist' | 'incorrect_type' | 'null' | 'required';
    detail: string;
};
export type MemoryUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<MemoryUpdateError>;
};
export type MergeStyleEnum = 'merge' | 'rebase' | 'merge_noff';
export type MethodEnum = 'translate' | 'approve' | 'suggest' | 'fuzzy' | 'replace' | 'source' | 'add';
export type Metrics = {
    units: number;
    units_translated: number;
    users: number;
    changes: number;
    projects: number;
    components: number;
    translations: number;
    languages: number;
    checks: number;
    configuration_errors: number;
    suggestions: number;
    celery_queues: {
        [key: string]: number;
    };
    name: string;
};
export type MetricsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type NewLangEnum = 'contact' | 'url' | 'add' | 'none';
export type Notification = {
    notification: NotificationEnum;
    readonly id: number;
    scope: ScopeEnum;
    frequency: FrequencyEnum;
    project: Project;
    component: Component;
};
export type NotificationEnum = 'RepositoryNotification' | 'LockNotification' | 'LicenseNotification' | 'ParseErrorNotification' | 'NewStringNotificaton' | 'NewContributorNotificaton' | 'NewSuggestionNotificaton' | 'LanguageTranslatedNotificaton' | 'ComponentTranslatedNotificaton' | 'NewCommentNotificaton' | 'MentionCommentNotificaton' | 'LastAuthorCommentNotificaton' | 'TranslatedStringNotificaton' | 'ApprovedStringNotificaton' | 'ChangedStringNotificaton' | 'NewTranslationNotificaton' | 'NewComponentNotificaton' | 'NewAnnouncementNotificaton' | 'NewAlertNotificaton' | 'MergeFailureNotification' | 'PendingSuggestionsNotification' | 'ToDoStringsNotification';
export type OperationEnum = 'commit' | 'pull' | 'push' | 'reset' | 'cleanup';
export type PaginatedAddonList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<Addon>;
};
export type PaginatedBasicUserList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<BasicUser>;
};
export type PaginatedCategoryList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<Category>;
};
export type PaginatedChangeList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<Change>;
};
export type PaginatedComponentList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<Component>;
};
export type PaginatedComponentListList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<ComponentList>;
};
export type PaginatedGroupList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<Group>;
};
export type PaginatedLanguageList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<Language>;
};
export type PaginatedMemoryList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<Memory>;
};
export type PaginatedNotificationList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<Notification>;
};
export type PaginatedProjectList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<Project>;
};
export type PaginatedRoleList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<Role>;
};
export type PaginatedScreenshotList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<Screenshot>;
};
export type PaginatedTranslationList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<Translation>;
};
export type PaginatedUnitList = {
    count: number;
    next?: string;
    previous?: string;
    results: Array<Unit>;
};
export type ParseError = {
    code: ParseErrorCodeEnum;
    detail: string;
    attr: string | null;
};
export type ParseErrorCodeEnum = 'parse_error';
export type ParseErrorResponse = {
    type: ClientErrorEnum;
    errors: Array<ParseError>;
};
export type PatchedAddon = {
    readonly component?: string;
    readonly project?: string;
    name?: string;
    readonly id?: number;
    configuration?: unknown;
    readonly url?: string;
};
export type PatchedBasicUser = {
    readonly id?: number;
    full_name?: string;
    username?: string;
};
export type PatchedCategory = {
    readonly id?: number;
    name?: string;
    slug?: string;
    project?: string;
    category?: string;
    readonly url?: string;
    readonly statistics_url?: string;
};
export type PatchedComponent = {
    name?: string;
    slug?: string;
    readonly id?: number;
    source_language?: Language;
    project?: Project;
    vcs?: VcsEnum;
    repo?: string;
    git_export?: string;
    branch?: string;
    push_branch?: string;
    filemask?: string;
    screenshot_filemask?: string;
    template?: string;
    edit_template?: boolean;
    intermediate?: string;
    new_base?: string;
    file_format?: FileFormatEnum;
    license?: LicenseEnum | BlankEnum;
    readonly license_url?: string;
    agreement?: string;
    readonly web_url?: string;
    readonly url?: string;
    readonly repository_url?: string;
    readonly translations_url?: string;
    readonly statistics_url?: string;
    readonly lock_url?: string;
    readonly links_url?: string;
    readonly changes_list_url?: string;
    readonly task_url?: string | null;
    readonly credits_url?: string;
    new_lang?: NewLangEnum;
    language_code_style?: LanguageCodeStyleEnum | BlankEnum;
    push?: string;
    check_flags?: string;
    priority?: PriorityEnum;
    enforced_checks?: unknown;
    restricted?: boolean;
    repoweb?: string;
    report_source_bugs?: string;
    merge_style?: MergeStyleEnum;
    commit_message?: string;
    add_message?: string;
    delete_message?: string;
    merge_message?: string;
    addon_message?: string;
    pull_message?: string;
    allow_translation_propagation?: boolean;
    manage_units?: boolean;
    enable_suggestions?: boolean;
    suggestion_voting?: boolean;
    suggestion_autoaccept?: number;
    push_on_commit?: boolean;
    commit_pending_age?: number;
    auto_lock_error?: boolean;
    language_regex?: string;
    key_filter?: string;
    secondary_language?: number | null;
    variant_regex?: string;
    zipfile?: string;
    docfile?: string;
    readonly addons?: Array<string>;
    is_glossary?: boolean;
    glossary_color?: ColorEnum;
    disable_autoshare?: boolean;
    category?: string | null;
    readonly linked_component?: string;
    readonly locked?: boolean;
};
export type PatchedComponentList = {
    name?: string;
    slug?: string;
    readonly id?: number;
    show_dashboard?: boolean;
    readonly components?: Array<string>;
    readonly auto_assign?: Array<AutoComponentList>;
    readonly url?: string;
};
export type PatchedGroup = {
    readonly id?: number;
    name?: string;
    defining_project?: string;
    project_selection?: ProjectSelectionEnum;
    language_selection?: LanguageSelectionEnum;
    readonly url?: string;
    readonly roles?: Array<string>;
    readonly languages?: Array<string>;
    readonly projects?: Array<string>;
    readonly componentlists?: Array<string>;
    readonly components?: Array<string>;
    enforced_2fa?: boolean;
};
export type PatchedLanguage = {
    readonly id?: number;
    code?: string;
    name?: string;
    plural?: LanguagePlural;
    readonly aliases?: Array<unknown>;
    direction?: DirectionEnum | BlankEnum;
    population?: number;
    readonly web_url?: string;
    readonly url?: string;
    readonly statistics_url?: string;
};
export type PatchedMemory = {
    readonly id?: number;
    source?: string;
    target?: string;
    source_language?: number;
    target_language?: number;
    origin?: string;
    project?: number | null;
    from_file?: boolean;
    shared?: boolean;
};
export type PatchedNotification = {
    notification?: NotificationEnum;
    readonly id?: number;
    scope?: ScopeEnum;
    frequency?: FrequencyEnum;
    project?: Project;
    component?: Component;
};
export type PatchedProject = {
    name?: string;
    slug?: string;
    readonly id?: number;
    web?: string;
    readonly web_url?: string;
    readonly url?: string;
    check_flags?: string;
    readonly components_list_url?: string;
    readonly repository_url?: string;
    readonly statistics_url?: string;
    readonly categories_url?: string;
    readonly changes_list_url?: string;
    readonly languages_url?: string;
    readonly labels_url?: string;
    readonly credits_url?: string;
    translation_review?: boolean;
    source_review?: boolean;
    set_language_team?: boolean;
    instructions?: string;
    enable_hooks?: boolean;
    language_aliases?: string;
    secondary_language?: number | null;
    enforced_2fa?: boolean;
    readonly machinery_settings?: string;
};
export type PatchedRole = {
    readonly id?: number;
    name?: string;
    permissions?: Array<string>;
    readonly url?: string;
};
export type PatchedScreenshot = {
    readonly id?: number;
    name?: string;
    repository_filename?: string;
    readonly translation?: string;
    readonly file_url?: string;
    readonly units?: Array<string>;
    readonly url?: string;
};
export type PatchedSingleServiceConfig = {
    service?: string;
    configuration?: {
        [key: string]: unknown;
    };
};
export type PatchedUnitWrite = {
    target?: Array<string>;
    state?: StateEnum;
    explanation?: string;
    extra_flags?: string;
    labels?: Array<UnitFlatLabels>;
};
export type PriorityEnum = 60 | 80 | 100 | 120 | 140;
export type Project = {
    name: string;
    slug: string;
    readonly id: number;
    web: string;
    readonly web_url: string;
    readonly url: string;
    check_flags?: string;
    readonly components_list_url: string;
    readonly repository_url: string;
    readonly statistics_url: string;
    readonly categories_url: string;
    readonly changes_list_url: string;
    readonly languages_url: string;
    readonly labels_url: string;
    readonly credits_url: string;
    translation_review?: boolean;
    source_review?: boolean;
    set_language_team?: boolean;
    instructions?: string;
    enable_hooks?: boolean;
    language_aliases?: string;
    secondary_language?: number | null;
    enforced_2fa?: boolean;
    readonly machinery_settings: string;
};
export type ProjectMachinerySettings = {
    service_name?: {
        [key: string]: unknown;
    };
};
export type ProjectSelectionEnum = 0 | 1 | 3 | 4 | 2;
export type ProjectsAddonsCreateCheckFlagsErrorComponent = {
    attr: 'check_flags';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsAddonsCreateEnableHooksErrorComponent = {
    attr: 'enable_hooks';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsAddonsCreateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsAddonsCreateError = ({
    attr: 'non_field_errors';
} & ProjectsAddonsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ProjectsAddonsCreateNameErrorComponent) | ({
    attr: 'slug';
} & ProjectsAddonsCreateSlugErrorComponent) | ({
    attr: 'web';
} & ProjectsAddonsCreateWebErrorComponent) | ({
    attr: 'check_flags';
} & ProjectsAddonsCreateCheckFlagsErrorComponent) | ({
    attr: 'translation_review';
} & ProjectsAddonsCreateTranslationReviewErrorComponent) | ({
    attr: 'source_review';
} & ProjectsAddonsCreateSourceReviewErrorComponent) | ({
    attr: 'set_language_team';
} & ProjectsAddonsCreateSetLanguageTeamErrorComponent) | ({
    attr: 'instructions';
} & ProjectsAddonsCreateInstructionsErrorComponent) | ({
    attr: 'enable_hooks';
} & ProjectsAddonsCreateEnableHooksErrorComponent) | ({
    attr: 'language_aliases';
} & ProjectsAddonsCreateLanguageAliasesErrorComponent) | ({
    attr: 'secondary_language';
} & ProjectsAddonsCreateSecondaryLanguageErrorComponent) | ({
    attr: 'enforced_2fa';
} & ProjectsAddonsCreateEnforced2FaErrorComponent);
export type ProjectsAddonsCreateErrorResponse400 = ({
    type: 'validation_error';
} & ProjectsAddonsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ProjectsAddonsCreateInstructionsErrorComponent = {
    attr: 'instructions';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsAddonsCreateLanguageAliasesErrorComponent = {
    attr: 'language_aliases';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsAddonsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ProjectsAddonsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsAddonsCreateSecondaryLanguageErrorComponent = {
    attr: 'secondary_language';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type ProjectsAddonsCreateSetLanguageTeamErrorComponent = {
    attr: 'set_language_team';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsAddonsCreateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ProjectsAddonsCreateSourceReviewErrorComponent = {
    attr: 'source_review';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsAddonsCreateTranslationReviewErrorComponent = {
    attr: 'translation_review';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsAddonsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ProjectsAddonsCreateError>;
};
export type ProjectsAddonsCreateWebErrorComponent = {
    attr: 'web';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsCategoriesRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ProjectsChangesRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ProjectsComponentsCreateAddMessageErrorComponent = {
    attr: 'add_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateAddonMessageErrorComponent = {
    attr: 'addon_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateAgreementErrorComponent = {
    attr: 'agreement';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateAllowTranslationPropagationErrorComponent = {
    attr: 'allow_translation_propagation';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateAutoLockErrorErrorComponent = {
    attr: 'auto_lock_error';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateBranchErrorComponent = {
    attr: 'branch';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateCategoryErrorComponent = {
    attr: 'category';
    code: 'does_not_exist' | 'incorrect_match' | 'incorrect_type' | 'no_match';
    detail: string;
};
export type ProjectsComponentsCreateCheckFlagsErrorComponent = {
    attr: 'check_flags';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateCommitMessageErrorComponent = {
    attr: 'commit_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateCommitPendingAgeErrorComponent = {
    attr: 'commit_pending_age';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateDeleteMessageErrorComponent = {
    attr: 'delete_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateDisableAutoshareErrorComponent = {
    attr: 'disable_autoshare';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateDocfileErrorComponent = {
    attr: 'docfile';
    code: 'empty' | 'invalid' | 'no_name' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateEditTemplateErrorComponent = {
    attr: 'edit_template';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateEnableSuggestionsErrorComponent = {
    attr: 'enable_suggestions';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateEnforcedChecksErrorComponent = {
    attr: 'enforced_checks';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateError = ({
    attr: 'non_field_errors';
} & ProjectsComponentsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ProjectsComponentsCreateNameErrorComponent) | ({
    attr: 'slug';
} & ProjectsComponentsCreateSlugErrorComponent) | ({
    attr: 'source_language.non_field_errors';
} & ProjectsComponentsCreateSourceLanguageNonFieldErrorsErrorComponent) | ({
    attr: 'source_language.code';
} & ProjectsComponentsCreateSourceLanguageCodeErrorComponent) | ({
    attr: 'source_language.name';
} & ProjectsComponentsCreateSourceLanguageNameErrorComponent) | ({
    attr: 'source_language.plural.non_field_errors';
} & ProjectsComponentsCreateSourceLanguagePluralNonFieldErrorsErrorComponent) | ({
    attr: 'source_language.plural.source';
} & ProjectsComponentsCreateSourceLanguagePluralSourceErrorComponent) | ({
    attr: 'source_language.plural.number';
} & ProjectsComponentsCreateSourceLanguagePluralNumberErrorComponent) | ({
    attr: 'source_language.plural.formula';
} & ProjectsComponentsCreateSourceLanguagePluralFormulaErrorComponent) | ({
    attr: 'source_language.direction';
} & ProjectsComponentsCreateSourceLanguageDirectionErrorComponent) | ({
    attr: 'source_language.population';
} & ProjectsComponentsCreateSourceLanguagePopulationErrorComponent) | ({
    attr: 'vcs';
} & ProjectsComponentsCreateVcsErrorComponent) | ({
    attr: 'repo';
} & ProjectsComponentsCreateRepoErrorComponent) | ({
    attr: 'git_export';
} & ProjectsComponentsCreateGitExportErrorComponent) | ({
    attr: 'branch';
} & ProjectsComponentsCreateBranchErrorComponent) | ({
    attr: 'push_branch';
} & ProjectsComponentsCreatePushBranchErrorComponent) | ({
    attr: 'filemask';
} & ProjectsComponentsCreateFilemaskErrorComponent) | ({
    attr: 'screenshot_filemask';
} & ProjectsComponentsCreateScreenshotFilemaskErrorComponent) | ({
    attr: 'template';
} & ProjectsComponentsCreateTemplateErrorComponent) | ({
    attr: 'edit_template';
} & ProjectsComponentsCreateEditTemplateErrorComponent) | ({
    attr: 'intermediate';
} & ProjectsComponentsCreateIntermediateErrorComponent) | ({
    attr: 'new_base';
} & ProjectsComponentsCreateNewBaseErrorComponent) | ({
    attr: 'file_format';
} & ProjectsComponentsCreateFileFormatErrorComponent) | ({
    attr: 'license';
} & ProjectsComponentsCreateLicenseErrorComponent) | ({
    attr: 'agreement';
} & ProjectsComponentsCreateAgreementErrorComponent) | ({
    attr: 'new_lang';
} & ProjectsComponentsCreateNewLangErrorComponent) | ({
    attr: 'language_code_style';
} & ProjectsComponentsCreateLanguageCodeStyleErrorComponent) | ({
    attr: 'push';
} & ProjectsComponentsCreatePushErrorComponent) | ({
    attr: 'check_flags';
} & ProjectsComponentsCreateCheckFlagsErrorComponent) | ({
    attr: 'priority';
} & ProjectsComponentsCreatePriorityErrorComponent) | ({
    attr: 'enforced_checks';
} & ProjectsComponentsCreateEnforcedChecksErrorComponent) | ({
    attr: 'restricted';
} & ProjectsComponentsCreateRestrictedErrorComponent) | ({
    attr: 'repoweb';
} & ProjectsComponentsCreateRepowebErrorComponent) | ({
    attr: 'report_source_bugs';
} & ProjectsComponentsCreateReportSourceBugsErrorComponent) | ({
    attr: 'merge_style';
} & ProjectsComponentsCreateMergeStyleErrorComponent) | ({
    attr: 'commit_message';
} & ProjectsComponentsCreateCommitMessageErrorComponent) | ({
    attr: 'add_message';
} & ProjectsComponentsCreateAddMessageErrorComponent) | ({
    attr: 'delete_message';
} & ProjectsComponentsCreateDeleteMessageErrorComponent) | ({
    attr: 'merge_message';
} & ProjectsComponentsCreateMergeMessageErrorComponent) | ({
    attr: 'addon_message';
} & ProjectsComponentsCreateAddonMessageErrorComponent) | ({
    attr: 'pull_message';
} & ProjectsComponentsCreatePullMessageErrorComponent) | ({
    attr: 'allow_translation_propagation';
} & ProjectsComponentsCreateAllowTranslationPropagationErrorComponent) | ({
    attr: 'manage_units';
} & ProjectsComponentsCreateManageUnitsErrorComponent) | ({
    attr: 'enable_suggestions';
} & ProjectsComponentsCreateEnableSuggestionsErrorComponent) | ({
    attr: 'suggestion_voting';
} & ProjectsComponentsCreateSuggestionVotingErrorComponent) | ({
    attr: 'suggestion_autoaccept';
} & ProjectsComponentsCreateSuggestionAutoacceptErrorComponent) | ({
    attr: 'push_on_commit';
} & ProjectsComponentsCreatePushOnCommitErrorComponent) | ({
    attr: 'commit_pending_age';
} & ProjectsComponentsCreateCommitPendingAgeErrorComponent) | ({
    attr: 'auto_lock_error';
} & ProjectsComponentsCreateAutoLockErrorErrorComponent) | ({
    attr: 'language_regex';
} & ProjectsComponentsCreateLanguageRegexErrorComponent) | ({
    attr: 'key_filter';
} & ProjectsComponentsCreateKeyFilterErrorComponent) | ({
    attr: 'secondary_language';
} & ProjectsComponentsCreateSecondaryLanguageErrorComponent) | ({
    attr: 'variant_regex';
} & ProjectsComponentsCreateVariantRegexErrorComponent) | ({
    attr: 'zipfile';
} & ProjectsComponentsCreateZipfileErrorComponent) | ({
    attr: 'docfile';
} & ProjectsComponentsCreateDocfileErrorComponent) | ({
    attr: 'is_glossary';
} & ProjectsComponentsCreateIsGlossaryErrorComponent) | ({
    attr: 'glossary_color';
} & ProjectsComponentsCreateGlossaryColorErrorComponent) | ({
    attr: 'disable_autoshare';
} & ProjectsComponentsCreateDisableAutoshareErrorComponent) | ({
    attr: 'category';
} & ProjectsComponentsCreateCategoryErrorComponent);
export type ProjectsComponentsCreateErrorResponse400 = ({
    type: 'validation_error';
} & ProjectsComponentsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ProjectsComponentsCreateFileFormatErrorComponent = {
    attr: 'file_format';
    code: 'invalid_choice' | 'null' | 'required';
    detail: string;
};
export type ProjectsComponentsCreateFilemaskErrorComponent = {
    attr: 'filemask';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateGitExportErrorComponent = {
    attr: 'git_export';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateGlossaryColorErrorComponent = {
    attr: 'glossary_color';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateIntermediateErrorComponent = {
    attr: 'intermediate';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateIsGlossaryErrorComponent = {
    attr: 'is_glossary';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateKeyFilterErrorComponent = {
    attr: 'key_filter';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateLanguageCodeStyleErrorComponent = {
    attr: 'language_code_style';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateLanguageRegexErrorComponent = {
    attr: 'language_regex';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateLicenseErrorComponent = {
    attr: 'license';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateManageUnitsErrorComponent = {
    attr: 'manage_units';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateMergeMessageErrorComponent = {
    attr: 'merge_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateMergeStyleErrorComponent = {
    attr: 'merge_style';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateNewBaseErrorComponent = {
    attr: 'new_base';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateNewLangErrorComponent = {
    attr: 'new_lang';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreatePriorityErrorComponent = {
    attr: 'priority';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ProjectsComponentsCreatePullMessageErrorComponent = {
    attr: 'pull_message';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreatePushBranchErrorComponent = {
    attr: 'push_branch';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreatePushErrorComponent = {
    attr: 'push';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreatePushOnCommitErrorComponent = {
    attr: 'push_on_commit';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateRepoErrorComponent = {
    attr: 'repo';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateReportSourceBugsErrorComponent = {
    attr: 'report_source_bugs';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateRepowebErrorComponent = {
    attr: 'repoweb';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateRestrictedErrorComponent = {
    attr: 'restricted';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateScreenshotFilemaskErrorComponent = {
    attr: 'screenshot_filemask';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateSecondaryLanguageErrorComponent = {
    attr: 'secondary_language';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type ProjectsComponentsCreateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateSourceLanguageCodeErrorComponent = {
    attr: 'source_language.code';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateSourceLanguageDirectionErrorComponent = {
    attr: 'source_language.direction';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateSourceLanguageNameErrorComponent = {
    attr: 'source_language.name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateSourceLanguageNonFieldErrorsErrorComponent = {
    attr: 'source_language.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateSourceLanguagePluralFormulaErrorComponent = {
    attr: 'source_language.plural.formula';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateSourceLanguagePluralNonFieldErrorsErrorComponent = {
    attr: 'source_language.plural.non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateSourceLanguagePluralNumberErrorComponent = {
    attr: 'source_language.plural.number';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateSourceLanguagePluralSourceErrorComponent = {
    attr: 'source_language.plural.source';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateSourceLanguagePopulationErrorComponent = {
    attr: 'source_language.population';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateSuggestionAutoacceptErrorComponent = {
    attr: 'suggestion_autoaccept';
    code: 'invalid' | 'max_string_length' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateSuggestionVotingErrorComponent = {
    attr: 'suggestion_voting';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateTemplateErrorComponent = {
    attr: 'template';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ProjectsComponentsCreateError>;
};
export type ProjectsComponentsCreateVariantRegexErrorComponent = {
    attr: 'variant_regex';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsComponentsCreateVcsErrorComponent = {
    attr: 'vcs';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type ProjectsComponentsCreateZipfileErrorComponent = {
    attr: 'zipfile';
    code: 'empty' | 'invalid' | 'no_name' | 'null';
    detail: string;
};
export type ProjectsComponentsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ProjectsCreateCheckFlagsErrorComponent = {
    attr: 'check_flags';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsCreateEnableHooksErrorComponent = {
    attr: 'enable_hooks';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsCreateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsCreateError = ({
    attr: 'non_field_errors';
} & ProjectsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ProjectsCreateNameErrorComponent) | ({
    attr: 'slug';
} & ProjectsCreateSlugErrorComponent) | ({
    attr: 'web';
} & ProjectsCreateWebErrorComponent) | ({
    attr: 'check_flags';
} & ProjectsCreateCheckFlagsErrorComponent) | ({
    attr: 'translation_review';
} & ProjectsCreateTranslationReviewErrorComponent) | ({
    attr: 'source_review';
} & ProjectsCreateSourceReviewErrorComponent) | ({
    attr: 'set_language_team';
} & ProjectsCreateSetLanguageTeamErrorComponent) | ({
    attr: 'instructions';
} & ProjectsCreateInstructionsErrorComponent) | ({
    attr: 'enable_hooks';
} & ProjectsCreateEnableHooksErrorComponent) | ({
    attr: 'language_aliases';
} & ProjectsCreateLanguageAliasesErrorComponent) | ({
    attr: 'secondary_language';
} & ProjectsCreateSecondaryLanguageErrorComponent) | ({
    attr: 'enforced_2fa';
} & ProjectsCreateEnforced2FaErrorComponent);
export type ProjectsCreateErrorResponse400 = ({
    type: 'validation_error';
} & ProjectsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ProjectsCreateInstructionsErrorComponent = {
    attr: 'instructions';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsCreateLanguageAliasesErrorComponent = {
    attr: 'language_aliases';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ProjectsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsCreateSecondaryLanguageErrorComponent = {
    attr: 'secondary_language';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type ProjectsCreateSetLanguageTeamErrorComponent = {
    attr: 'set_language_team';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsCreateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ProjectsCreateSourceReviewErrorComponent = {
    attr: 'source_review';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsCreateTranslationReviewErrorComponent = {
    attr: 'translation_review';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ProjectsCreateError>;
};
export type ProjectsCreateWebErrorComponent = {
    attr: 'web';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsCreditsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ProjectsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ProjectsFileRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ProjectsLabelsCreateCheckFlagsErrorComponent = {
    attr: 'check_flags';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsLabelsCreateEnableHooksErrorComponent = {
    attr: 'enable_hooks';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsLabelsCreateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsLabelsCreateError = ({
    attr: 'non_field_errors';
} & ProjectsLabelsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ProjectsLabelsCreateNameErrorComponent) | ({
    attr: 'slug';
} & ProjectsLabelsCreateSlugErrorComponent) | ({
    attr: 'web';
} & ProjectsLabelsCreateWebErrorComponent) | ({
    attr: 'check_flags';
} & ProjectsLabelsCreateCheckFlagsErrorComponent) | ({
    attr: 'translation_review';
} & ProjectsLabelsCreateTranslationReviewErrorComponent) | ({
    attr: 'source_review';
} & ProjectsLabelsCreateSourceReviewErrorComponent) | ({
    attr: 'set_language_team';
} & ProjectsLabelsCreateSetLanguageTeamErrorComponent) | ({
    attr: 'instructions';
} & ProjectsLabelsCreateInstructionsErrorComponent) | ({
    attr: 'enable_hooks';
} & ProjectsLabelsCreateEnableHooksErrorComponent) | ({
    attr: 'language_aliases';
} & ProjectsLabelsCreateLanguageAliasesErrorComponent) | ({
    attr: 'secondary_language';
} & ProjectsLabelsCreateSecondaryLanguageErrorComponent) | ({
    attr: 'enforced_2fa';
} & ProjectsLabelsCreateEnforced2FaErrorComponent);
export type ProjectsLabelsCreateErrorResponse400 = ({
    type: 'validation_error';
} & ProjectsLabelsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ProjectsLabelsCreateInstructionsErrorComponent = {
    attr: 'instructions';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsLabelsCreateLanguageAliasesErrorComponent = {
    attr: 'language_aliases';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsLabelsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ProjectsLabelsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsLabelsCreateSecondaryLanguageErrorComponent = {
    attr: 'secondary_language';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type ProjectsLabelsCreateSetLanguageTeamErrorComponent = {
    attr: 'set_language_team';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsLabelsCreateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ProjectsLabelsCreateSourceReviewErrorComponent = {
    attr: 'source_review';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsLabelsCreateTranslationReviewErrorComponent = {
    attr: 'translation_review';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsLabelsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ProjectsLabelsCreateError>;
};
export type ProjectsLabelsCreateWebErrorComponent = {
    attr: 'web';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsLabelsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ProjectsLanguagesRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ProjectsListErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ProjectsMachinerySettingsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ProjectsPartialUpdateCheckFlagsErrorComponent = {
    attr: 'check_flags';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsPartialUpdateEnableHooksErrorComponent = {
    attr: 'enable_hooks';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsPartialUpdateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsPartialUpdateError = ({
    attr: 'non_field_errors';
} & ProjectsPartialUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ProjectsPartialUpdateNameErrorComponent) | ({
    attr: 'slug';
} & ProjectsPartialUpdateSlugErrorComponent) | ({
    attr: 'web';
} & ProjectsPartialUpdateWebErrorComponent) | ({
    attr: 'check_flags';
} & ProjectsPartialUpdateCheckFlagsErrorComponent) | ({
    attr: 'translation_review';
} & ProjectsPartialUpdateTranslationReviewErrorComponent) | ({
    attr: 'source_review';
} & ProjectsPartialUpdateSourceReviewErrorComponent) | ({
    attr: 'set_language_team';
} & ProjectsPartialUpdateSetLanguageTeamErrorComponent) | ({
    attr: 'instructions';
} & ProjectsPartialUpdateInstructionsErrorComponent) | ({
    attr: 'enable_hooks';
} & ProjectsPartialUpdateEnableHooksErrorComponent) | ({
    attr: 'language_aliases';
} & ProjectsPartialUpdateLanguageAliasesErrorComponent) | ({
    attr: 'secondary_language';
} & ProjectsPartialUpdateSecondaryLanguageErrorComponent) | ({
    attr: 'enforced_2fa';
} & ProjectsPartialUpdateEnforced2FaErrorComponent);
export type ProjectsPartialUpdateErrorResponse400 = ({
    type: 'validation_error';
} & ProjectsPartialUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ProjectsPartialUpdateInstructionsErrorComponent = {
    attr: 'instructions';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsPartialUpdateLanguageAliasesErrorComponent = {
    attr: 'language_aliases';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsPartialUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ProjectsPartialUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsPartialUpdateSecondaryLanguageErrorComponent = {
    attr: 'secondary_language';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type ProjectsPartialUpdateSetLanguageTeamErrorComponent = {
    attr: 'set_language_team';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsPartialUpdateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ProjectsPartialUpdateSourceReviewErrorComponent = {
    attr: 'source_review';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsPartialUpdateTranslationReviewErrorComponent = {
    attr: 'translation_review';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsPartialUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ProjectsPartialUpdateError>;
};
export type ProjectsPartialUpdateWebErrorComponent = {
    attr: 'web';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsRepositoryCreateError = ({
    attr: 'non_field_errors';
} & ProjectsRepositoryCreateNonFieldErrorsErrorComponent) | ({
    attr: 'operation';
} & ProjectsRepositoryCreateOperationErrorComponent);
export type ProjectsRepositoryCreateErrorResponse400 = ({
    type: 'validation_error';
} & ProjectsRepositoryCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ProjectsRepositoryCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsRepositoryCreateOperationErrorComponent = {
    attr: 'operation';
    code: 'invalid_choice' | 'null' | 'required';
    detail: string;
};
export type ProjectsRepositoryCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ProjectsRepositoryCreateError>;
};
export type ProjectsRepositoryRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ProjectsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ProjectsStatisticsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ProjectsUpdateCheckFlagsErrorComponent = {
    attr: 'check_flags';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsUpdateEnableHooksErrorComponent = {
    attr: 'enable_hooks';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsUpdateEnforced2FaErrorComponent = {
    attr: 'enforced_2fa';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsUpdateError = ({
    attr: 'non_field_errors';
} & ProjectsUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ProjectsUpdateNameErrorComponent) | ({
    attr: 'slug';
} & ProjectsUpdateSlugErrorComponent) | ({
    attr: 'web';
} & ProjectsUpdateWebErrorComponent) | ({
    attr: 'check_flags';
} & ProjectsUpdateCheckFlagsErrorComponent) | ({
    attr: 'translation_review';
} & ProjectsUpdateTranslationReviewErrorComponent) | ({
    attr: 'source_review';
} & ProjectsUpdateSourceReviewErrorComponent) | ({
    attr: 'set_language_team';
} & ProjectsUpdateSetLanguageTeamErrorComponent) | ({
    attr: 'instructions';
} & ProjectsUpdateInstructionsErrorComponent) | ({
    attr: 'enable_hooks';
} & ProjectsUpdateEnableHooksErrorComponent) | ({
    attr: 'language_aliases';
} & ProjectsUpdateLanguageAliasesErrorComponent) | ({
    attr: 'secondary_language';
} & ProjectsUpdateSecondaryLanguageErrorComponent) | ({
    attr: 'enforced_2fa';
} & ProjectsUpdateEnforced2FaErrorComponent);
export type ProjectsUpdateErrorResponse400 = ({
    type: 'validation_error';
} & ProjectsUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ProjectsUpdateInstructionsErrorComponent = {
    attr: 'instructions';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsUpdateLanguageAliasesErrorComponent = {
    attr: 'language_aliases';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ProjectsUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ProjectsUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsUpdateSecondaryLanguageErrorComponent = {
    attr: 'secondary_language';
    code: 'does_not_exist' | 'incorrect_type';
    detail: string;
};
export type ProjectsUpdateSetLanguageTeamErrorComponent = {
    attr: 'set_language_team';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsUpdateSlugErrorComponent = {
    attr: 'slug';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type ProjectsUpdateSourceReviewErrorComponent = {
    attr: 'source_review';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsUpdateTranslationReviewErrorComponent = {
    attr: 'translation_review';
    code: 'invalid' | 'null';
    detail: string;
};
export type ProjectsUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ProjectsUpdateError>;
};
export type ProjectsUpdateWebErrorComponent = {
    attr: 'web';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type RepoRequest = {
    operation: OperationEnum;
};
export type Role = {
    readonly id: number;
    name: string;
    permissions: Array<string>;
    readonly url: string;
};
export type RolesCreateError = ({
    attr: 'non_field_errors';
} & RolesCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & RolesCreateNameErrorComponent) | ({
    attr: 'permissions';
} & RolesCreatePermissionsErrorComponent);
export type RolesCreateErrorResponse400 = ({
    type: 'validation_error';
} & RolesCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type RolesCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type RolesCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type RolesCreatePermissionsErrorComponent = {
    attr: 'permissions';
    code: 'not_a_list' | 'null' | 'required';
    detail: string;
};
export type RolesCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<RolesCreateError>;
};
export type RolesDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type RolesListErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type RolesPartialUpdateError = ({
    attr: 'non_field_errors';
} & RolesPartialUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & RolesPartialUpdateNameErrorComponent) | ({
    attr: 'permissions';
} & RolesPartialUpdatePermissionsErrorComponent);
export type RolesPartialUpdateErrorResponse400 = ({
    type: 'validation_error';
} & RolesPartialUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type RolesPartialUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type RolesPartialUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type RolesPartialUpdatePermissionsErrorComponent = {
    attr: 'permissions';
    code: 'not_a_list' | 'null' | 'required';
    detail: string;
};
export type RolesPartialUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<RolesPartialUpdateError>;
};
export type RolesRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type RolesUpdateError = ({
    attr: 'non_field_errors';
} & RolesUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & RolesUpdateNameErrorComponent) | ({
    attr: 'permissions';
} & RolesUpdatePermissionsErrorComponent);
export type RolesUpdateErrorResponse400 = ({
    type: 'validation_error';
} & RolesUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type RolesUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type RolesUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type RolesUpdatePermissionsErrorComponent = {
    attr: 'permissions';
    code: 'not_a_list' | 'null' | 'required';
    detail: string;
};
export type RolesUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<RolesUpdateError>;
};
export type ScopeEnum = 0 | 10 | 20 | 30 | 40;
export type Screenshot = {
    readonly id: number;
    name: string;
    repository_filename?: string;
    readonly translation: string;
    readonly file_url: string;
    readonly units: Array<string>;
    readonly url: string;
};
export type ScreenshotFile = {
    image: string;
};
export type ScreenshotsCreateError = ({
    attr: 'non_field_errors';
} & ScreenshotsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ScreenshotsCreateNameErrorComponent) | ({
    attr: 'repository_filename';
} & ScreenshotsCreateRepositoryFilenameErrorComponent);
export type ScreenshotsCreateErrorResponse400 = ({
    type: 'validation_error';
} & ScreenshotsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ScreenshotsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ScreenshotsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ScreenshotsCreateRepositoryFilenameErrorComponent = {
    attr: 'repository_filename';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ScreenshotsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ScreenshotsCreateError>;
};
export type ScreenshotsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ScreenshotsFileCreateError = ({
    attr: 'non_field_errors';
} & ScreenshotsFileCreateNonFieldErrorsErrorComponent) | ({
    attr: 'image';
} & ScreenshotsFileCreateImageErrorComponent);
export type ScreenshotsFileCreateErrorResponse400 = ({
    type: 'validation_error';
} & ScreenshotsFileCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ScreenshotsFileCreateImageErrorComponent = {
    attr: 'image';
    code: 'empty' | 'invalid' | 'invalid_image' | 'no_name' | 'null' | 'required';
    detail: string;
};
export type ScreenshotsFileCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ScreenshotsFileCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ScreenshotsFileCreateError>;
};
export type ScreenshotsFileRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ScreenshotsFileUpdateError = ({
    attr: 'non_field_errors';
} & ScreenshotsFileUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'image';
} & ScreenshotsFileUpdateImageErrorComponent);
export type ScreenshotsFileUpdateErrorResponse400 = ({
    type: 'validation_error';
} & ScreenshotsFileUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ScreenshotsFileUpdateImageErrorComponent = {
    attr: 'image';
    code: 'empty' | 'invalid' | 'invalid_image' | 'no_name' | 'null' | 'required';
    detail: string;
};
export type ScreenshotsFileUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ScreenshotsFileUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ScreenshotsFileUpdateError>;
};
export type ScreenshotsListErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ScreenshotsPartialUpdateError = ({
    attr: 'non_field_errors';
} & ScreenshotsPartialUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ScreenshotsPartialUpdateNameErrorComponent) | ({
    attr: 'repository_filename';
} & ScreenshotsPartialUpdateRepositoryFilenameErrorComponent);
export type ScreenshotsPartialUpdateErrorResponse400 = ({
    type: 'validation_error';
} & ScreenshotsPartialUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ScreenshotsPartialUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ScreenshotsPartialUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ScreenshotsPartialUpdateRepositoryFilenameErrorComponent = {
    attr: 'repository_filename';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ScreenshotsPartialUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ScreenshotsPartialUpdateError>;
};
export type ScreenshotsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ScreenshotsUnitsCreateError = ({
    attr: 'non_field_errors';
} & ScreenshotsUnitsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ScreenshotsUnitsCreateNameErrorComponent) | ({
    attr: 'repository_filename';
} & ScreenshotsUnitsCreateRepositoryFilenameErrorComponent);
export type ScreenshotsUnitsCreateErrorResponse400 = ({
    type: 'validation_error';
} & ScreenshotsUnitsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ScreenshotsUnitsCreateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ScreenshotsUnitsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ScreenshotsUnitsCreateRepositoryFilenameErrorComponent = {
    attr: 'repository_filename';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ScreenshotsUnitsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ScreenshotsUnitsCreateError>;
};
export type ScreenshotsUnitsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ScreenshotsUpdateError = ({
    attr: 'non_field_errors';
} & ScreenshotsUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'name';
} & ScreenshotsUpdateNameErrorComponent) | ({
    attr: 'repository_filename';
} & ScreenshotsUpdateRepositoryFilenameErrorComponent);
export type ScreenshotsUpdateErrorResponse400 = ({
    type: 'validation_error';
} & ScreenshotsUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type ScreenshotsUpdateNameErrorComponent = {
    attr: 'name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ScreenshotsUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type ScreenshotsUpdateRepositoryFilenameErrorComponent = {
    attr: 'repository_filename';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type ScreenshotsUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<ScreenshotsUpdateError>;
};
export type SearchRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type ServerErrorEnum = 'server_error';
export type SingleServiceConfig = {
    service: string;
    configuration: {
        [key: string]: unknown;
    };
};
export type SourceEnum = 0 | 1 | 3 | 4 | 5 | 6 | 2;
export type StateEnum = 0 | 10 | 20 | 30 | 100;
export type TasksDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type TasksRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type Translation = {
    language: Language;
    component: Component;
    language_code?: string;
    readonly id: number;
    filename: string;
    revision?: string;
    readonly web_url: string;
    readonly share_url: string;
    readonly translate_url: string;
    readonly url: string;
    readonly is_template: boolean;
    readonly is_source: boolean;
    readonly total: number;
    readonly total_words: number;
    readonly translated: number;
    readonly translated_words: number;
    readonly translated_percent: number;
    readonly fuzzy: number;
    readonly fuzzy_words: number;
    readonly fuzzy_percent: number;
    readonly failing_checks: number;
    readonly failing_checks_words: number;
    readonly failing_checks_percent: number;
    readonly have_suggestion: number;
    readonly have_comment: number;
    readonly last_change: string;
    readonly last_author: string;
    readonly repository_url: string;
    readonly file_url: string;
    readonly statistics_url: string;
    readonly changes_list_url: string;
    readonly units_list_url: string;
};
export type TranslationsAutotranslateCreateError = ({
    attr: 'non_field_errors';
} & TranslationsAutotranslateCreateNonFieldErrorsErrorComponent) | ({
    attr: 'language_code';
} & TranslationsAutotranslateCreateLanguageCodeErrorComponent) | ({
    attr: 'filename';
} & TranslationsAutotranslateCreateFilenameErrorComponent) | ({
    attr: 'revision';
} & TranslationsAutotranslateCreateRevisionErrorComponent);
export type TranslationsAutotranslateCreateErrorResponse400 = ({
    type: 'validation_error';
} & TranslationsAutotranslateCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type TranslationsAutotranslateCreateFilenameErrorComponent = {
    attr: 'filename';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type TranslationsAutotranslateCreateLanguageCodeErrorComponent = {
    attr: 'language_code';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type TranslationsAutotranslateCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type TranslationsAutotranslateCreateRevisionErrorComponent = {
    attr: 'revision';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type TranslationsAutotranslateCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<TranslationsAutotranslateCreateError>;
};
export type TranslationsChangesRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type TranslationsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type TranslationsFileCreateAuthorEmailErrorComponent = {
    attr: 'author_email';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type TranslationsFileCreateAuthorNameErrorComponent = {
    attr: 'author_name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type TranslationsFileCreateConflictsErrorComponent = {
    attr: 'conflicts';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type TranslationsFileCreateError = ({
    attr: 'non_field_errors';
} & TranslationsFileCreateNonFieldErrorsErrorComponent) | ({
    attr: 'file';
} & TranslationsFileCreateFileErrorComponent) | ({
    attr: 'author_email';
} & TranslationsFileCreateAuthorEmailErrorComponent) | ({
    attr: 'author_name';
} & TranslationsFileCreateAuthorNameErrorComponent) | ({
    attr: 'method';
} & TranslationsFileCreateMethodErrorComponent) | ({
    attr: 'fuzzy';
} & TranslationsFileCreateFuzzyErrorComponent) | ({
    attr: 'conflicts';
} & TranslationsFileCreateConflictsErrorComponent);
export type TranslationsFileCreateErrorResponse400 = ({
    type: 'validation_error';
} & TranslationsFileCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type TranslationsFileCreateFileErrorComponent = {
    attr: 'file';
    code: 'empty' | 'invalid' | 'no_name' | 'null' | 'required';
    detail: string;
};
export type TranslationsFileCreateFuzzyErrorComponent = {
    attr: 'fuzzy';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type TranslationsFileCreateMethodErrorComponent = {
    attr: 'method';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type TranslationsFileCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type TranslationsFileCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<TranslationsFileCreateError>;
};
export type TranslationsFileRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type TranslationsFileUpdateAuthorEmailErrorComponent = {
    attr: 'author_email';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type TranslationsFileUpdateAuthorNameErrorComponent = {
    attr: 'author_name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type TranslationsFileUpdateConflictsErrorComponent = {
    attr: 'conflicts';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type TranslationsFileUpdateError = ({
    attr: 'non_field_errors';
} & TranslationsFileUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'file';
} & TranslationsFileUpdateFileErrorComponent) | ({
    attr: 'author_email';
} & TranslationsFileUpdateAuthorEmailErrorComponent) | ({
    attr: 'author_name';
} & TranslationsFileUpdateAuthorNameErrorComponent) | ({
    attr: 'method';
} & TranslationsFileUpdateMethodErrorComponent) | ({
    attr: 'fuzzy';
} & TranslationsFileUpdateFuzzyErrorComponent) | ({
    attr: 'conflicts';
} & TranslationsFileUpdateConflictsErrorComponent);
export type TranslationsFileUpdateErrorResponse400 = ({
    type: 'validation_error';
} & TranslationsFileUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type TranslationsFileUpdateFileErrorComponent = {
    attr: 'file';
    code: 'empty' | 'invalid' | 'no_name' | 'null' | 'required';
    detail: string;
};
export type TranslationsFileUpdateFuzzyErrorComponent = {
    attr: 'fuzzy';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type TranslationsFileUpdateMethodErrorComponent = {
    attr: 'method';
    code: 'invalid_choice' | 'null';
    detail: string;
};
export type TranslationsFileUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type TranslationsFileUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<TranslationsFileUpdateError>;
};
export type TranslationsListErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type TranslationsRepositoryCreateError = ({
    attr: 'non_field_errors';
} & TranslationsRepositoryCreateNonFieldErrorsErrorComponent) | ({
    attr: 'operation';
} & TranslationsRepositoryCreateOperationErrorComponent);
export type TranslationsRepositoryCreateErrorResponse400 = ({
    type: 'validation_error';
} & TranslationsRepositoryCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type TranslationsRepositoryCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type TranslationsRepositoryCreateOperationErrorComponent = {
    attr: 'operation';
    code: 'invalid_choice' | 'null' | 'required';
    detail: string;
};
export type TranslationsRepositoryCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<TranslationsRepositoryCreateError>;
};
export type TranslationsRepositoryRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type TranslationsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type TranslationsStatisticsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type TranslationsUnitsCreateError = ({
    attr: 'non_field_errors';
} & TranslationsUnitsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'language_code';
} & TranslationsUnitsCreateLanguageCodeErrorComponent) | ({
    attr: 'filename';
} & TranslationsUnitsCreateFilenameErrorComponent) | ({
    attr: 'revision';
} & TranslationsUnitsCreateRevisionErrorComponent);
export type TranslationsUnitsCreateErrorResponse400 = ({
    type: 'validation_error';
} & TranslationsUnitsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type TranslationsUnitsCreateFilenameErrorComponent = {
    attr: 'filename';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type TranslationsUnitsCreateLanguageCodeErrorComponent = {
    attr: 'language_code';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type TranslationsUnitsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type TranslationsUnitsCreateRevisionErrorComponent = {
    attr: 'revision';
    code: 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type TranslationsUnitsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<TranslationsUnitsCreateError>;
};
export type TranslationsUnitsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type Unit = {
    readonly translation: string;
    readonly language_code: string;
    source: Array<string>;
    previous_source?: string;
    target: Array<string>;
    id_hash: number;
    readonly content_hash: number;
    location?: string;
    context?: string;
    note?: string;
    flags?: string;
    labels: Array<UnitLabels>;
    state?: StateEnum;
    readonly fuzzy: boolean;
    readonly translated: boolean;
    readonly approved: boolean;
    position: number;
    readonly has_suggestion: boolean;
    readonly has_comment: boolean;
    readonly has_failing_check: boolean;
    num_words?: number;
    readonly source_unit: string;
    priority?: number;
    readonly id: number;
    readonly web_url: string;
    readonly url: string;
    explanation?: string;
    extra_flags?: string;
    readonly pending: boolean;
    readonly timestamp: string;
    readonly last_updated: string;
};
export type UnitFlatLabels = {
    readonly id: number;
    name: string;
    description?: string;
    color?: ColorEnum;
};
export type UnitLabels = {
    readonly id: number;
    name: string;
    description?: string;
    color?: ColorEnum;
};
export type UnitWrite = {
    target: Array<string>;
    state?: StateEnum;
    explanation?: string;
    extra_flags?: string;
    labels: Array<UnitFlatLabels>;
};
export type UnitsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type UnitsListErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type UnitsPartialUpdateError = ({
    attr: 'non_field_errors';
} & UnitsPartialUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'target';
} & UnitsPartialUpdateTargetErrorComponent) | ({
    attr: 'target.INDEX';
} & UnitsPartialUpdateTargetIndexErrorComponent) | ({
    attr: 'state';
} & UnitsPartialUpdateStateErrorComponent) | ({
    attr: 'explanation';
} & UnitsPartialUpdateExplanationErrorComponent) | ({
    attr: 'extra_flags';
} & UnitsPartialUpdateExtraFlagsErrorComponent) | ({
    attr: 'labels';
} & UnitsPartialUpdateLabelsErrorComponent);
export type UnitsPartialUpdateErrorResponse400 = ({
    type: 'validation_error';
} & UnitsPartialUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type UnitsPartialUpdateExplanationErrorComponent = {
    attr: 'explanation';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type UnitsPartialUpdateExtraFlagsErrorComponent = {
    attr: 'extra_flags';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type UnitsPartialUpdateLabelsErrorComponent = {
    attr: 'labels';
    code: 'invalid' | 'not_a_list' | 'null' | 'required';
    detail: string;
};
export type UnitsPartialUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type UnitsPartialUpdateStateErrorComponent = {
    attr: 'state';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type UnitsPartialUpdateTargetErrorComponent = {
    attr: 'target';
    code: 'not_a_list' | 'null' | 'required';
    detail: string;
};
export type UnitsPartialUpdateTargetIndexErrorComponent = {
    attr: 'target.INDEX';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type UnitsPartialUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<UnitsPartialUpdateError>;
};
export type UnitsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type UnitsTranslationsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type UnitsUpdateError = ({
    attr: 'non_field_errors';
} & UnitsUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'target';
} & UnitsUpdateTargetErrorComponent) | ({
    attr: 'target.INDEX';
} & UnitsUpdateTargetIndexErrorComponent) | ({
    attr: 'state';
} & UnitsUpdateStateErrorComponent) | ({
    attr: 'explanation';
} & UnitsUpdateExplanationErrorComponent) | ({
    attr: 'extra_flags';
} & UnitsUpdateExtraFlagsErrorComponent) | ({
    attr: 'labels';
} & UnitsUpdateLabelsErrorComponent);
export type UnitsUpdateErrorResponse400 = ({
    type: 'validation_error';
} & UnitsUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type UnitsUpdateExplanationErrorComponent = {
    attr: 'explanation';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type UnitsUpdateExtraFlagsErrorComponent = {
    attr: 'extra_flags';
    code: 'invalid' | 'null' | 'null_characters_not_allowed' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type UnitsUpdateLabelsErrorComponent = {
    attr: 'labels';
    code: 'invalid' | 'not_a_list' | 'null' | 'required';
    detail: string;
};
export type UnitsUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type UnitsUpdateStateErrorComponent = {
    attr: 'state';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null';
    detail: string;
};
export type UnitsUpdateTargetErrorComponent = {
    attr: 'target';
    code: 'not_a_list' | 'null' | 'required';
    detail: string;
};
export type UnitsUpdateTargetIndexErrorComponent = {
    attr: 'target.INDEX';
    code: 'blank' | 'invalid' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type UnitsUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<UnitsUpdateError>;
};
export type UploadRequest = {
    file: string;
    author_email?: string;
    author_name?: string;
    method?: MethodEnum;
    fuzzy?: FuzzyEnum | BlankEnum;
    conflicts?: ConflictsEnum | BlankEnum;
};
export type UsersCreateError = ({
    attr: 'non_field_errors';
} & UsersCreateNonFieldErrorsErrorComponent) | ({
    attr: 'full_name';
} & UsersCreateFullNameErrorComponent) | ({
    attr: 'username';
} & UsersCreateUsernameErrorComponent);
export type UsersCreateErrorResponse400 = ({
    type: 'validation_error';
} & UsersCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type UsersCreateFullNameErrorComponent = {
    attr: 'full_name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type UsersCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type UsersCreateUsernameErrorComponent = {
    attr: 'username';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type UsersCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<UsersCreateError>;
};
export type UsersDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type UsersGroupsCreateError = ({
    attr: 'non_field_errors';
} & UsersGroupsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'full_name';
} & UsersGroupsCreateFullNameErrorComponent) | ({
    attr: 'username';
} & UsersGroupsCreateUsernameErrorComponent);
export type UsersGroupsCreateErrorResponse400 = ({
    type: 'validation_error';
} & UsersGroupsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type UsersGroupsCreateFullNameErrorComponent = {
    attr: 'full_name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type UsersGroupsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type UsersGroupsCreateUsernameErrorComponent = {
    attr: 'username';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type UsersGroupsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<UsersGroupsCreateError>;
};
export type UsersGroupsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type UsersListError = ({
    attr: 'username';
} & UsersListUsernameErrorComponent) | ({
    attr: 'id';
} & UsersListIdErrorComponent);
export type UsersListErrorResponse400 = ({
    type: 'validation_error';
} & UsersListValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type UsersListIdErrorComponent = {
    attr: 'id';
    code: 'invalid' | 'max_value';
    detail: string;
};
export type UsersListUsernameErrorComponent = {
    attr: 'username';
    code: 'null_characters_not_allowed';
    detail: string;
};
export type UsersListValidationError = {
    type: ValidationErrorEnum;
    errors: Array<UsersListError>;
};
export type UsersNotificationsCreateError = ({
    attr: 'non_field_errors';
} & UsersNotificationsCreateNonFieldErrorsErrorComponent) | ({
    attr: 'notification';
} & UsersNotificationsCreateNotificationErrorComponent) | ({
    attr: 'scope';
} & UsersNotificationsCreateScopeErrorComponent) | ({
    attr: 'frequency';
} & UsersNotificationsCreateFrequencyErrorComponent);
export type UsersNotificationsCreateErrorResponse400 = ({
    type: 'validation_error';
} & UsersNotificationsCreateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type UsersNotificationsCreateFrequencyErrorComponent = {
    attr: 'frequency';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null' | 'required';
    detail: string;
};
export type UsersNotificationsCreateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type UsersNotificationsCreateNotificationErrorComponent = {
    attr: 'notification';
    code: 'invalid_choice' | 'null' | 'required';
    detail: string;
};
export type UsersNotificationsCreateScopeErrorComponent = {
    attr: 'scope';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null' | 'required';
    detail: string;
};
export type UsersNotificationsCreateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<UsersNotificationsCreateError>;
};
export type UsersNotificationsDestroyErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type UsersNotificationsListError = ({
    attr: 'username';
} & UsersNotificationsListUsernameErrorComponent) | ({
    attr: 'id';
} & UsersNotificationsListIdErrorComponent);
export type UsersNotificationsListErrorResponse400 = ({
    type: 'validation_error';
} & UsersNotificationsListValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type UsersNotificationsListIdErrorComponent = {
    attr: 'id';
    code: 'invalid' | 'max_value';
    detail: string;
};
export type UsersNotificationsListUsernameErrorComponent = {
    attr: 'username';
    code: 'null_characters_not_allowed';
    detail: string;
};
export type UsersNotificationsListValidationError = {
    type: ValidationErrorEnum;
    errors: Array<UsersNotificationsListError>;
};
export type UsersNotificationsPartialUpdateError = ({
    attr: 'non_field_errors';
} & UsersNotificationsPartialUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'notification';
} & UsersNotificationsPartialUpdateNotificationErrorComponent) | ({
    attr: 'scope';
} & UsersNotificationsPartialUpdateScopeErrorComponent) | ({
    attr: 'frequency';
} & UsersNotificationsPartialUpdateFrequencyErrorComponent);
export type UsersNotificationsPartialUpdateErrorResponse400 = ({
    type: 'validation_error';
} & UsersNotificationsPartialUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type UsersNotificationsPartialUpdateFrequencyErrorComponent = {
    attr: 'frequency';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null' | 'required';
    detail: string;
};
export type UsersNotificationsPartialUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type UsersNotificationsPartialUpdateNotificationErrorComponent = {
    attr: 'notification';
    code: 'invalid_choice' | 'null' | 'required';
    detail: string;
};
export type UsersNotificationsPartialUpdateScopeErrorComponent = {
    attr: 'scope';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null' | 'required';
    detail: string;
};
export type UsersNotificationsPartialUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<UsersNotificationsPartialUpdateError>;
};
export type UsersNotificationsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type UsersNotificationsUpdateError = ({
    attr: 'non_field_errors';
} & UsersNotificationsUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'notification';
} & UsersNotificationsUpdateNotificationErrorComponent) | ({
    attr: 'scope';
} & UsersNotificationsUpdateScopeErrorComponent) | ({
    attr: 'frequency';
} & UsersNotificationsUpdateFrequencyErrorComponent);
export type UsersNotificationsUpdateErrorResponse400 = ({
    type: 'validation_error';
} & UsersNotificationsUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type UsersNotificationsUpdateFrequencyErrorComponent = {
    attr: 'frequency';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null' | 'required';
    detail: string;
};
export type UsersNotificationsUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type UsersNotificationsUpdateNotificationErrorComponent = {
    attr: 'notification';
    code: 'invalid_choice' | 'null' | 'required';
    detail: string;
};
export type UsersNotificationsUpdateScopeErrorComponent = {
    attr: 'scope';
    code: 'invalid_choice' | 'max_value' | 'min_value' | 'null' | 'required';
    detail: string;
};
export type UsersNotificationsUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<UsersNotificationsUpdateError>;
};
export type UsersPartialUpdateError = ({
    attr: 'non_field_errors';
} & UsersPartialUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'full_name';
} & UsersPartialUpdateFullNameErrorComponent) | ({
    attr: 'username';
} & UsersPartialUpdateUsernameErrorComponent);
export type UsersPartialUpdateErrorResponse400 = ({
    type: 'validation_error';
} & UsersPartialUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type UsersPartialUpdateFullNameErrorComponent = {
    attr: 'full_name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type UsersPartialUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type UsersPartialUpdateUsernameErrorComponent = {
    attr: 'username';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type UsersPartialUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<UsersPartialUpdateError>;
};
export type UsersRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type UsersStatisticsRetrieveErrorResponse400 = {
    type: 'client_error';
} & ParseErrorResponse;
export type UsersUpdateError = ({
    attr: 'non_field_errors';
} & UsersUpdateNonFieldErrorsErrorComponent) | ({
    attr: 'full_name';
} & UsersUpdateFullNameErrorComponent) | ({
    attr: 'username';
} & UsersUpdateUsernameErrorComponent);
export type UsersUpdateErrorResponse400 = ({
    type: 'validation_error';
} & UsersUpdateValidationError) | ({
    type: 'client_error';
} & ParseErrorResponse);
export type UsersUpdateFullNameErrorComponent = {
    attr: 'full_name';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed';
    detail: string;
};
export type UsersUpdateNonFieldErrorsErrorComponent = {
    attr: 'non_field_errors';
    code: 'invalid' | 'null';
    detail: string;
};
export type UsersUpdateUsernameErrorComponent = {
    attr: 'username';
    code: 'blank' | 'invalid' | 'max_length' | 'null' | 'null_characters_not_allowed' | 'required' | 'surrogate_characters_not_allowed' | 'unique';
    detail: string;
};
export type UsersUpdateValidationError = {
    type: ValidationErrorEnum;
    errors: Array<UsersUpdateError>;
};
export type ValidationErrorEnum = 'validation_error';
export type VcsEnum = 'gerrit' | 'git' | 'git-force-push' | 'local' | 'mercurial' | 'subversion';
export type Patch200MessageResponseSerializer = {
    message: string;
};
export type Patch400ErrorMessageSerializer = {
    errors: string;
};
export type Post201MessageResponseSerializer = {
    message: string;
};
export type Post400ErrorMessageSerializer = {
    errors: string;
};
export type Put200MessageResponseSerializer = {
    message: string;
};
export type Put400ErrorMessageSerializer = {
    errors: string;
};
export type AddonsListData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
        page?: number;
        page_size?: number;
    };
    url: '/addons/';
};
export type AddonsListErrors = {
    400: AddonsListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type AddonsListError = AddonsListErrors[keyof AddonsListErrors];
export type AddonsListResponses = {
    200: PaginatedAddonList;
};
export type AddonsListResponse = AddonsListResponses[keyof AddonsListResponses];
export type AddonsDestroyData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/addons/{id}/';
};
export type AddonsDestroyErrors = {
    400: AddonsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type AddonsDestroyError = AddonsDestroyErrors[keyof AddonsDestroyErrors];
export type AddonsDestroyResponses = {
    204: void;
};
export type AddonsDestroyResponse = AddonsDestroyResponses[keyof AddonsDestroyResponses];
export type AddonsRetrieveData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/addons/{id}/';
};
export type AddonsRetrieveErrors = {
    400: AddonsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type AddonsRetrieveError = AddonsRetrieveErrors[keyof AddonsRetrieveErrors];
export type AddonsRetrieveResponses = {
    200: Addon;
};
export type AddonsRetrieveResponse = AddonsRetrieveResponses[keyof AddonsRetrieveResponses];
export type AddonsPartialUpdateData = {
    body?: PatchedAddon;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/addons/{id}/';
};
export type AddonsPartialUpdateErrors = {
    400: AddonsPartialUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type AddonsPartialUpdateError2 = AddonsPartialUpdateErrors[keyof AddonsPartialUpdateErrors];
export type AddonsPartialUpdateResponses = {
    200: Addon;
};
export type AddonsPartialUpdateResponse = AddonsPartialUpdateResponses[keyof AddonsPartialUpdateResponses];
export type AddonsUpdateData = {
    body: Addon;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/addons/{id}/';
};
export type AddonsUpdateErrors = {
    400: AddonsUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type AddonsUpdateError2 = AddonsUpdateErrors[keyof AddonsUpdateErrors];
export type AddonsUpdateResponses = {
    200: Addon;
};
export type AddonsUpdateResponse = AddonsUpdateResponses[keyof AddonsUpdateResponses];
export type CategoriesListData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
        page?: number;
        page_size?: number;
    };
    url: '/categories/';
};
export type CategoriesListErrors = {
    400: CategoriesListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type CategoriesListError = CategoriesListErrors[keyof CategoriesListErrors];
export type CategoriesListResponses = {
    200: PaginatedCategoryList;
};
export type CategoriesListResponse = CategoriesListResponses[keyof CategoriesListResponses];
export type CategoriesCreateData = {
    body: Category;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/categories/';
};
export type CategoriesCreateErrors = {
    400: CategoriesCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type CategoriesCreateError2 = CategoriesCreateErrors[keyof CategoriesCreateErrors];
export type CategoriesCreateResponses = {
    201: Category;
};
export type CategoriesCreateResponse = CategoriesCreateResponses[keyof CategoriesCreateResponses];
export type CategoriesDestroyData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/categories/{id}/';
};
export type CategoriesDestroyErrors = {
    400: CategoriesDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type CategoriesDestroyError = CategoriesDestroyErrors[keyof CategoriesDestroyErrors];
export type CategoriesDestroyResponses = {
    204: void;
};
export type CategoriesDestroyResponse = CategoriesDestroyResponses[keyof CategoriesDestroyResponses];
export type CategoriesRetrieveData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/categories/{id}/';
};
export type CategoriesRetrieveErrors = {
    400: CategoriesRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type CategoriesRetrieveError = CategoriesRetrieveErrors[keyof CategoriesRetrieveErrors];
export type CategoriesRetrieveResponses = {
    200: Category;
};
export type CategoriesRetrieveResponse = CategoriesRetrieveResponses[keyof CategoriesRetrieveResponses];
export type CategoriesPartialUpdateData = {
    body?: PatchedCategory;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/categories/{id}/';
};
export type CategoriesPartialUpdateErrors = {
    400: CategoriesPartialUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type CategoriesPartialUpdateError2 = CategoriesPartialUpdateErrors[keyof CategoriesPartialUpdateErrors];
export type CategoriesPartialUpdateResponses = {
    200: Category;
};
export type CategoriesPartialUpdateResponse = CategoriesPartialUpdateResponses[keyof CategoriesPartialUpdateResponses];
export type CategoriesUpdateData = {
    body: Category;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/categories/{id}/';
};
export type CategoriesUpdateErrors = {
    400: CategoriesUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type CategoriesUpdateError2 = CategoriesUpdateErrors[keyof CategoriesUpdateErrors];
export type CategoriesUpdateResponses = {
    200: Category;
};
export type CategoriesUpdateResponse = CategoriesUpdateResponses[keyof CategoriesUpdateResponses];
export type CategoriesStatisticsRetrieveData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json' | 'json-flat';
    };
    url: '/categories/{id}/statistics/';
};
export type CategoriesStatisticsRetrieveErrors = {
    400: CategoriesStatisticsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type CategoriesStatisticsRetrieveError = CategoriesStatisticsRetrieveErrors[keyof CategoriesStatisticsRetrieveErrors];
export type CategoriesStatisticsRetrieveResponses = {
    200: Category;
};
export type CategoriesStatisticsRetrieveResponse = CategoriesStatisticsRetrieveResponses[keyof CategoriesStatisticsRetrieveResponses];
export type ChangesListData = {
    body?: never;
    path?: never;
    query?: {
        action?: Array<0 | 1 | 13 | 14 | 15 | 17 | 18 | 19 | 2 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 3 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 4 | 41 | 42 | 43 | 45 | 46 | 47 | 48 | 49 | 5 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 6 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 7 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 8 | 9>;
        format?: 'csv' | 'json';
        page?: number;
        page_size?: number;
        timestamp_after?: string;
        timestamp_before?: string;
        user?: string;
    };
    url: '/changes/';
};
export type ChangesListErrors = {
    400: ChangesListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ChangesListError2 = ChangesListErrors[keyof ChangesListErrors];
export type ChangesListResponses = {
    200: PaginatedChangeList;
};
export type ChangesListResponse = ChangesListResponses[keyof ChangesListResponses];
export type ChangesRetrieveData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/changes/{id}/';
};
export type ChangesRetrieveErrors = {
    400: ChangesRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ChangesRetrieveError = ChangesRetrieveErrors[keyof ChangesRetrieveErrors];
export type ChangesRetrieveResponses = {
    200: Change;
};
export type ChangesRetrieveResponse = ChangesRetrieveResponses[keyof ChangesRetrieveResponses];
export type ComponentListsListData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
        page?: number;
        page_size?: number;
    };
    url: '/component-lists/';
};
export type ComponentListsListErrors = {
    400: ComponentListsListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentListsListError = ComponentListsListErrors[keyof ComponentListsListErrors];
export type ComponentListsListResponses = {
    200: PaginatedComponentListList;
};
export type ComponentListsListResponse = ComponentListsListResponses[keyof ComponentListsListResponses];
export type ComponentListsCreateData = {
    body: ComponentList;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/component-lists/';
};
export type ComponentListsCreateErrors = {
    400: ComponentListsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentListsCreateError2 = ComponentListsCreateErrors[keyof ComponentListsCreateErrors];
export type ComponentListsCreateResponses = {
    201: ComponentList;
};
export type ComponentListsCreateResponse = ComponentListsCreateResponses[keyof ComponentListsCreateResponses];
export type ComponentListsDestroyData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/component-lists/{slug}/';
};
export type ComponentListsDestroyErrors = {
    400: ComponentListsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentListsDestroyError = ComponentListsDestroyErrors[keyof ComponentListsDestroyErrors];
export type ComponentListsDestroyResponses = {
    204: void;
};
export type ComponentListsDestroyResponse = ComponentListsDestroyResponses[keyof ComponentListsDestroyResponses];
export type ComponentListsRetrieveData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/component-lists/{slug}/';
};
export type ComponentListsRetrieveErrors = {
    400: ComponentListsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentListsRetrieveError = ComponentListsRetrieveErrors[keyof ComponentListsRetrieveErrors];
export type ComponentListsRetrieveResponses = {
    200: ComponentList;
};
export type ComponentListsRetrieveResponse = ComponentListsRetrieveResponses[keyof ComponentListsRetrieveResponses];
export type ComponentListsPartialUpdateData = {
    body?: PatchedComponentList;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/component-lists/{slug}/';
};
export type ComponentListsPartialUpdateErrors = {
    400: ComponentListsPartialUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentListsPartialUpdateError2 = ComponentListsPartialUpdateErrors[keyof ComponentListsPartialUpdateErrors];
export type ComponentListsPartialUpdateResponses = {
    200: ComponentList;
};
export type ComponentListsPartialUpdateResponse = ComponentListsPartialUpdateResponses[keyof ComponentListsPartialUpdateResponses];
export type ComponentListsUpdateData = {
    body: ComponentList;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/component-lists/{slug}/';
};
export type ComponentListsUpdateErrors = {
    400: ComponentListsUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentListsUpdateError2 = ComponentListsUpdateErrors[keyof ComponentListsUpdateErrors];
export type ComponentListsUpdateResponses = {
    200: ComponentList;
};
export type ComponentListsUpdateResponse = ComponentListsUpdateResponses[keyof ComponentListsUpdateResponses];
export type ComponentListsComponentsRetrieveData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/component-lists/{slug}/components/';
};
export type ComponentListsComponentsRetrieveErrors = {
    400: ComponentListsComponentsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentListsComponentsRetrieveError = ComponentListsComponentsRetrieveErrors[keyof ComponentListsComponentsRetrieveErrors];
export type ComponentListsComponentsRetrieveResponses = {
    200: ComponentList;
};
export type ComponentListsComponentsRetrieveResponse = ComponentListsComponentsRetrieveResponses[keyof ComponentListsComponentsRetrieveResponses];
export type ComponentListsComponentsCreateData = {
    body: ComponentList;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/component-lists/{slug}/components/';
};
export type ComponentListsComponentsCreateErrors = {
    400: ComponentListsComponentsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentListsComponentsCreateError2 = ComponentListsComponentsCreateErrors[keyof ComponentListsComponentsCreateErrors];
export type ComponentListsComponentsCreateResponses = {
    200: ComponentList;
};
export type ComponentListsComponentsCreateResponse = ComponentListsComponentsCreateResponses[keyof ComponentListsComponentsCreateResponses];
export type ComponentListsComponentsDestroyData = {
    body?: never;
    path: {
        component_slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/component-lists/{slug}/components/{component_slug}/';
};
export type ComponentListsComponentsDestroyErrors = {
    400: ComponentListsComponentsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentListsComponentsDestroyError = ComponentListsComponentsDestroyErrors[keyof ComponentListsComponentsDestroyErrors];
export type ComponentListsComponentsDestroyResponses = {
    204: void;
};
export type ComponentListsComponentsDestroyResponse = ComponentListsComponentsDestroyResponses[keyof ComponentListsComponentsDestroyResponses];
export type ComponentsListData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
        page?: number;
        page_size?: number;
    };
    url: '/components/';
};
export type ComponentsListErrors = {
    400: ComponentsListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsListError = ComponentsListErrors[keyof ComponentsListErrors];
export type ComponentsListResponses = {
    200: PaginatedComponentList;
};
export type ComponentsListResponse = ComponentsListResponses[keyof ComponentsListResponses];
export type ComponentsDestroyData = {
    body?: never;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/';
};
export type ComponentsDestroyErrors = {
    400: ComponentsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsDestroyError = ComponentsDestroyErrors[keyof ComponentsDestroyErrors];
export type ComponentsDestroyResponses = {
    204: void;
};
export type ComponentsDestroyResponse = ComponentsDestroyResponses[keyof ComponentsDestroyResponses];
export type ComponentsRetrieveData = {
    body?: never;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/';
};
export type ComponentsRetrieveErrors = {
    400: ComponentsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsRetrieveError = ComponentsRetrieveErrors[keyof ComponentsRetrieveErrors];
export type ComponentsRetrieveResponses = {
    200: Component;
};
export type ComponentsRetrieveResponse = ComponentsRetrieveResponses[keyof ComponentsRetrieveResponses];
export type ComponentsPartialUpdateData = {
    body?: PatchedComponent;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/';
};
export type ComponentsPartialUpdateErrors = {
    400: ComponentsPartialUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsPartialUpdateError2 = ComponentsPartialUpdateErrors[keyof ComponentsPartialUpdateErrors];
export type ComponentsPartialUpdateResponses = {
    200: Component;
};
export type ComponentsPartialUpdateResponse = ComponentsPartialUpdateResponses[keyof ComponentsPartialUpdateResponses];
export type ComponentsUpdateData = {
    body: Component;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/';
};
export type ComponentsUpdateErrors = {
    400: ComponentsUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsUpdateError2 = ComponentsUpdateErrors[keyof ComponentsUpdateErrors];
export type ComponentsUpdateResponses = {
    200: Component;
};
export type ComponentsUpdateResponse = ComponentsUpdateResponses[keyof ComponentsUpdateResponses];
export type ComponentsAddonsCreateData = {
    body: Component;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/addons/';
};
export type ComponentsAddonsCreateErrors = {
    400: ComponentsAddonsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsAddonsCreateError2 = ComponentsAddonsCreateErrors[keyof ComponentsAddonsCreateErrors];
export type ComponentsAddonsCreateResponses = {
    200: Component;
};
export type ComponentsAddonsCreateResponse = ComponentsAddonsCreateResponses[keyof ComponentsAddonsCreateResponses];
export type ComponentsChangesRetrieveData = {
    body?: never;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/changes/';
};
export type ComponentsChangesRetrieveErrors = {
    400: ComponentsChangesRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsChangesRetrieveError = ComponentsChangesRetrieveErrors[keyof ComponentsChangesRetrieveErrors];
export type ComponentsChangesRetrieveResponses = {
    200: Component;
};
export type ComponentsChangesRetrieveResponse = ComponentsChangesRetrieveResponses[keyof ComponentsChangesRetrieveResponses];
export type ComponentsCreditsRetrieveData = {
    body?: never;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/credits/';
};
export type ComponentsCreditsRetrieveErrors = {
    400: ComponentsCreditsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsCreditsRetrieveError = ComponentsCreditsRetrieveErrors[keyof ComponentsCreditsRetrieveErrors];
export type ComponentsCreditsRetrieveResponses = {
    200: Component;
};
export type ComponentsCreditsRetrieveResponse = ComponentsCreditsRetrieveResponses[keyof ComponentsCreditsRetrieveResponses];
export type ComponentsFileRetrieveData = {
    body?: never;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/file/';
};
export type ComponentsFileRetrieveErrors = {
    400: ComponentsFileRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsFileRetrieveError = ComponentsFileRetrieveErrors[keyof ComponentsFileRetrieveErrors];
export type ComponentsFileRetrieveResponses = {
    200: Component;
};
export type ComponentsFileRetrieveResponse = ComponentsFileRetrieveResponses[keyof ComponentsFileRetrieveResponses];
export type ComponentsLinksRetrieveData = {
    body?: never;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/links/';
};
export type ComponentsLinksRetrieveErrors = {
    400: ComponentsLinksRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsLinksRetrieveError = ComponentsLinksRetrieveErrors[keyof ComponentsLinksRetrieveErrors];
export type ComponentsLinksRetrieveResponses = {
    200: Component;
};
export type ComponentsLinksRetrieveResponse = ComponentsLinksRetrieveResponses[keyof ComponentsLinksRetrieveResponses];
export type ComponentsLinksCreateData = {
    body: Component;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/links/';
};
export type ComponentsLinksCreateErrors = {
    400: ComponentsLinksCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsLinksCreateError2 = ComponentsLinksCreateErrors[keyof ComponentsLinksCreateErrors];
export type ComponentsLinksCreateResponses = {
    200: Component;
};
export type ComponentsLinksCreateResponse = ComponentsLinksCreateResponses[keyof ComponentsLinksCreateResponses];
export type ComponentsLinksDestroyData = {
    body?: never;
    path: {
        project__slug: string;
        project_slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/links/{project_slug}/';
};
export type ComponentsLinksDestroyErrors = {
    400: ComponentsLinksDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsLinksDestroyError = ComponentsLinksDestroyErrors[keyof ComponentsLinksDestroyErrors];
export type ComponentsLinksDestroyResponses = {
    204: void;
};
export type ComponentsLinksDestroyResponse = ComponentsLinksDestroyResponses[keyof ComponentsLinksDestroyResponses];
export type ComponentsLockRetrieveData = {
    body?: never;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/lock/';
};
export type ComponentsLockRetrieveErrors = {
    400: ComponentsLockRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsLockRetrieveError = ComponentsLockRetrieveErrors[keyof ComponentsLockRetrieveErrors];
export type ComponentsLockRetrieveResponses = {
    200: LockRequest;
};
export type ComponentsLockRetrieveResponse = ComponentsLockRetrieveResponses[keyof ComponentsLockRetrieveResponses];
export type ComponentsLockCreateData = {
    body: LockRequest;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/lock/';
};
export type ComponentsLockCreateErrors = {
    400: ComponentsLockCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsLockCreateError2 = ComponentsLockCreateErrors[keyof ComponentsLockCreateErrors];
export type ComponentsLockCreateResponses = {
    200: LockRequest;
};
export type ComponentsLockCreateResponse = ComponentsLockCreateResponses[keyof ComponentsLockCreateResponses];
export type ComponentsMonolingualBaseRetrieveData = {
    body?: never;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/monolingual_base/';
};
export type ComponentsMonolingualBaseRetrieveErrors = {
    400: ComponentsMonolingualBaseRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsMonolingualBaseRetrieveError = ComponentsMonolingualBaseRetrieveErrors[keyof ComponentsMonolingualBaseRetrieveErrors];
export type ComponentsMonolingualBaseRetrieveResponses = {
    200: Component;
};
export type ComponentsMonolingualBaseRetrieveResponse = ComponentsMonolingualBaseRetrieveResponses[keyof ComponentsMonolingualBaseRetrieveResponses];
export type ComponentsNewTemplateRetrieveData = {
    body?: never;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/new_template/';
};
export type ComponentsNewTemplateRetrieveErrors = {
    400: ComponentsNewTemplateRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsNewTemplateRetrieveError = ComponentsNewTemplateRetrieveErrors[keyof ComponentsNewTemplateRetrieveErrors];
export type ComponentsNewTemplateRetrieveResponses = {
    200: Component;
};
export type ComponentsNewTemplateRetrieveResponse = ComponentsNewTemplateRetrieveResponses[keyof ComponentsNewTemplateRetrieveResponses];
export type ComponentsRepositoryRetrieveData = {
    body?: never;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/repository/';
};
export type ComponentsRepositoryRetrieveErrors = {
    400: ComponentsRepositoryRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsRepositoryRetrieveError = ComponentsRepositoryRetrieveErrors[keyof ComponentsRepositoryRetrieveErrors];
export type ComponentsRepositoryRetrieveResponses = {
    200: RepoRequest;
};
export type ComponentsRepositoryRetrieveResponse = ComponentsRepositoryRetrieveResponses[keyof ComponentsRepositoryRetrieveResponses];
export type ComponentsRepositoryCreateData = {
    body: RepoRequest;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/repository/';
};
export type ComponentsRepositoryCreateErrors = {
    400: ComponentsRepositoryCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsRepositoryCreateError2 = ComponentsRepositoryCreateErrors[keyof ComponentsRepositoryCreateErrors];
export type ComponentsRepositoryCreateResponses = {
    200: RepoRequest;
};
export type ComponentsRepositoryCreateResponse = ComponentsRepositoryCreateResponses[keyof ComponentsRepositoryCreateResponses];
export type ComponentsScreenshotsRetrieveData = {
    body?: never;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/screenshots/';
};
export type ComponentsScreenshotsRetrieveErrors = {
    400: ComponentsScreenshotsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsScreenshotsRetrieveError = ComponentsScreenshotsRetrieveErrors[keyof ComponentsScreenshotsRetrieveErrors];
export type ComponentsScreenshotsRetrieveResponses = {
    200: Component;
};
export type ComponentsScreenshotsRetrieveResponse = ComponentsScreenshotsRetrieveResponses[keyof ComponentsScreenshotsRetrieveResponses];
export type ComponentsStatisticsRetrieveData = {
    body?: never;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json' | 'json-flat';
    };
    url: '/components/{project__slug}/{slug}/statistics/';
};
export type ComponentsStatisticsRetrieveErrors = {
    400: ComponentsStatisticsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsStatisticsRetrieveError = ComponentsStatisticsRetrieveErrors[keyof ComponentsStatisticsRetrieveErrors];
export type ComponentsStatisticsRetrieveResponses = {
    200: Component;
};
export type ComponentsStatisticsRetrieveResponse = ComponentsStatisticsRetrieveResponses[keyof ComponentsStatisticsRetrieveResponses];
export type ComponentsTranslationsRetrieveData = {
    body?: never;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/translations/';
};
export type ComponentsTranslationsRetrieveErrors = {
    400: ComponentsTranslationsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsTranslationsRetrieveError = ComponentsTranslationsRetrieveErrors[keyof ComponentsTranslationsRetrieveErrors];
export type ComponentsTranslationsRetrieveResponses = {
    200: Component;
};
export type ComponentsTranslationsRetrieveResponse = ComponentsTranslationsRetrieveResponses[keyof ComponentsTranslationsRetrieveResponses];
export type ComponentsTranslationsCreateData = {
    body: Component;
    path: {
        project__slug: string;
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/components/{project__slug}/{slug}/translations/';
};
export type ComponentsTranslationsCreateErrors = {
    400: ComponentsTranslationsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ComponentsTranslationsCreateError2 = ComponentsTranslationsCreateErrors[keyof ComponentsTranslationsCreateErrors];
export type ComponentsTranslationsCreateResponses = {
    200: Component;
};
export type ComponentsTranslationsCreateResponse = ComponentsTranslationsCreateResponses[keyof ComponentsTranslationsCreateResponses];
export type GroupsListData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
        page?: number;
        page_size?: number;
    };
    url: '/groups/';
};
export type GroupsListErrors = {
    400: GroupsListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsListError = GroupsListErrors[keyof GroupsListErrors];
export type GroupsListResponses = {
    200: PaginatedGroupList;
};
export type GroupsListResponse = GroupsListResponses[keyof GroupsListResponses];
export type GroupsCreateData = {
    body: Group;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/';
};
export type GroupsCreateErrors = {
    400: GroupsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsCreateError2 = GroupsCreateErrors[keyof GroupsCreateErrors];
export type GroupsCreateResponses = {
    201: Group;
};
export type GroupsCreateResponse = GroupsCreateResponses[keyof GroupsCreateResponses];
export type GroupsDestroyData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/';
};
export type GroupsDestroyErrors = {
    400: GroupsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsDestroyError = GroupsDestroyErrors[keyof GroupsDestroyErrors];
export type GroupsDestroyResponses = {
    204: void;
};
export type GroupsDestroyResponse = GroupsDestroyResponses[keyof GroupsDestroyResponses];
export type GroupsRetrieveData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/';
};
export type GroupsRetrieveErrors = {
    400: GroupsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsRetrieveError = GroupsRetrieveErrors[keyof GroupsRetrieveErrors];
export type GroupsRetrieveResponses = {
    200: Group;
};
export type GroupsRetrieveResponse = GroupsRetrieveResponses[keyof GroupsRetrieveResponses];
export type GroupsPartialUpdateData = {
    body?: PatchedGroup;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/';
};
export type GroupsPartialUpdateErrors = {
    400: GroupsPartialUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsPartialUpdateError2 = GroupsPartialUpdateErrors[keyof GroupsPartialUpdateErrors];
export type GroupsPartialUpdateResponses = {
    200: Group;
};
export type GroupsPartialUpdateResponse = GroupsPartialUpdateResponses[keyof GroupsPartialUpdateResponses];
export type GroupsUpdateData = {
    body: Group;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/';
};
export type GroupsUpdateErrors = {
    400: GroupsUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsUpdateError2 = GroupsUpdateErrors[keyof GroupsUpdateErrors];
export type GroupsUpdateResponses = {
    200: Group;
};
export type GroupsUpdateResponse = GroupsUpdateResponses[keyof GroupsUpdateResponses];
export type GroupsAdminsCreateData = {
    body: Group;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/admins/';
};
export type GroupsAdminsCreateErrors = {
    400: GroupsAdminsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsAdminsCreateError2 = GroupsAdminsCreateErrors[keyof GroupsAdminsCreateErrors];
export type GroupsAdminsCreateResponses = {
    200: Group;
};
export type GroupsAdminsCreateResponse = GroupsAdminsCreateResponses[keyof GroupsAdminsCreateResponses];
export type GroupsAdminsDestroyData = {
    body?: never;
    path: {
        id: string;
        user_pk: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/admins/{user_pk}/';
};
export type GroupsAdminsDestroyErrors = {
    400: GroupsAdminsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsAdminsDestroyError = GroupsAdminsDestroyErrors[keyof GroupsAdminsDestroyErrors];
export type GroupsAdminsDestroyResponses = {
    204: void;
};
export type GroupsAdminsDestroyResponse = GroupsAdminsDestroyResponses[keyof GroupsAdminsDestroyResponses];
export type GroupsComponentlistsCreateData = {
    body: Group;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/componentlists/';
};
export type GroupsComponentlistsCreateErrors = {
    400: GroupsComponentlistsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsComponentlistsCreateError2 = GroupsComponentlistsCreateErrors[keyof GroupsComponentlistsCreateErrors];
export type GroupsComponentlistsCreateResponses = {
    200: Group;
};
export type GroupsComponentlistsCreateResponse = GroupsComponentlistsCreateResponses[keyof GroupsComponentlistsCreateResponses];
export type GroupsComponentlistsDestroyData = {
    body?: never;
    path: {
        component_list_id: string;
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/componentlists/{component_list_id}/';
};
export type GroupsComponentlistsDestroyErrors = {
    400: GroupsComponentlistsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsComponentlistsDestroyError = GroupsComponentlistsDestroyErrors[keyof GroupsComponentlistsDestroyErrors];
export type GroupsComponentlistsDestroyResponses = {
    204: void;
};
export type GroupsComponentlistsDestroyResponse = GroupsComponentlistsDestroyResponses[keyof GroupsComponentlistsDestroyResponses];
export type GroupsComponentsCreateData = {
    body: Group;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/components/';
};
export type GroupsComponentsCreateErrors = {
    400: GroupsComponentsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsComponentsCreateError2 = GroupsComponentsCreateErrors[keyof GroupsComponentsCreateErrors];
export type GroupsComponentsCreateResponses = {
    200: Group;
};
export type GroupsComponentsCreateResponse = GroupsComponentsCreateResponses[keyof GroupsComponentsCreateResponses];
export type GroupsComponentsDestroyData = {
    body?: never;
    path: {
        component_id: string;
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/components/{component_id}/';
};
export type GroupsComponentsDestroyErrors = {
    400: GroupsComponentsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsComponentsDestroyError = GroupsComponentsDestroyErrors[keyof GroupsComponentsDestroyErrors];
export type GroupsComponentsDestroyResponses = {
    204: void;
};
export type GroupsComponentsDestroyResponse = GroupsComponentsDestroyResponses[keyof GroupsComponentsDestroyResponses];
export type GroupsLanguagesCreateData = {
    body: Group;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/languages/';
};
export type GroupsLanguagesCreateErrors = {
    400: GroupsLanguagesCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsLanguagesCreateError2 = GroupsLanguagesCreateErrors[keyof GroupsLanguagesCreateErrors];
export type GroupsLanguagesCreateResponses = {
    200: Group;
};
export type GroupsLanguagesCreateResponse = GroupsLanguagesCreateResponses[keyof GroupsLanguagesCreateResponses];
export type GroupsLanguagesDestroyData = {
    body?: never;
    path: {
        id: string;
        language_code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/languages/{language_code}/';
};
export type GroupsLanguagesDestroyErrors = {
    400: GroupsLanguagesDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsLanguagesDestroyError = GroupsLanguagesDestroyErrors[keyof GroupsLanguagesDestroyErrors];
export type GroupsLanguagesDestroyResponses = {
    204: void;
};
export type GroupsLanguagesDestroyResponse = GroupsLanguagesDestroyResponses[keyof GroupsLanguagesDestroyResponses];
export type GroupsProjectsCreateData = {
    body: Group;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/projects/';
};
export type GroupsProjectsCreateErrors = {
    400: GroupsProjectsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsProjectsCreateError2 = GroupsProjectsCreateErrors[keyof GroupsProjectsCreateErrors];
export type GroupsProjectsCreateResponses = {
    200: Group;
};
export type GroupsProjectsCreateResponse = GroupsProjectsCreateResponses[keyof GroupsProjectsCreateResponses];
export type GroupsProjectsDestroyData = {
    body?: never;
    path: {
        id: string;
        project_id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/projects/{project_id}/';
};
export type GroupsProjectsDestroyErrors = {
    400: GroupsProjectsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsProjectsDestroyError = GroupsProjectsDestroyErrors[keyof GroupsProjectsDestroyErrors];
export type GroupsProjectsDestroyResponses = {
    204: void;
};
export type GroupsProjectsDestroyResponse = GroupsProjectsDestroyResponses[keyof GroupsProjectsDestroyResponses];
export type GroupsRolesCreateData = {
    body: Group;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/roles/';
};
export type GroupsRolesCreateErrors = {
    400: GroupsRolesCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsRolesCreateError2 = GroupsRolesCreateErrors[keyof GroupsRolesCreateErrors];
export type GroupsRolesCreateResponses = {
    200: Group;
};
export type GroupsRolesCreateResponse = GroupsRolesCreateResponses[keyof GroupsRolesCreateResponses];
export type GroupsRolesDestroyData = {
    body?: never;
    path: {
        id: string;
        role_id: number;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/groups/{id}/roles/{role_id}/';
};
export type GroupsRolesDestroyErrors = {
    400: GroupsRolesDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type GroupsRolesDestroyError = GroupsRolesDestroyErrors[keyof GroupsRolesDestroyErrors];
export type GroupsRolesDestroyResponses = {
    204: void;
};
export type GroupsRolesDestroyResponse = GroupsRolesDestroyResponses[keyof GroupsRolesDestroyResponses];
export type LanguagesListData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
        page?: number;
        page_size?: number;
    };
    url: '/languages/';
};
export type LanguagesListErrors = {
    400: LanguagesListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type LanguagesListError = LanguagesListErrors[keyof LanguagesListErrors];
export type LanguagesListResponses = {
    200: PaginatedLanguageList;
};
export type LanguagesListResponse = LanguagesListResponses[keyof LanguagesListResponses];
export type LanguagesCreateData = {
    body: Language;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/languages/';
};
export type LanguagesCreateErrors = {
    400: LanguagesCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type LanguagesCreateError2 = LanguagesCreateErrors[keyof LanguagesCreateErrors];
export type LanguagesCreateResponses = {
    201: Language;
};
export type LanguagesCreateResponse = LanguagesCreateResponses[keyof LanguagesCreateResponses];
export type LanguagesDestroyData = {
    body?: never;
    path: {
        code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/languages/{code}/';
};
export type LanguagesDestroyErrors = {
    400: LanguagesDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type LanguagesDestroyError = LanguagesDestroyErrors[keyof LanguagesDestroyErrors];
export type LanguagesDestroyResponses = {
    204: void;
};
export type LanguagesDestroyResponse = LanguagesDestroyResponses[keyof LanguagesDestroyResponses];
export type LanguagesRetrieveData = {
    body?: never;
    path: {
        code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/languages/{code}/';
};
export type LanguagesRetrieveErrors = {
    400: LanguagesRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type LanguagesRetrieveError = LanguagesRetrieveErrors[keyof LanguagesRetrieveErrors];
export type LanguagesRetrieveResponses = {
    200: Language;
};
export type LanguagesRetrieveResponse = LanguagesRetrieveResponses[keyof LanguagesRetrieveResponses];
export type LanguagesPartialUpdateData = {
    body?: PatchedLanguage;
    path: {
        code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/languages/{code}/';
};
export type LanguagesPartialUpdateErrors = {
    400: LanguagesPartialUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type LanguagesPartialUpdateError2 = LanguagesPartialUpdateErrors[keyof LanguagesPartialUpdateErrors];
export type LanguagesPartialUpdateResponses = {
    200: Language;
};
export type LanguagesPartialUpdateResponse = LanguagesPartialUpdateResponses[keyof LanguagesPartialUpdateResponses];
export type LanguagesUpdateData = {
    body: Language;
    path: {
        code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/languages/{code}/';
};
export type LanguagesUpdateErrors = {
    400: LanguagesUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type LanguagesUpdateError2 = LanguagesUpdateErrors[keyof LanguagesUpdateErrors];
export type LanguagesUpdateResponses = {
    200: Language;
};
export type LanguagesUpdateResponse = LanguagesUpdateResponses[keyof LanguagesUpdateResponses];
export type LanguagesStatisticsRetrieveData = {
    body?: never;
    path: {
        code: string;
    };
    query?: {
        format?: 'csv' | 'json' | 'json-flat';
    };
    url: '/languages/{code}/statistics/';
};
export type LanguagesStatisticsRetrieveErrors = {
    400: LanguagesStatisticsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type LanguagesStatisticsRetrieveError = LanguagesStatisticsRetrieveErrors[keyof LanguagesStatisticsRetrieveErrors];
export type LanguagesStatisticsRetrieveResponses = {
    200: Language;
};
export type LanguagesStatisticsRetrieveResponse = LanguagesStatisticsRetrieveResponses[keyof LanguagesStatisticsRetrieveResponses];
export type MemoryListData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
        page?: number;
        page_size?: number;
    };
    url: '/memory/';
};
export type MemoryListErrors = {
    400: MemoryListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type MemoryListError = MemoryListErrors[keyof MemoryListErrors];
export type MemoryListResponses = {
    200: PaginatedMemoryList;
};
export type MemoryListResponse = MemoryListResponses[keyof MemoryListResponses];
export type MemoryCreateData = {
    body: Memory;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/memory/';
};
export type MemoryCreateErrors = {
    400: MemoryCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type MemoryCreateError2 = MemoryCreateErrors[keyof MemoryCreateErrors];
export type MemoryCreateResponses = {
    201: Memory;
};
export type MemoryCreateResponse = MemoryCreateResponses[keyof MemoryCreateResponses];
export type MemoryDestroyData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/memory/{id}/';
};
export type MemoryDestroyErrors = {
    400: MemoryDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type MemoryDestroyError = MemoryDestroyErrors[keyof MemoryDestroyErrors];
export type MemoryDestroyResponses = {
    204: void;
};
export type MemoryDestroyResponse = MemoryDestroyResponses[keyof MemoryDestroyResponses];
export type MemoryRetrieveData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/memory/{id}/';
};
export type MemoryRetrieveErrors = {
    400: MemoryRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type MemoryRetrieveError = MemoryRetrieveErrors[keyof MemoryRetrieveErrors];
export type MemoryRetrieveResponses = {
    200: Memory;
};
export type MemoryRetrieveResponse = MemoryRetrieveResponses[keyof MemoryRetrieveResponses];
export type MemoryPartialUpdateData = {
    body?: PatchedMemory;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/memory/{id}/';
};
export type MemoryPartialUpdateErrors = {
    400: MemoryPartialUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type MemoryPartialUpdateError2 = MemoryPartialUpdateErrors[keyof MemoryPartialUpdateErrors];
export type MemoryPartialUpdateResponses = {
    200: Memory;
};
export type MemoryPartialUpdateResponse = MemoryPartialUpdateResponses[keyof MemoryPartialUpdateResponses];
export type MemoryUpdateData = {
    body: Memory;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/memory/{id}/';
};
export type MemoryUpdateErrors = {
    400: MemoryUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type MemoryUpdateError2 = MemoryUpdateErrors[keyof MemoryUpdateErrors];
export type MemoryUpdateResponses = {
    200: Memory;
};
export type MemoryUpdateResponse = MemoryUpdateResponses[keyof MemoryUpdateResponses];
export type MetricsRetrieveData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json' | 'openmetrics';
    };
    url: '/metrics/';
};
export type MetricsRetrieveErrors = {
    400: MetricsRetrieveErrorResponse400;
    401: ErrorResponse401;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type MetricsRetrieveError = MetricsRetrieveErrors[keyof MetricsRetrieveErrors];
export type MetricsRetrieveResponses = {
    200: Metrics;
};
export type MetricsRetrieveResponse = MetricsRetrieveResponses[keyof MetricsRetrieveResponses];
export type ProjectsListData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
        page?: number;
        page_size?: number;
    };
    url: '/projects/';
};
export type ProjectsListErrors = {
    400: ProjectsListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsListError = ProjectsListErrors[keyof ProjectsListErrors];
export type ProjectsListResponses = {
    200: PaginatedProjectList;
};
export type ProjectsListResponse = ProjectsListResponses[keyof ProjectsListResponses];
export type ProjectsCreateData = {
    body: Project;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/';
};
export type ProjectsCreateErrors = {
    400: ProjectsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsCreateError2 = ProjectsCreateErrors[keyof ProjectsCreateErrors];
export type ProjectsCreateResponses = {
    201: Project;
};
export type ProjectsCreateResponse = ProjectsCreateResponses[keyof ProjectsCreateResponses];
export type ProjectsDestroyData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/';
};
export type ProjectsDestroyErrors = {
    400: ProjectsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsDestroyError = ProjectsDestroyErrors[keyof ProjectsDestroyErrors];
export type ProjectsDestroyResponses = {
    204: void;
};
export type ProjectsDestroyResponse = ProjectsDestroyResponses[keyof ProjectsDestroyResponses];
export type ProjectsRetrieveData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/';
};
export type ProjectsRetrieveErrors = {
    400: ProjectsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsRetrieveError = ProjectsRetrieveErrors[keyof ProjectsRetrieveErrors];
export type ProjectsRetrieveResponses = {
    200: Project;
};
export type ProjectsRetrieveResponse = ProjectsRetrieveResponses[keyof ProjectsRetrieveResponses];
export type ProjectsPartialUpdateData = {
    body?: PatchedProject;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/';
};
export type ProjectsPartialUpdateErrors = {
    400: ProjectsPartialUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsPartialUpdateError2 = ProjectsPartialUpdateErrors[keyof ProjectsPartialUpdateErrors];
export type ProjectsPartialUpdateResponses = {
    200: Project;
};
export type ProjectsPartialUpdateResponse = ProjectsPartialUpdateResponses[keyof ProjectsPartialUpdateResponses];
export type ProjectsUpdateData = {
    body: Project;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/';
};
export type ProjectsUpdateErrors = {
    400: ProjectsUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsUpdateError2 = ProjectsUpdateErrors[keyof ProjectsUpdateErrors];
export type ProjectsUpdateResponses = {
    200: Project;
};
export type ProjectsUpdateResponse = ProjectsUpdateResponses[keyof ProjectsUpdateResponses];
export type ProjectsAddonsCreateData = {
    body: Project;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/addons/';
};
export type ProjectsAddonsCreateErrors = {
    400: ProjectsAddonsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsAddonsCreateError2 = ProjectsAddonsCreateErrors[keyof ProjectsAddonsCreateErrors];
export type ProjectsAddonsCreateResponses = {
    200: Project;
};
export type ProjectsAddonsCreateResponse = ProjectsAddonsCreateResponses[keyof ProjectsAddonsCreateResponses];
export type ProjectsCategoriesRetrieveData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/categories/';
};
export type ProjectsCategoriesRetrieveErrors = {
    400: ProjectsCategoriesRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsCategoriesRetrieveError = ProjectsCategoriesRetrieveErrors[keyof ProjectsCategoriesRetrieveErrors];
export type ProjectsCategoriesRetrieveResponses = {
    200: Project;
};
export type ProjectsCategoriesRetrieveResponse = ProjectsCategoriesRetrieveResponses[keyof ProjectsCategoriesRetrieveResponses];
export type ProjectsChangesRetrieveData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/changes/';
};
export type ProjectsChangesRetrieveErrors = {
    400: ProjectsChangesRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsChangesRetrieveError = ProjectsChangesRetrieveErrors[keyof ProjectsChangesRetrieveErrors];
export type ProjectsChangesRetrieveResponses = {
    200: Project;
};
export type ProjectsChangesRetrieveResponse = ProjectsChangesRetrieveResponses[keyof ProjectsChangesRetrieveResponses];
export type ProjectsComponentsRetrieveData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/components/';
};
export type ProjectsComponentsRetrieveErrors = {
    400: ProjectsComponentsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsComponentsRetrieveError = ProjectsComponentsRetrieveErrors[keyof ProjectsComponentsRetrieveErrors];
export type ProjectsComponentsRetrieveResponses = {
    200: Component;
};
export type ProjectsComponentsRetrieveResponse = ProjectsComponentsRetrieveResponses[keyof ProjectsComponentsRetrieveResponses];
export type ProjectsComponentsCreateData = {
    body: Component;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/components/';
};
export type ProjectsComponentsCreateErrors = {
    400: ProjectsComponentsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsComponentsCreateError2 = ProjectsComponentsCreateErrors[keyof ProjectsComponentsCreateErrors];
export type ProjectsComponentsCreateResponses = {
    200: Component;
};
export type ProjectsComponentsCreateResponse = ProjectsComponentsCreateResponses[keyof ProjectsComponentsCreateResponses];
export type ProjectsCreditsRetrieveData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/credits/';
};
export type ProjectsCreditsRetrieveErrors = {
    400: ProjectsCreditsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsCreditsRetrieveError = ProjectsCreditsRetrieveErrors[keyof ProjectsCreditsRetrieveErrors];
export type ProjectsCreditsRetrieveResponses = {
    200: Project;
};
export type ProjectsCreditsRetrieveResponse = ProjectsCreditsRetrieveResponses[keyof ProjectsCreditsRetrieveResponses];
export type ProjectsFileRetrieveData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/file/';
};
export type ProjectsFileRetrieveErrors = {
    400: ProjectsFileRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsFileRetrieveError = ProjectsFileRetrieveErrors[keyof ProjectsFileRetrieveErrors];
export type ProjectsFileRetrieveResponses = {
    200: Project;
};
export type ProjectsFileRetrieveResponse = ProjectsFileRetrieveResponses[keyof ProjectsFileRetrieveResponses];
export type ProjectsLabelsRetrieveData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/labels/';
};
export type ProjectsLabelsRetrieveErrors = {
    400: ProjectsLabelsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsLabelsRetrieveError = ProjectsLabelsRetrieveErrors[keyof ProjectsLabelsRetrieveErrors];
export type ProjectsLabelsRetrieveResponses = {
    200: Project;
};
export type ProjectsLabelsRetrieveResponse = ProjectsLabelsRetrieveResponses[keyof ProjectsLabelsRetrieveResponses];
export type ProjectsLabelsCreateData = {
    body: Project;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/labels/';
};
export type ProjectsLabelsCreateErrors = {
    400: ProjectsLabelsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsLabelsCreateError2 = ProjectsLabelsCreateErrors[keyof ProjectsLabelsCreateErrors];
export type ProjectsLabelsCreateResponses = {
    200: Project;
};
export type ProjectsLabelsCreateResponse = ProjectsLabelsCreateResponses[keyof ProjectsLabelsCreateResponses];
export type ProjectsLanguagesRetrieveData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json' | 'json-flat';
    };
    url: '/projects/{slug}/languages/';
};
export type ProjectsLanguagesRetrieveErrors = {
    400: ProjectsLanguagesRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsLanguagesRetrieveError = ProjectsLanguagesRetrieveErrors[keyof ProjectsLanguagesRetrieveErrors];
export type ProjectsLanguagesRetrieveResponses = {
    200: Project;
};
export type ProjectsLanguagesRetrieveResponse = ProjectsLanguagesRetrieveResponses[keyof ProjectsLanguagesRetrieveResponses];
export type ProjectsMachinerySettingsRetrieveData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/machinery_settings/';
};
export type ProjectsMachinerySettingsRetrieveErrors = {
    400: ProjectsMachinerySettingsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsMachinerySettingsRetrieveError = ProjectsMachinerySettingsRetrieveErrors[keyof ProjectsMachinerySettingsRetrieveErrors];
export type ProjectsMachinerySettingsRetrieveResponses = {
    200: ProjectMachinerySettings;
};
export type ProjectsMachinerySettingsRetrieveResponse = ProjectsMachinerySettingsRetrieveResponses[keyof ProjectsMachinerySettingsRetrieveResponses];
export type ProjectsMachinerySettingsPartialUpdateData = {
    body?: PatchedSingleServiceConfig;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/machinery_settings/';
};
export type ProjectsMachinerySettingsPartialUpdateErrors = {
    400: Patch400ErrorMessageSerializer;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsMachinerySettingsPartialUpdateError = ProjectsMachinerySettingsPartialUpdateErrors[keyof ProjectsMachinerySettingsPartialUpdateErrors];
export type ProjectsMachinerySettingsPartialUpdateResponses = {
    200: Patch200MessageResponseSerializer;
};
export type ProjectsMachinerySettingsPartialUpdateResponse = ProjectsMachinerySettingsPartialUpdateResponses[keyof ProjectsMachinerySettingsPartialUpdateResponses];
export type ProjectsMachinerySettingsCreateData = {
    body: SingleServiceConfig;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/machinery_settings/';
};
export type ProjectsMachinerySettingsCreateErrors = {
    400: Post400ErrorMessageSerializer;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsMachinerySettingsCreateError = ProjectsMachinerySettingsCreateErrors[keyof ProjectsMachinerySettingsCreateErrors];
export type ProjectsMachinerySettingsCreateResponses = {
    201: Post201MessageResponseSerializer;
};
export type ProjectsMachinerySettingsCreateResponse = ProjectsMachinerySettingsCreateResponses[keyof ProjectsMachinerySettingsCreateResponses];
export type ProjectsMachinerySettingsUpdateData = {
    body?: ProjectMachinerySettings;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/machinery_settings/';
};
export type ProjectsMachinerySettingsUpdateErrors = {
    400: Put400ErrorMessageSerializer;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsMachinerySettingsUpdateError = ProjectsMachinerySettingsUpdateErrors[keyof ProjectsMachinerySettingsUpdateErrors];
export type ProjectsMachinerySettingsUpdateResponses = {
    200: Put200MessageResponseSerializer;
};
export type ProjectsMachinerySettingsUpdateResponse = ProjectsMachinerySettingsUpdateResponses[keyof ProjectsMachinerySettingsUpdateResponses];
export type ProjectsRepositoryRetrieveData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/repository/';
};
export type ProjectsRepositoryRetrieveErrors = {
    400: ProjectsRepositoryRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsRepositoryRetrieveError = ProjectsRepositoryRetrieveErrors[keyof ProjectsRepositoryRetrieveErrors];
export type ProjectsRepositoryRetrieveResponses = {
    200: RepoRequest;
};
export type ProjectsRepositoryRetrieveResponse = ProjectsRepositoryRetrieveResponses[keyof ProjectsRepositoryRetrieveResponses];
export type ProjectsRepositoryCreateData = {
    body: RepoRequest;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/projects/{slug}/repository/';
};
export type ProjectsRepositoryCreateErrors = {
    400: ProjectsRepositoryCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsRepositoryCreateError2 = ProjectsRepositoryCreateErrors[keyof ProjectsRepositoryCreateErrors];
export type ProjectsRepositoryCreateResponses = {
    200: RepoRequest;
};
export type ProjectsRepositoryCreateResponse = ProjectsRepositoryCreateResponses[keyof ProjectsRepositoryCreateResponses];
export type ProjectsStatisticsRetrieveData = {
    body?: never;
    path: {
        slug: string;
    };
    query?: {
        format?: 'csv' | 'json' | 'json-flat';
    };
    url: '/projects/{slug}/statistics/';
};
export type ProjectsStatisticsRetrieveErrors = {
    400: ProjectsStatisticsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ProjectsStatisticsRetrieveError = ProjectsStatisticsRetrieveErrors[keyof ProjectsStatisticsRetrieveErrors];
export type ProjectsStatisticsRetrieveResponses = {
    200: Project;
};
export type ProjectsStatisticsRetrieveResponse = ProjectsStatisticsRetrieveResponses[keyof ProjectsStatisticsRetrieveResponses];
export type RolesListData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
        page?: number;
        page_size?: number;
    };
    url: '/roles/';
};
export type RolesListErrors = {
    400: RolesListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type RolesListError = RolesListErrors[keyof RolesListErrors];
export type RolesListResponses = {
    200: PaginatedRoleList;
};
export type RolesListResponse = RolesListResponses[keyof RolesListResponses];
export type RolesCreateData = {
    body: Role;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/roles/';
};
export type RolesCreateErrors = {
    400: RolesCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type RolesCreateError2 = RolesCreateErrors[keyof RolesCreateErrors];
export type RolesCreateResponses = {
    201: Role;
};
export type RolesCreateResponse = RolesCreateResponses[keyof RolesCreateResponses];
export type RolesDestroyData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/roles/{id}/';
};
export type RolesDestroyErrors = {
    400: RolesDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type RolesDestroyError = RolesDestroyErrors[keyof RolesDestroyErrors];
export type RolesDestroyResponses = {
    204: void;
};
export type RolesDestroyResponse = RolesDestroyResponses[keyof RolesDestroyResponses];
export type RolesRetrieveData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/roles/{id}/';
};
export type RolesRetrieveErrors = {
    400: RolesRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type RolesRetrieveError = RolesRetrieveErrors[keyof RolesRetrieveErrors];
export type RolesRetrieveResponses = {
    200: Role;
};
export type RolesRetrieveResponse = RolesRetrieveResponses[keyof RolesRetrieveResponses];
export type RolesPartialUpdateData = {
    body?: PatchedRole;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/roles/{id}/';
};
export type RolesPartialUpdateErrors = {
    400: RolesPartialUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type RolesPartialUpdateError2 = RolesPartialUpdateErrors[keyof RolesPartialUpdateErrors];
export type RolesPartialUpdateResponses = {
    200: Role;
};
export type RolesPartialUpdateResponse = RolesPartialUpdateResponses[keyof RolesPartialUpdateResponses];
export type RolesUpdateData = {
    body: Role;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/roles/{id}/';
};
export type RolesUpdateErrors = {
    400: RolesUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type RolesUpdateError2 = RolesUpdateErrors[keyof RolesUpdateErrors];
export type RolesUpdateResponses = {
    200: Role;
};
export type RolesUpdateResponse = RolesUpdateResponses[keyof RolesUpdateResponses];
export type ScreenshotsListData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
        page?: number;
        page_size?: number;
    };
    url: '/screenshots/';
};
export type ScreenshotsListErrors = {
    400: ScreenshotsListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ScreenshotsListError = ScreenshotsListErrors[keyof ScreenshotsListErrors];
export type ScreenshotsListResponses = {
    200: PaginatedScreenshotList;
};
export type ScreenshotsListResponse = ScreenshotsListResponses[keyof ScreenshotsListResponses];
export type ScreenshotsCreateData = {
    body: Screenshot;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/screenshots/';
};
export type ScreenshotsCreateErrors = {
    400: ScreenshotsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ScreenshotsCreateError2 = ScreenshotsCreateErrors[keyof ScreenshotsCreateErrors];
export type ScreenshotsCreateResponses = {
    201: Screenshot;
};
export type ScreenshotsCreateResponse = ScreenshotsCreateResponses[keyof ScreenshotsCreateResponses];
export type ScreenshotsDestroyData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/screenshots/{id}/';
};
export type ScreenshotsDestroyErrors = {
    400: ScreenshotsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ScreenshotsDestroyError = ScreenshotsDestroyErrors[keyof ScreenshotsDestroyErrors];
export type ScreenshotsDestroyResponses = {
    204: void;
};
export type ScreenshotsDestroyResponse = ScreenshotsDestroyResponses[keyof ScreenshotsDestroyResponses];
export type ScreenshotsRetrieveData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/screenshots/{id}/';
};
export type ScreenshotsRetrieveErrors = {
    400: ScreenshotsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ScreenshotsRetrieveError = ScreenshotsRetrieveErrors[keyof ScreenshotsRetrieveErrors];
export type ScreenshotsRetrieveResponses = {
    200: Screenshot;
};
export type ScreenshotsRetrieveResponse = ScreenshotsRetrieveResponses[keyof ScreenshotsRetrieveResponses];
export type ScreenshotsPartialUpdateData = {
    body?: PatchedScreenshot;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/screenshots/{id}/';
};
export type ScreenshotsPartialUpdateErrors = {
    400: ScreenshotsPartialUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ScreenshotsPartialUpdateError2 = ScreenshotsPartialUpdateErrors[keyof ScreenshotsPartialUpdateErrors];
export type ScreenshotsPartialUpdateResponses = {
    200: Screenshot;
};
export type ScreenshotsPartialUpdateResponse = ScreenshotsPartialUpdateResponses[keyof ScreenshotsPartialUpdateResponses];
export type ScreenshotsUpdateData = {
    body: Screenshot;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/screenshots/{id}/';
};
export type ScreenshotsUpdateErrors = {
    400: ScreenshotsUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ScreenshotsUpdateError2 = ScreenshotsUpdateErrors[keyof ScreenshotsUpdateErrors];
export type ScreenshotsUpdateResponses = {
    200: Screenshot;
};
export type ScreenshotsUpdateResponse = ScreenshotsUpdateResponses[keyof ScreenshotsUpdateResponses];
export type ScreenshotsFileRetrieveData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/screenshots/{id}/file/';
};
export type ScreenshotsFileRetrieveErrors = {
    400: ScreenshotsFileRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ScreenshotsFileRetrieveError = ScreenshotsFileRetrieveErrors[keyof ScreenshotsFileRetrieveErrors];
export type ScreenshotsFileRetrieveResponses = {
    200: ScreenshotFile;
};
export type ScreenshotsFileRetrieveResponse = ScreenshotsFileRetrieveResponses[keyof ScreenshotsFileRetrieveResponses];
export type ScreenshotsFileCreateData = {
    body: ScreenshotFile;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/screenshots/{id}/file/';
};
export type ScreenshotsFileCreateErrors = {
    400: ScreenshotsFileCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ScreenshotsFileCreateError2 = ScreenshotsFileCreateErrors[keyof ScreenshotsFileCreateErrors];
export type ScreenshotsFileCreateResponses = {
    200: ScreenshotFile;
};
export type ScreenshotsFileCreateResponse = ScreenshotsFileCreateResponses[keyof ScreenshotsFileCreateResponses];
export type ScreenshotsFileUpdateData = {
    body: ScreenshotFile;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/screenshots/{id}/file/';
};
export type ScreenshotsFileUpdateErrors = {
    400: ScreenshotsFileUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ScreenshotsFileUpdateError2 = ScreenshotsFileUpdateErrors[keyof ScreenshotsFileUpdateErrors];
export type ScreenshotsFileUpdateResponses = {
    200: ScreenshotFile;
};
export type ScreenshotsFileUpdateResponse = ScreenshotsFileUpdateResponses[keyof ScreenshotsFileUpdateResponses];
export type ScreenshotsUnitsCreateData = {
    body: Screenshot;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/screenshots/{id}/units/';
};
export type ScreenshotsUnitsCreateErrors = {
    400: ScreenshotsUnitsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ScreenshotsUnitsCreateError2 = ScreenshotsUnitsCreateErrors[keyof ScreenshotsUnitsCreateErrors];
export type ScreenshotsUnitsCreateResponses = {
    200: Screenshot;
};
export type ScreenshotsUnitsCreateResponse = ScreenshotsUnitsCreateResponses[keyof ScreenshotsUnitsCreateResponses];
export type ScreenshotsUnitsDestroyData = {
    body?: never;
    path: {
        id: string;
        unit_id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/screenshots/{id}/units/{unit_id}/';
};
export type ScreenshotsUnitsDestroyErrors = {
    400: ScreenshotsUnitsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type ScreenshotsUnitsDestroyError = ScreenshotsUnitsDestroyErrors[keyof ScreenshotsUnitsDestroyErrors];
export type ScreenshotsUnitsDestroyResponses = {
    204: void;
};
export type ScreenshotsUnitsDestroyResponse = ScreenshotsUnitsDestroyResponses[keyof ScreenshotsUnitsDestroyResponses];
export type SearchRetrieveData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/search/';
};
export type SearchRetrieveErrors = {
    400: SearchRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type SearchRetrieveError = SearchRetrieveErrors[keyof SearchRetrieveErrors];
export type SearchRetrieveResponses = {
    200: unknown;
};
export type TasksDestroyData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/tasks/{id}/';
};
export type TasksDestroyErrors = {
    400: TasksDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TasksDestroyError = TasksDestroyErrors[keyof TasksDestroyErrors];
export type TasksDestroyResponses = {
    204: void;
};
export type TasksDestroyResponse = TasksDestroyResponses[keyof TasksDestroyResponses];
export type TasksRetrieveData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/tasks/{id}/';
};
export type TasksRetrieveErrors = {
    400: TasksRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TasksRetrieveError = TasksRetrieveErrors[keyof TasksRetrieveErrors];
export type TasksRetrieveResponses = {
    200: unknown;
};
export type TranslationsListData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
        page?: number;
        page_size?: number;
    };
    url: '/translations/';
};
export type TranslationsListErrors = {
    400: TranslationsListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TranslationsListError = TranslationsListErrors[keyof TranslationsListErrors];
export type TranslationsListResponses = {
    200: PaginatedTranslationList;
};
export type TranslationsListResponse = TranslationsListResponses[keyof TranslationsListResponses];
export type TranslationsDestroyData = {
    body?: never;
    path: {
        component__project__slug: string;
        component__slug: string;
        language__code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/translations/{component__project__slug}/{component__slug}/{language__code}/';
};
export type TranslationsDestroyErrors = {
    400: TranslationsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TranslationsDestroyError = TranslationsDestroyErrors[keyof TranslationsDestroyErrors];
export type TranslationsDestroyResponses = {
    204: void;
};
export type TranslationsDestroyResponse = TranslationsDestroyResponses[keyof TranslationsDestroyResponses];
export type TranslationsRetrieveData = {
    body?: never;
    path: {
        component__project__slug: string;
        component__slug: string;
        language__code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/translations/{component__project__slug}/{component__slug}/{language__code}/';
};
export type TranslationsRetrieveErrors = {
    400: TranslationsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TranslationsRetrieveError = TranslationsRetrieveErrors[keyof TranslationsRetrieveErrors];
export type TranslationsRetrieveResponses = {
    200: Translation;
};
export type TranslationsRetrieveResponse = TranslationsRetrieveResponses[keyof TranslationsRetrieveResponses];
export type TranslationsAutotranslateCreateData = {
    body: Translation;
    path: {
        component__project__slug: string;
        component__slug: string;
        language__code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/translations/{component__project__slug}/{component__slug}/{language__code}/autotranslate/';
};
export type TranslationsAutotranslateCreateErrors = {
    400: TranslationsAutotranslateCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TranslationsAutotranslateCreateError2 = TranslationsAutotranslateCreateErrors[keyof TranslationsAutotranslateCreateErrors];
export type TranslationsAutotranslateCreateResponses = {
    200: Translation;
};
export type TranslationsAutotranslateCreateResponse = TranslationsAutotranslateCreateResponses[keyof TranslationsAutotranslateCreateResponses];
export type TranslationsChangesRetrieveData = {
    body?: never;
    path: {
        component__project__slug: string;
        component__slug: string;
        language__code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/translations/{component__project__slug}/{component__slug}/{language__code}/changes/';
};
export type TranslationsChangesRetrieveErrors = {
    400: TranslationsChangesRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TranslationsChangesRetrieveError = TranslationsChangesRetrieveErrors[keyof TranslationsChangesRetrieveErrors];
export type TranslationsChangesRetrieveResponses = {
    200: Translation;
};
export type TranslationsChangesRetrieveResponse = TranslationsChangesRetrieveResponses[keyof TranslationsChangesRetrieveResponses];
export type TranslationsFileRetrieveData = {
    body?: never;
    path: {
        component__project__slug: string;
        component__slug: string;
        language__code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/translations/{component__project__slug}/{component__slug}/{language__code}/file/';
};
export type TranslationsFileRetrieveErrors = {
    400: TranslationsFileRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TranslationsFileRetrieveError = TranslationsFileRetrieveErrors[keyof TranslationsFileRetrieveErrors];
export type TranslationsFileRetrieveResponses = {
    200: UploadRequest;
};
export type TranslationsFileRetrieveResponse = TranslationsFileRetrieveResponses[keyof TranslationsFileRetrieveResponses];
export type TranslationsFileCreateData = {
    body: UploadRequest;
    path: {
        component__project__slug: string;
        component__slug: string;
        language__code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/translations/{component__project__slug}/{component__slug}/{language__code}/file/';
};
export type TranslationsFileCreateErrors = {
    400: TranslationsFileCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TranslationsFileCreateError2 = TranslationsFileCreateErrors[keyof TranslationsFileCreateErrors];
export type TranslationsFileCreateResponses = {
    200: UploadRequest;
};
export type TranslationsFileCreateResponse = TranslationsFileCreateResponses[keyof TranslationsFileCreateResponses];
export type TranslationsFileUpdateData = {
    body: UploadRequest;
    path: {
        component__project__slug: string;
        component__slug: string;
        language__code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/translations/{component__project__slug}/{component__slug}/{language__code}/file/';
};
export type TranslationsFileUpdateErrors = {
    400: TranslationsFileUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TranslationsFileUpdateError2 = TranslationsFileUpdateErrors[keyof TranslationsFileUpdateErrors];
export type TranslationsFileUpdateResponses = {
    200: UploadRequest;
};
export type TranslationsFileUpdateResponse = TranslationsFileUpdateResponses[keyof TranslationsFileUpdateResponses];
export type TranslationsRepositoryRetrieveData = {
    body?: never;
    path: {
        component__project__slug: string;
        component__slug: string;
        language__code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/translations/{component__project__slug}/{component__slug}/{language__code}/repository/';
};
export type TranslationsRepositoryRetrieveErrors = {
    400: TranslationsRepositoryRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TranslationsRepositoryRetrieveError = TranslationsRepositoryRetrieveErrors[keyof TranslationsRepositoryRetrieveErrors];
export type TranslationsRepositoryRetrieveResponses = {
    200: RepoRequest;
};
export type TranslationsRepositoryRetrieveResponse = TranslationsRepositoryRetrieveResponses[keyof TranslationsRepositoryRetrieveResponses];
export type TranslationsRepositoryCreateData = {
    body: RepoRequest;
    path: {
        component__project__slug: string;
        component__slug: string;
        language__code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/translations/{component__project__slug}/{component__slug}/{language__code}/repository/';
};
export type TranslationsRepositoryCreateErrors = {
    400: TranslationsRepositoryCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TranslationsRepositoryCreateError2 = TranslationsRepositoryCreateErrors[keyof TranslationsRepositoryCreateErrors];
export type TranslationsRepositoryCreateResponses = {
    200: RepoRequest;
};
export type TranslationsRepositoryCreateResponse = TranslationsRepositoryCreateResponses[keyof TranslationsRepositoryCreateResponses];
export type TranslationsStatisticsRetrieveData = {
    body?: never;
    path: {
        component__project__slug: string;
        component__slug: string;
        language__code: string;
    };
    query?: {
        format?: 'csv' | 'json' | 'json-flat';
    };
    url: '/translations/{component__project__slug}/{component__slug}/{language__code}/statistics/';
};
export type TranslationsStatisticsRetrieveErrors = {
    400: TranslationsStatisticsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TranslationsStatisticsRetrieveError = TranslationsStatisticsRetrieveErrors[keyof TranslationsStatisticsRetrieveErrors];
export type TranslationsStatisticsRetrieveResponses = {
    200: Translation;
};
export type TranslationsStatisticsRetrieveResponse = TranslationsStatisticsRetrieveResponses[keyof TranslationsStatisticsRetrieveResponses];
export type TranslationsUnitsRetrieveData = {
    body?: never;
    path: {
        component__project__slug: string;
        component__slug: string;
        language__code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/translations/{component__project__slug}/{component__slug}/{language__code}/units/';
};
export type TranslationsUnitsRetrieveErrors = {
    400: TranslationsUnitsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TranslationsUnitsRetrieveError = TranslationsUnitsRetrieveErrors[keyof TranslationsUnitsRetrieveErrors];
export type TranslationsUnitsRetrieveResponses = {
    200: Translation;
};
export type TranslationsUnitsRetrieveResponse = TranslationsUnitsRetrieveResponses[keyof TranslationsUnitsRetrieveResponses];
export type TranslationsUnitsCreateData = {
    body: Translation;
    path: {
        component__project__slug: string;
        component__slug: string;
        language__code: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/translations/{component__project__slug}/{component__slug}/{language__code}/units/';
};
export type TranslationsUnitsCreateErrors = {
    400: TranslationsUnitsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type TranslationsUnitsCreateError2 = TranslationsUnitsCreateErrors[keyof TranslationsUnitsCreateErrors];
export type TranslationsUnitsCreateResponses = {
    200: Translation;
};
export type TranslationsUnitsCreateResponse = TranslationsUnitsCreateResponses[keyof TranslationsUnitsCreateResponses];
export type UnitsListData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
        page?: number;
        page_size?: number;
    };
    url: '/units/';
};
export type UnitsListErrors = {
    400: UnitsListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UnitsListError = UnitsListErrors[keyof UnitsListErrors];
export type UnitsListResponses = {
    200: PaginatedUnitList;
};
export type UnitsListResponse = UnitsListResponses[keyof UnitsListResponses];
export type UnitsDestroyData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/units/{id}/';
};
export type UnitsDestroyErrors = {
    400: UnitsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UnitsDestroyError = UnitsDestroyErrors[keyof UnitsDestroyErrors];
export type UnitsDestroyResponses = {
    204: void;
};
export type UnitsDestroyResponse = UnitsDestroyResponses[keyof UnitsDestroyResponses];
export type UnitsRetrieveData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/units/{id}/';
};
export type UnitsRetrieveErrors = {
    400: UnitsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UnitsRetrieveError = UnitsRetrieveErrors[keyof UnitsRetrieveErrors];
export type UnitsRetrieveResponses = {
    200: Unit;
};
export type UnitsRetrieveResponse = UnitsRetrieveResponses[keyof UnitsRetrieveResponses];
export type UnitsPartialUpdateData = {
    body?: PatchedUnitWrite;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/units/{id}/';
};
export type UnitsPartialUpdateErrors = {
    400: UnitsPartialUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UnitsPartialUpdateError2 = UnitsPartialUpdateErrors[keyof UnitsPartialUpdateErrors];
export type UnitsPartialUpdateResponses = {
    200: UnitWrite;
};
export type UnitsPartialUpdateResponse = UnitsPartialUpdateResponses[keyof UnitsPartialUpdateResponses];
export type UnitsUpdateData = {
    body: UnitWrite;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/units/{id}/';
};
export type UnitsUpdateErrors = {
    400: UnitsUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UnitsUpdateError2 = UnitsUpdateErrors[keyof UnitsUpdateErrors];
export type UnitsUpdateResponses = {
    200: UnitWrite;
};
export type UnitsUpdateResponse = UnitsUpdateResponses[keyof UnitsUpdateResponses];
export type UnitsTranslationsRetrieveData = {
    body?: never;
    path: {
        id: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/units/{id}/translations/';
};
export type UnitsTranslationsRetrieveErrors = {
    400: UnitsTranslationsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UnitsTranslationsRetrieveError = UnitsTranslationsRetrieveErrors[keyof UnitsTranslationsRetrieveErrors];
export type UnitsTranslationsRetrieveResponses = {
    200: UnitWrite;
};
export type UnitsTranslationsRetrieveResponse = UnitsTranslationsRetrieveResponses[keyof UnitsTranslationsRetrieveResponses];
export type UsersListData = {
    body?: never;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
        id?: number;
        page?: number;
        page_size?: number;
        username?: string;
    };
    url: '/users/';
};
export type UsersListErrors = {
    400: UsersListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersListError2 = UsersListErrors[keyof UsersListErrors];
export type UsersListResponses = {
    200: PaginatedBasicUserList;
};
export type UsersListResponse = UsersListResponses[keyof UsersListResponses];
export type UsersCreateData = {
    body: BasicUser;
    path?: never;
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/users/';
};
export type UsersCreateErrors = {
    400: UsersCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersCreateError2 = UsersCreateErrors[keyof UsersCreateErrors];
export type UsersCreateResponses = {
    201: BasicUser;
};
export type UsersCreateResponse = UsersCreateResponses[keyof UsersCreateResponses];
export type UsersDestroyData = {
    body?: never;
    path: {
        username: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/users/{username}/';
};
export type UsersDestroyErrors = {
    400: UsersDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersDestroyError = UsersDestroyErrors[keyof UsersDestroyErrors];
export type UsersDestroyResponses = {
    204: void;
};
export type UsersDestroyResponse = UsersDestroyResponses[keyof UsersDestroyResponses];
export type UsersRetrieveData = {
    body?: never;
    path: {
        username: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/users/{username}/';
};
export type UsersRetrieveErrors = {
    400: UsersRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersRetrieveError = UsersRetrieveErrors[keyof UsersRetrieveErrors];
export type UsersRetrieveResponses = {
    200: BasicUser;
};
export type UsersRetrieveResponse = UsersRetrieveResponses[keyof UsersRetrieveResponses];
export type UsersPartialUpdateData = {
    body?: PatchedBasicUser;
    path: {
        username: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/users/{username}/';
};
export type UsersPartialUpdateErrors = {
    400: UsersPartialUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersPartialUpdateError2 = UsersPartialUpdateErrors[keyof UsersPartialUpdateErrors];
export type UsersPartialUpdateResponses = {
    200: BasicUser;
};
export type UsersPartialUpdateResponse = UsersPartialUpdateResponses[keyof UsersPartialUpdateResponses];
export type UsersUpdateData = {
    body: BasicUser;
    path: {
        username: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/users/{username}/';
};
export type UsersUpdateErrors = {
    400: UsersUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersUpdateError2 = UsersUpdateErrors[keyof UsersUpdateErrors];
export type UsersUpdateResponses = {
    200: BasicUser;
};
export type UsersUpdateResponse = UsersUpdateResponses[keyof UsersUpdateResponses];
export type UsersGroupsDestroyData = {
    body?: never;
    path: {
        username: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/users/{username}/groups/';
};
export type UsersGroupsDestroyErrors = {
    400: UsersGroupsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersGroupsDestroyError = UsersGroupsDestroyErrors[keyof UsersGroupsDestroyErrors];
export type UsersGroupsDestroyResponses = {
    204: void;
};
export type UsersGroupsDestroyResponse = UsersGroupsDestroyResponses[keyof UsersGroupsDestroyResponses];
export type UsersGroupsCreateData = {
    body: BasicUser;
    path: {
        username: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/users/{username}/groups/';
};
export type UsersGroupsCreateErrors = {
    400: UsersGroupsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersGroupsCreateError2 = UsersGroupsCreateErrors[keyof UsersGroupsCreateErrors];
export type UsersGroupsCreateResponses = {
    200: BasicUser;
};
export type UsersGroupsCreateResponse = UsersGroupsCreateResponses[keyof UsersGroupsCreateResponses];
export type UsersNotificationsListData = {
    body?: never;
    path: {
        username: string;
    };
    query?: {
        format?: 'csv' | 'json';
        id?: number;
        page?: number;
        page_size?: number;
        username?: string;
    };
    url: '/users/{username}/notifications/';
};
export type UsersNotificationsListErrors = {
    400: UsersNotificationsListErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersNotificationsListError2 = UsersNotificationsListErrors[keyof UsersNotificationsListErrors];
export type UsersNotificationsListResponses = {
    200: PaginatedNotificationList;
};
export type UsersNotificationsListResponse = UsersNotificationsListResponses[keyof UsersNotificationsListResponses];
export type UsersNotificationsCreateData = {
    body: Notification;
    path: {
        username: string;
    };
    query?: {
        format?: 'csv' | 'json';
        id?: number;
        page?: number;
        page_size?: number;
        username?: string;
    };
    url: '/users/{username}/notifications/';
};
export type UsersNotificationsCreateErrors = {
    400: UsersNotificationsCreateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersNotificationsCreateError2 = UsersNotificationsCreateErrors[keyof UsersNotificationsCreateErrors];
export type UsersNotificationsCreateResponses = {
    200: PaginatedNotificationList;
};
export type UsersNotificationsCreateResponse = UsersNotificationsCreateResponses[keyof UsersNotificationsCreateResponses];
export type UsersNotificationsDestroyData = {
    body?: never;
    path: {
        subscription_id: number;
        username: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/users/{username}/notifications/{subscription_id}/';
};
export type UsersNotificationsDestroyErrors = {
    400: UsersNotificationsDestroyErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersNotificationsDestroyError = UsersNotificationsDestroyErrors[keyof UsersNotificationsDestroyErrors];
export type UsersNotificationsDestroyResponses = {
    204: void;
};
export type UsersNotificationsDestroyResponse = UsersNotificationsDestroyResponses[keyof UsersNotificationsDestroyResponses];
export type UsersNotificationsRetrieveData = {
    body?: never;
    path: {
        subscription_id: number;
        username: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/users/{username}/notifications/{subscription_id}/';
};
export type UsersNotificationsRetrieveErrors = {
    400: UsersNotificationsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersNotificationsRetrieveError = UsersNotificationsRetrieveErrors[keyof UsersNotificationsRetrieveErrors];
export type UsersNotificationsRetrieveResponses = {
    200: Notification;
};
export type UsersNotificationsRetrieveResponse = UsersNotificationsRetrieveResponses[keyof UsersNotificationsRetrieveResponses];
export type UsersNotificationsPartialUpdateData = {
    body?: PatchedNotification;
    path: {
        subscription_id: number;
        username: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/users/{username}/notifications/{subscription_id}/';
};
export type UsersNotificationsPartialUpdateErrors = {
    400: UsersNotificationsPartialUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersNotificationsPartialUpdateError2 = UsersNotificationsPartialUpdateErrors[keyof UsersNotificationsPartialUpdateErrors];
export type UsersNotificationsPartialUpdateResponses = {
    200: Notification;
};
export type UsersNotificationsPartialUpdateResponse = UsersNotificationsPartialUpdateResponses[keyof UsersNotificationsPartialUpdateResponses];
export type UsersNotificationsUpdateData = {
    body: Notification;
    path: {
        subscription_id: number;
        username: string;
    };
    query?: {
        format?: 'csv' | 'json';
    };
    url: '/users/{username}/notifications/{subscription_id}/';
};
export type UsersNotificationsUpdateErrors = {
    400: UsersNotificationsUpdateErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersNotificationsUpdateError2 = UsersNotificationsUpdateErrors[keyof UsersNotificationsUpdateErrors];
export type UsersNotificationsUpdateResponses = {
    200: Notification;
};
export type UsersNotificationsUpdateResponse = UsersNotificationsUpdateResponses[keyof UsersNotificationsUpdateResponses];
export type UsersStatisticsRetrieveData = {
    body?: never;
    path: {
        username: string;
    };
    query?: {
        format?: 'csv' | 'json' | 'json-flat';
    };
    url: '/users/{username}/statistics/';
};
export type UsersStatisticsRetrieveErrors = {
    400: UsersStatisticsRetrieveErrorResponse400;
    401: ErrorResponse401;
    403: ErrorResponse403;
    404: ErrorResponse404;
    405: ErrorResponse405;
    406: ErrorResponse406;
    415: ErrorResponse415;
    423: ErrorResponse423;
    429: ErrorResponse429;
    500: ErrorResponse500;
};
export type UsersStatisticsRetrieveError = UsersStatisticsRetrieveErrors[keyof UsersStatisticsRetrieveErrors];
export type UsersStatisticsRetrieveResponses = {
    200: BasicUser;
};
export type UsersStatisticsRetrieveResponse = UsersStatisticsRetrieveResponses[keyof UsersStatisticsRetrieveResponses];
export type ClientOptions = {
    baseUrl: '' | (string & {});
};
