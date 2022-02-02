// tslint:disable: completed-docs
import { track } from '@vfde-fe/sails_core';
import {
    SHOW_QUESTION_CONNECTION_LOCATION,
    SHOW_HOTLINE_CONTENT,
    TRACK_CUSTOMER_TYPE,
    SAVE_CLICK_VALUES,
    SHOW_LOGIN_CONTENT,
    INIT_CUSTOMERTYPE_OVERLAY,
    TRACK_OPEN_ACCORDION,
    ACCORDION_TOGGLE,
    TRACK_CLICK_BUTTONTILE,
    TOGGLE_I_DONT_KNOW_BUTTON_TILE,
} from './constant';
import {
    TRACKING_ACCORDION_INTERACTION_TYPE,
    TRACKING_ACCORDION_LOCATION,
} from '../../constant';
/**
 * Export initCustomerTypeOverlay
 *
 * @export initCustomerTypeOverlay
 */
export const initCustomerTypeOverlay = () => {
    return {
        type: INIT_CUSTOMERTYPE_OVERLAY,
    };
};

/**
 * Export saveFormDataValues
 *
 * @export saveFormDataValues
 */
export const getClickButtonTileValue = (buttonTileId) => {
    return {
        type: SAVE_CLICK_VALUES,
        buttonTileId: buttonTileId,
    };
};

/**
 * Export displayQuestionConnectionType
 *
 * @export displayQuestionConnectionType
 */
export const displayQuestionConnectionType = () => {
    return {
        type: SHOW_QUESTION_CONNECTION_LOCATION,
    };
};

/**
 * Export showHotlineContent
 *
 * @export showHotlineContent
 */
export const displayHotlineContent = () => {
    return {
        type: SHOW_HOTLINE_CONTENT,
    };
};

/**
 * Export showLoginContent
 *
 * @export showLoginContent
 */
export const displayLoginContent = () => {
    return {
        type: SHOW_LOGIN_CONTENT,
    };
};

/**
 * Export toggleIDontKnowButtonTile
 * Just trigger state change because clicking i dont know button tile
 *
 * @export toggleIDontKnowButtonTile
 */
 export const toggleIDontKnowButtonTile = () => {
    return {
        type: TOGGLE_I_DONT_KNOW_BUTTON_TILE,
    };
};

/**
 * Export accordionOpened
 * Toogle of accordion return clicked itemId and isOpen (true/false)
 *
 * @export accordionOpened
 */
export const accordionToggle = (itemId: string, isOpen: boolean) => {
    return {
        type: ACCORDION_TOGGLE,
        itemId,
        isOpen,
    };
};

/**
 * Track the Overlay
 */
export const trackOverlay = (payload: any) => {

    return track(
        {
            type: TRACK_CUSTOMER_TYPE,
        },
        'pageview',
        payload,
    );
};

/**
 * trackClickButtonTile
 */
export const trackClickButtonTile = (trackParams) => {
    return {
        type: TRACK_CLICK_BUTTONTILE,
        trackParams,
    };
};

/**
 * Track accordion
 */
export const trackOpenAccordion = (elementName) => {

    return track(
        {
            type: TRACK_OPEN_ACCORDION,
        },
        'in-page interaction',
        {
            interactionType: TRACKING_ACCORDION_INTERACTION_TYPE,
            elementName: elementName,
            location: TRACKING_ACCORDION_LOCATION,
        },
    );
};
