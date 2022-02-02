/**
 * @jest-environment jsdom
 */
 import 'regenerator-runtime/runtime';

 import {
     takeLatest,
     put,
 } from 'redux-saga/effects';
 import {
    trackInitialPageView,
    trackConnectionType,
    trackAccordion,
} from '../saga';
import customerTypeSelectionSaga from '../saga';
import {
    INIT_CUSTOMERTYPE_OVERLAY,
    ACCORDION_TOGGLE,
    TRACK_CLICK_BUTTONTILE,
} from '../constant';

import {
    ADDITIONAL_CMS_SITE_STRUCTURE,
    TRACKING_NOT_LOGGED_IN,
    TRACKING_ACCORDION_FIRST_ELEMENT_NAME,
} from '../../../constant';

import {
    trackOverlay,
    trackOpenAccordion,
} from '../action';

import {
    initTracking,
} from '../helpers/tracking';

describe('saga for tracking', () => {
    const genObject = customerTypeSelectionSaga();
    const accordion = {isOpen: true};

    test('should dispatch all actions correctly', () => {

        expect(genObject.next().value).toEqual(takeLatest(INIT_CUSTOMERTYPE_OVERLAY, trackInitialPageView));

        expect(genObject.next().value).toEqual(takeLatest(TRACK_CLICK_BUTTONTILE, trackConnectionType));

        expect(genObject.next().value).toEqual(takeLatest(ACCORDION_TOGGLE, trackAccordion));

        expect(genObject.next().done).toBeTruthy();

    });

    test('should call trackInitialPageView', () => {
        const trackingGeneratorFunction = trackInitialPageView();
        const loginStatus = TRACKING_NOT_LOGGED_IN;
        const siteStructure =  ADDITIONAL_CMS_SITE_STRUCTURE;

        const trackingPayload = initTracking(siteStructure, loginStatus);

        const trackingAction = trackingGeneratorFunction.next().value;
        expect(trackingAction).toEqual(put(trackOverlay(trackingPayload)));
    });

    test('should call trackAccordion', () => {
        const trackingGeneratorFunction = trackAccordion(accordion);
        const accordeonName = TRACKING_ACCORDION_FIRST_ELEMENT_NAME;

        const trackingAction = trackingGeneratorFunction.next().value;
        expect(trackingAction).toEqual(put(trackOpenAccordion(accordeonName)));
    });

});
