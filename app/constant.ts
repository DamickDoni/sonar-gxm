/* istanbul ignore file */
/**
 * Export MAIN
 */
export const MAIN = 'MAIN';

const vfobject = typeof((<any>window).VF);

if ('undefined' === vfobject) {
    (<any>window).VF = {};
    (<any>window).VF = {
        siteStructure: ['foo', 'bar' ],
    };
}

/**
 * Export Namespace
 */
export const NAMESPACE = 'CUSTOMER_TYPE_SELECTION';

/**
 * container question location
 */
export const CONTAINER_QUESTION_CONNECTION_LOCATION = 'container-question_connection_location';

/**
 * container question type
 */
export const CONTAINER_QUESTION_CONNECTION_TYPE = 'container-question_connection_type';

/**
 * connection question type
 */
export const CONNECTION_QUESTION_TYPE = 'connection-question_type';

/**
 * hotline overlay content
 */
export const HOTLINE_CONTENT = 'hotline-overlay-content';

/**
 * overlay content
 */
export const CUSTOMER_TYPE_APP_CONTAINER = 'customer-type-app';

/**
 * GigaKombi Login Container
 */
export const GIGAKOMBI_LOGIN_CONTAINER = 'loginDslKabel';

/**
 * accordion
 */
export const ACCORDION_CONTAINER = 'accordion-776358';

/**
 * accordion nr 1
 */
export const FIRST_ACCORDION_CONTAINER = 'faq-1';

/**
 * accordion nr 2
 */
export const SECOND_ACCORDION_CONTAINER = 'faq-2';

/**
 * SECOND_ACCORDION_CONTENT
 */
 export const SECOND_ACCORDION_ITEM_CLASS = 'brix-accordion-faq-2';

/**
 * BUTTON_CONTINUE_WITH_OFFER
 */
export const BUTTON_CONTINUE_WITH_OFFER = 'continue-with-offer';

/**
 * Site Structure coming from CMS (Nvaigation)
 */
export const ADDITIONAL_CMS_SITE_STRUCTURE =  ['privatkunden', 'mobilfunk', 'angebote mit vertrag', 'gigakombi:mobile', 'layer', 'gigakombi discount fixnet check'];

/**
 * Tracking Constant for logged in
 */
export const TRACKING_LOGGED_IN = 'logged in';
/**
 * Tracking Constant for not logged in
 * ToDo: Can this be handled in core?
 */
export const TRACKING_NOT_LOGGED_IN = 'not logged in';

/**
 * siteArea stands for product category
 */
export const TRACKING_SITE_AREA_MOBILITY = 'mobility';

/**
 * Platform type - always responsiv for sails
 *
 */
export const TRACKING_PLATFORM_TYPE_RESPONSIVE = 'responsive';

/**
 * PageType
 */
export const TRACKING_PAGE_TYPE = 'layover';

/**
 * Tracking form name
 */
export const TRACKING_OFORM_NAME = 'gigakombi discount fixnet check';

/**
 * Tracking form type
 */
export const TRACKING_OFORM_TYPE = 'application funnel';

/**
 * Tracking form step 1
 */
export const TRACKING_OFORM_FORMSTEP_ONE = '1';

/**
 * Tracking form step 2
 */
export const TRACKING_OFORM_FORMSTEP_TWO = '2';

/**
 * Tracking form step 3
 */
export const TRACKING_OFORM_FORMSTEP_THREE = '3';

/**
 * Tracking form step name
 */
export const TRACKING_OFORM_FORMSTEP_NAME = 'residence check';

/**
 * Tracking form step name connection
 */
export const TRACKING_OFORM_FORMSTEP_NAME_CONNECTION = 'connection';

/**
 * Tracking form step login
 */
export const TRACKING_OFORM_FORMSTEP_NAME_LOGIN = 'confirmation gigakombi offer check login';

/**
 * Tracking form step hotline
 */
export const TRACKING_OFORM_FORMSTEP_NAME_HOTLINE = 'confirmation tv cable hotline offer';

/**
 * Tracking form step do not know
 */
export const TRACKING_OFORM_FORMSTEP_NAME_DONOTKNOW = 'do not know';

/**
 * Tracking form status
 */
export const TRACKING_OFORM_FORM_STATUS_START = 'start';

/**
 * Tracking form empty
 */
export const TRACKING_OFORM_FORM_STATUS_EMPTY = [''];

/**
 * Tracking form success
 */
export const TRACKING_OFORM_FORM_STATUS_SUCCESS = ['end', 'success'];

/**
 * first element name
 */
export const TRACKING_ACCORDION_FIRST_ELEMENT_NAME = 'why do you need this information';

/**
 * second element name
 */
export const TRACKING_ACCORDION_SECOND_ELEMENT_NAME = 'which connection do I have';

/**
 * TRACKING_ACCORDION_INTERACTION_TYPE
 */
 export const TRACKING_ACCORDION_INTERACTION_TYPE = 'accordion click';

/**
 * TRACKING_ACCORDION_LOCATION
 */
export const TRACKING_ACCORDION_LOCATION = 'gigakombi discount fixnet check';
