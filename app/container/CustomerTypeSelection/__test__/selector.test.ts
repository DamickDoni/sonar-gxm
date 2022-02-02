/**
 * @jest-environment jsdom
 */
import {
    selectShowQuestionConnectionType,
    selectShowHotlineContent,
    selectInitCustomerTypeFlow,
    selectButtonTileId,
} from '../selector';
import {NAMESPACE} from '../../../constant';
import { initialState } from '../reducer';

describe('selectCustomerTypeSelectionDomain', () => {
    const initCustomerTypeFlow = true;
    const buttonTileId = 'someValue';
    const showQuestionConnectionType = false;
    const showHotlineContent = false;
    const state = {
        [NAMESPACE]: {
            initCustomerTypeFlow,
            buttonTileId,
            showQuestionConnectionType,
            showHotlineContent,
        },
    };

    test('should select initialState as fallback', () => {
        const selector = selectButtonTileId();
        expect(selector({})).toEqual(initialState.buttonTileId);
    });

    test('selectInitCustomerTypeFlow', () => {
        const selector = selectInitCustomerTypeFlow();
        expect(selector(state)).toEqual(initCustomerTypeFlow);
    });

    test('selectButtonTileId', () => {
        const selector = selectButtonTileId();
        expect(selector(state)).toEqual(buttonTileId);
    });

    test('selectShowQuestionConnectionType', () => {
        const selector = selectShowQuestionConnectionType();
        expect(selector(state)).toEqual(showQuestionConnectionType);
    });

    test('selectShowHotlineContent', () => {
        const selector = selectShowHotlineContent();
        expect(selector(state)).toEqual(showHotlineContent);
    });

});
