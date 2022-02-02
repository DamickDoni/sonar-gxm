/**
 * @jest-environment jsdom
 */
import {createSelector} from 'reselect';
import {initialState} from './reducer';
import {NAMESPACE} from './constant';

const selectState = (state) => state[NAMESPACE] || initialState;

const selectInitCustomerTypeFlow = () => createSelector(selectState, state => state.initCustomerTypeFlow);

const selectButtonTileId = () => createSelector(selectState, state => state.buttonTileId);

const selectShowQuestionConnectionType = () => createSelector(selectState, state => state.showQuestionConnectionType);

const selectShowHotlineContent = () => createSelector(selectState, state => state.showHotlineContent);

const toggleIDontKnow = () => createSelector(selectState, state => state.toggleIDontKnow);

const selectOpenAccordeonItemId = () => createSelector(selectState, state => state.openAccordeonItemId);

export {
    selectInitCustomerTypeFlow,
    selectButtonTileId,
    selectShowQuestionConnectionType,
    selectShowHotlineContent,
    toggleIDontKnow,
    selectOpenAccordeonItemId,
};
