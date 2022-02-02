import { getLoginData } from '@vfde-fe/sails_core';
import {
    takeLatest,
    put,
    delay,
    select,
} from 'redux-saga/effects';

import {
    INIT_CUSTOMERTYPE_OVERLAY,
    ACCORDION_TOGGLE,
    TRACK_CLICK_BUTTONTILE,
    TOGGLE_I_DONT_KNOW_BUTTON_TILE,
} from './constant';

import {
    ADDITIONAL_CMS_SITE_STRUCTURE,
    TRACKING_LOGGED_IN,
    TRACKING_NOT_LOGGED_IN,
    SECOND_ACCORDION_CONTAINER,
    TRACKING_ACCORDION_FIRST_ELEMENT_NAME,
    TRACKING_ACCORDION_SECOND_ELEMENT_NAME,
} from '../../constant';

import {
    trackOverlay,
    trackOpenAccordion,
} from './action';

import {
    initTracking,
    connectionTypeStepTracking,
} from './helpers/tracking';

/**
 * trackInitialPageView
 */
export function* trackInitialPageView () {
    const loginStatus = getLoginData() ? TRACKING_LOGGED_IN : TRACKING_NOT_LOGGED_IN;
    const siteStructure =  ADDITIONAL_CMS_SITE_STRUCTURE;

    const trackingPayload = initTracking(siteStructure, loginStatus);

    yield put(trackOverlay(trackingPayload));
}

/**
 * trackConnectionType
 */
export function* trackConnectionType (params) {
    const trackingPayload = connectionTypeStepTracking(params.trackParams);

    yield put(trackOverlay(trackingPayload));
}

/**
 * trackAccordion
 */
export function* trackAccordion (accordion) {
    if (accordion.isOpen) {
        let accordeonName = TRACKING_ACCORDION_FIRST_ELEMENT_NAME;

        if (SECOND_ACCORDION_CONTAINER === accordion.itemId) {
            accordeonName = TRACKING_ACCORDION_SECOND_ELEMENT_NAME;
        }

        yield put(trackOpenAccordion(accordeonName));
    }
}

/**
 * Action Dispatcher for tracking actions
 *
 */

export default function* customerTypeSelectionSaga () {
    yield takeLatest(INIT_CUSTOMERTYPE_OVERLAY, trackInitialPageView);
    yield takeLatest(TRACK_CLICK_BUTTONTILE, trackConnectionType);
    yield takeLatest(ACCORDION_TOGGLE, trackAccordion);
}
