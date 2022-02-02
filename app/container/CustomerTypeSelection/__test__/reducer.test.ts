/**
 * @jest-environment jsdom
 */
import produce from 'immer';
import CustomerTypeSelectionReducer, {initialState } from '../reducer';
import {initCustomerTypeOverlay,
    displayQuestionConnectionType,
    displayHotlineContent,
    displayLoginContent,
    getClickButtonTileValue,
    toggleIDontKnowButtonTile,
    accordionToggle,
} from '../action';

describe('CustomerTypeSelectionReducer', () => {
    let state: any;

    beforeEach(() => {
        // @ts-ignore
        window._ddq = [];
        state = initialState;

    });

    test('should return the init reducer state', () => {
        expect(CustomerTypeSelectionReducer(undefined, {} as any)).toEqual(initialState);
    });

    test('should return the init initialState', () => {
        expect(CustomerTypeSelectionReducer(initialState, {})).toEqual(initialState);
    });

    test('should handle the INIT_CUSTOMERTYPE_OVERLAY correctly', () => {
        const initCustomerTypeFlow = true;

        const expResult = produce(initialState, draft => {
            draft.initCustomerTypeFlow = initCustomerTypeFlow;
        });
        const result = CustomerTypeSelectionReducer(initialState, initCustomerTypeOverlay());

        expect(result).toEqual(expResult);
    });

    test('should handle the SAVE_CLICK_VALUES correctly', () => {
        const itemId = '12345';
        const expResult = produce(initialState, draft => {
            draft.buttonTileId = itemId;
        });
        const result = CustomerTypeSelectionReducer(initialState, getClickButtonTileValue(itemId));
        expect(result).toEqual(expResult);
    });

    test('should handle the SHOW_QUESTION_CONNECTION_LOCATION correctly', () => {
        const showQuestionConnectionType = true;

        const expResult = produce(initialState, draft => {
            draft.showQuestionConnectionType = showQuestionConnectionType;
            draft.initCustomerTypeFlow = false;
        });
        const result = CustomerTypeSelectionReducer(initialState, displayQuestionConnectionType());

        expect(result).toEqual(expResult);
    });

    test('should handle the SHOW_HOTLINE_CONTENT correctly', () => {
        const showHotlineContent = true;

        const expResult = produce(initialState, draft => {
            draft.showHotlineContent = showHotlineContent;
            draft.initCustomerTypeFlow = false;
        });
        const result = CustomerTypeSelectionReducer(initialState, displayHotlineContent());

        expect(result).toEqual(expResult);
    });

    test('should handle the SHOW_LOGIN_CONTENT correctly', () => {
        const showLoginContent = true;

        const expResult = produce(initialState, draft => {
            draft.showLoginContent = showLoginContent;
            draft.initCustomerTypeFlow = false;
        });
        const result = CustomerTypeSelectionReducer(initialState, displayLoginContent());

        expect(result).toEqual(expResult);
    });

    test('should handle toggle i dont know correctly', () => {
        const expResult = produce(initialState, draft => {
            draft.toggleIDontKnow = true;
        });

        const result = CustomerTypeSelectionReducer(initialState, toggleIDontKnowButtonTile());

        expect(result).toEqual(expResult);
    });

    test('should handle accordeon item correctly', () => {
        const expResult = produce(initialState, draft => {
            draft.openAccordeonItemId = '123';
        });

        const result = CustomerTypeSelectionReducer(initialState, accordionToggle('123', true));

        expect(result.openAccordeonItemId).toEqual(expResult.openAccordeonItemId);
    });

    test('should handle accordeon item correctly if it is closed', () => {
        const expResult = produce(initialState, draft => {
            draft.openAccordeonItemId = '123';
        });

        const result = CustomerTypeSelectionReducer(initialState, accordionToggle('123', false));

        expect(result.openAccordeonItemId).toEqual(false);
    });

});
