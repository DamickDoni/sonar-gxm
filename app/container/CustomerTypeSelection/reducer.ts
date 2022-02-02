import produce from 'immer';

import {
    SHOW_QUESTION_CONNECTION_LOCATION,
    SHOW_HOTLINE_CONTENT,
    SAVE_CLICK_VALUES,
    SHOW_LOGIN_CONTENT,
    INIT_CUSTOMERTYPE_OVERLAY,
    ACCORDION_TOGGLE,
    TOGGLE_I_DONT_KNOW_BUTTON_TILE,
} from './constant';

/**
 * initialState
 */
export const initialState: IInitialState = {
    initCustomerTypeFlow: false,
    buttonTileId: false,
    showQuestionConnectionType: false,
    showHotlineContent: false,
    showLoginContent: false,
    toggleIDontKnow: false,
    openAccordeonItemId: false,
};

/**
 *
 * @param {*} state - Initial state of the app
 * @param {*} action - The action dispatched from saga
 */
const CustomerTypeSelectionReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case INIT_CUSTOMERTYPE_OVERLAY:
                draft.initCustomerTypeFlow = true;
                draft.buttonTileId = initialState.buttonTileId;
                draft.showQuestionConnectionType = initialState.showQuestionConnectionType;
                draft.showHotlineContent = initialState.showHotlineContent;
                draft.showLoginContent = initialState.showLoginContent;
                break;
            case TOGGLE_I_DONT_KNOW_BUTTON_TILE:
                draft.toggleIDontKnow = !draft.toggleIDontKnow;
                break;
            case ACCORDION_TOGGLE:
                if (action.isOpen) {
                    draft.openAccordeonItemId = action.itemId;
                } else {
                    draft.openAccordeonItemId = false;
                }
            case SAVE_CLICK_VALUES:
                draft.buttonTileId = action.buttonTileId;
                draft.initCustomerTypeFlow = initialState.initCustomerTypeFlow;
                break;
            case SHOW_QUESTION_CONNECTION_LOCATION:
                draft.showQuestionConnectionType = true;
                break;
            case SHOW_HOTLINE_CONTENT:
                draft.showHotlineContent = true;
                break;
            case SHOW_LOGIN_CONTENT:
                draft.showLoginContent = true;
                break;
        }
    });

export default CustomerTypeSelectionReducer;
