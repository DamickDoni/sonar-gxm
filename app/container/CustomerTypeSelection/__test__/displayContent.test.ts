/**
 * @jest-environment jsdom
 */
import {
        CONNECTION_QUESTION_TYPE,
        HOTLINE_CONTENT,
        GIGAKOMBI_LOGIN_CONTAINER,
        CUSTOMER_TYPE_APP_CONTAINER,
        TRACKING_OFORM_FORMSTEP_TWO,
        TRACKING_OFORM_FORMSTEP_NAME_LOGIN,
    } from '../../../constant';
import {
    YES_ITEM_ID,
    NO_ITEM_ID,
    TV_ITEM_ID,
    PHONE_ITEM_ID,
    } from '../constant';
import {divShowHide} from '../helpers/divManipulation';
import {
    getCustomerTypeSelectionFlow,
    getFormStep,
    getFormStepName,
} from '../helpers/displayContent';

describe('getCustomerTypeSelectionFlow', () => {

    const action = {
        trackClickButtonTile: jest.fn(),
        displayQuestionConnectionType: jest.fn(),
        displayLoginContent: jest.fn(),
        displayHotlineContent: jest.fn(),
        accordionToggle: jest.fn(),
    };

    beforeEach(() => {
        jest.useFakeTimers();
        document.body.innerHTML = '<div id="customer-type-app">' +
                                        '<div id="connection-question_type"></div>' +
                                    '</div>' +
                                    '<div class="mod mod-overlay" id="loginDslKabel">' +
                                    '<div id="hotline-overlay-content"></div>';
    });

    test('show Container connectionQuestionType' , function () {
        const connectionQuestionType = document.getElementById(CONNECTION_QUESTION_TYPE) as HTMLElement;
        divShowHide(connectionQuestionType);
        expect(connectionQuestionType.style.display).toEqual('block');

    });

    test('hide Container customerTypeApp' , function () {
        const customerTypeApp = document.getElementById(CUSTOMER_TYPE_APP_CONTAINER) as HTMLElement;
        divShowHide(customerTypeApp, false);
        expect(customerTypeApp.style.display).toEqual('none');

    });

    test('hide Container gigakombiLogin' , function () {
        const gigakombiLogin = document.getElementById(GIGAKOMBI_LOGIN_CONTAINER) as HTMLElement;
        divShowHide(gigakombiLogin, false);
        expect(gigakombiLogin.style.display).toEqual('none');

    });

    test('hide Container Hotline' , function () {
        const hotlineContainer = document.getElementById(HOTLINE_CONTENT) as HTMLElement;
        divShowHide(hotlineContainer, false);
        expect(hotlineContainer.style.display).toEqual('none');

    });

    test('action trackClickButtonTile is called', () => {

        const itemId = '12345';

        getCustomerTypeSelectionFlow(itemId, action);
        expect(action.trackClickButtonTile).toBeCalled();
    });

    test('YES_ITEM_ID displayQuestionConnectionType is called', () => {

        const itemId = YES_ITEM_ID;

        getCustomerTypeSelectionFlow(itemId, action);
        expect(action.displayQuestionConnectionType).toBeCalled();
    });

    test('NO_ITEM_ID displayLoginContent is called', () => {

        const itemId = NO_ITEM_ID;

        getCustomerTypeSelectionFlow(itemId, action);
        expect(action.displayLoginContent).toBeCalled();
    });

    test('TV_ITEM_ID displayHotlineContent is called', () => {

        const itemId = TV_ITEM_ID;

        getCustomerTypeSelectionFlow(itemId,  action);
        expect(action.displayHotlineContent).toBeCalled();
    });

    test('PHONE_ITEM_ID displayLoginContent is called', () => {

        const itemId = PHONE_ITEM_ID;

        getCustomerTypeSelectionFlow(itemId, action);
        expect(action.displayLoginContent).toBeCalled();
    });

    test('test getFormStep', () => {

        const itemId = YES_ITEM_ID;

        expect(getFormStep(itemId)).toEqual(TRACKING_OFORM_FORMSTEP_TWO);
    });

    test('test getFormStepName', () => {

        const itemId = PHONE_ITEM_ID;

        expect(getFormStepName(itemId)).toEqual(TRACKING_OFORM_FORMSTEP_NAME_LOGIN);
    });
});
