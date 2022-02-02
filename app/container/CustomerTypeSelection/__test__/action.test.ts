/**
 * @jest-environment jsdom
 */
import {
    SHOW_QUESTION_CONNECTION_LOCATION,
    SHOW_HOTLINE_CONTENT,
    SHOW_LOGIN_CONTENT,
    INIT_CUSTOMERTYPE_OVERLAY,
    SAVE_CLICK_VALUES,
    TRACK_CUSTOMER_TYPE,
    TRACK_OPEN_ACCORDION,
    ACCORDION_TOGGLE,
    TRACK_CLICK_BUTTONTILE,
    TOGGLE_I_DONT_KNOW_BUTTON_TILE,
} from '../constant';
import {
    TRACKING_ACCORDION_FIRST_ELEMENT_NAME,
    TRACKING_NOT_LOGGED_IN,
} from '../../../constant';
import { track } from '@vfde-fe/sails_core';
import {
    displayQuestionConnectionType,
    displayHotlineContent,
    displayLoginContent,
    accordionToggle,
    initCustomerTypeOverlay,
    getClickButtonTileValue,
    trackOverlay,
    trackClickButtonTile,
    trackOpenAccordion,
    toggleIDontKnowButtonTile,
} from '../action';
import { initTracking } from '../helpers/tracking';

describe('CustomerTypeSelection actions', () => {

    test('initCustomerTypeOverlay', () => {
        const expResult = {
            type: INIT_CUSTOMERTYPE_OVERLAY,
        };

        expect(initCustomerTypeOverlay()).toEqual(expResult);
    });

    test('getClickButtonTileValue', () => {

        const buttonTileId = '12345';
        const expectedAction = {
            type: SAVE_CLICK_VALUES,
            buttonTileId: buttonTileId,
        };

        expect(getClickButtonTileValue(buttonTileId)).toEqual(expectedAction);
    });

    test('displayQuestionConnectionType', () => {

        const expResult = {
            type: SHOW_QUESTION_CONNECTION_LOCATION,
        };

        expect(displayQuestionConnectionType()).toEqual(expResult);
    });

    test('displayHotlineContent', () => {

        const expResult = {
            type: SHOW_HOTLINE_CONTENT,
        };

        expect(displayHotlineContent()).toEqual(expResult);

    });

    test('toggleIDontKnow', () => {

        const expResult = {
            type: TOGGLE_I_DONT_KNOW_BUTTON_TILE,
        };

        expect(toggleIDontKnowButtonTile()).toEqual(expResult);

    });

    test('displayLoginContent', () => {

        const expResult = {
            type: SHOW_LOGIN_CONTENT,
        };

        expect(displayLoginContent()).toEqual(expResult);

    });

    test('accordionToggle', () => {
        const itemId = 'faq-1';
        const isOpen = true;

        const expectedAction = {
            type: ACCORDION_TOGGLE,
            itemId,
            isOpen,
        };

        expect(accordionToggle(itemId, isOpen)).toEqual(expectedAction);
    });

    test('trackOverlay', () => {

        const siteStructure = ['foo', 'bar'];
        const loginStatus = TRACKING_NOT_LOGGED_IN;
        const trackingPayload = initTracking(siteStructure, loginStatus);

        const expectedAction = track(
            {
                type: TRACK_CUSTOMER_TYPE,
            },
            'pageview',
            trackingPayload,
        );

        expect(trackOverlay(trackingPayload)).toEqual(expectedAction);

    });

    test('trackClickButtonTile', () => {
        const trackParams = {
            formStep: '3',
            formStepName: 'confirmation tv cable hotline offer',
            formStatus: ['end', 'success'],
            siteStructure: ['foo', 'bar'],
            loginStatus: 'not logged in',
        };

        const expectedAction = {
            type: TRACK_CLICK_BUTTONTILE,
            trackParams,
        };

        expect(trackClickButtonTile(trackParams)).toEqual(expectedAction);
    });

    test('trackOpenAccordion', () => {

        const elementName = TRACKING_ACCORDION_FIRST_ELEMENT_NAME;

        const expectedAction = track(
            {
                type: TRACK_OPEN_ACCORDION,
            },
            'in-page interaction',
            {
                interactionType: 'accordion click',
                elementName: elementName,
                location: 'gigakombi discount fixnet check',
            },
        );

        expect(trackOpenAccordion(elementName)).toEqual(expectedAction);

    });

});
