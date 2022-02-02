import { getLoginData } from '@vfde-fe/sails_core';
import {
    YES_ITEM_ID,
    NO_ITEM_ID,
    TV_ITEM_ID,
    PHONE_ITEM_ID,
    DONT_KNOW_ITEM_ID,
} from './../constant';
import {
    CONNECTION_QUESTION_TYPE,
    HOTLINE_CONTENT,
    CUSTOMER_TYPE_APP_CONTAINER,
    GIGAKOMBI_LOGIN_CONTAINER,
    ADDITIONAL_CMS_SITE_STRUCTURE,
    TRACKING_LOGGED_IN,
    TRACKING_NOT_LOGGED_IN,
    TRACKING_OFORM_FORMSTEP_NAME_CONNECTION,
    TRACKING_OFORM_FORMSTEP_TWO,
    TRACKING_OFORM_FORMSTEP_THREE,
    TRACKING_OFORM_FORMSTEP_NAME_LOGIN,
    TRACKING_OFORM_FORMSTEP_NAME_HOTLINE,
    TRACKING_OFORM_FORMSTEP_NAME_DONOTKNOW,
    TRACKING_OFORM_FORM_STATUS_SUCCESS,
    TRACKING_OFORM_FORM_STATUS_EMPTY,
    } from '../../../constant';
import {divShowHide} from './divManipulation';

/**
 * getFormStep
 */
 export const getFormStep = (itemId) => {
    const isStepTwo = YES_ITEM_ID === itemId || NO_ITEM_ID === itemId;

    return isStepTwo ? TRACKING_OFORM_FORMSTEP_TWO : TRACKING_OFORM_FORMSTEP_THREE;
};

/**
 * getFormStepName
 */
 export const getFormStepName = (itemId) => {
    const stepNameLogin = PHONE_ITEM_ID === itemId;

    const map = {
         [YES_ITEM_ID]: TRACKING_OFORM_FORMSTEP_NAME_CONNECTION,
         [NO_ITEM_ID]: TRACKING_OFORM_FORMSTEP_NAME_LOGIN,
         [TV_ITEM_ID]: TRACKING_OFORM_FORMSTEP_NAME_HOTLINE,
         [DONT_KNOW_ITEM_ID]: TRACKING_OFORM_FORMSTEP_NAME_DONOTKNOW,
    };
    const stepName = stepNameLogin ? TRACKING_OFORM_FORMSTEP_NAME_LOGIN : map[itemId];

    return stepName;
};

/**
 * getFormStatus
 */
const getFormStatus = (itemId) => {
    const steps = [
        TV_ITEM_ID,
        NO_ITEM_ID,
        PHONE_ITEM_ID,
    ];

    return steps.indexOf(itemId) !== -1 ? TRACKING_OFORM_FORM_STATUS_SUCCESS : TRACKING_OFORM_FORM_STATUS_EMPTY;
};
/**
 * customer type flow
 */
export const getCustomerTypeSelectionFlow = (itemId: string, action) => {

    const loginStatus = getLoginData() ? TRACKING_LOGGED_IN : TRACKING_NOT_LOGGED_IN;
    const siteStructure =  ADDITIONAL_CMS_SITE_STRUCTURE;

    const customerTypeApp = document.getElementById(CUSTOMER_TYPE_APP_CONTAINER);
    const connectionQuestionType = document.getElementById(CONNECTION_QUESTION_TYPE);
    const hotlineContainer = document.getElementById(HOTLINE_CONTENT);
    const gigakombiLogin = document.getElementById(GIGAKOMBI_LOGIN_CONTAINER);

    const formStep = getFormStep(itemId);
    const formStepName = getFormStepName(itemId);
    const formStatus = getFormStatus(itemId);

    switch (itemId) {
        case YES_ITEM_ID:
            // show question
            divShowHide(connectionQuestionType);
            action.displayQuestionConnectionType();
            break;
        case NO_ITEM_ID:
            divShowHide(customerTypeApp, false);
            // show GiGaKombi Login
            divShowHide(gigakombiLogin);
            action.displayLoginContent();
            break;
        case TV_ITEM_ID:
            divShowHide(customerTypeApp, false);
            // show hotline div
            divShowHide(hotlineContainer);
            action.displayHotlineContent();
            break;
        case PHONE_ITEM_ID:
            divShowHide(customerTypeApp, false);
            // show GiGaKombi Login
            divShowHide(gigakombiLogin);
            action.displayLoginContent();
            break;
        default:
            break;
    }

    action.trackClickButtonTile(
        {
            formStep,
            formStepName,
            formStatus,
            siteStructure,
            loginStatus,
        },
    );
};
