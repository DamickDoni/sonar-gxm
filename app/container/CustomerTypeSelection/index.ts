// tslint:disable: completed-docs
import {
    renderMockCMSContent,
    connect,
    injectReducer,
    injectSaga,
} from '@vfde-fe/sails_core';
import {createStructuredSelector} from 'reselect';
import {RootState} from './types';
import {NAMESPACE,
    CONTAINER_QUESTION_CONNECTION_LOCATION,
    CONTAINER_QUESTION_CONNECTION_TYPE,
    CONNECTION_QUESTION_TYPE,
    HOTLINE_CONTENT,
    GIGAKOMBI_LOGIN_CONTAINER,
    ACCORDION_CONTAINER,
    BUTTON_CONTINUE_WITH_OFFER,
    CUSTOMER_TYPE_APP_CONTAINER,
    SECOND_ACCORDION_CONTAINER,
    } from '../../constant';
import reducer from './reducer';
import customerTypeSelectionSaga from './saga';
import {
    getClickButtonTileValue,
    initCustomerTypeOverlay,
    displayLoginContent,
    displayHotlineContent,
    displayQuestionConnectionType,
    accordionToggle,
    trackClickButtonTile,
    toggleIDontKnowButtonTile,
} from './action';
import {divShowHide} from './helpers/divManipulation';
import {getCustomerTypeSelectionFlow} from './helpers/displayContent';
// @ts-ignore
import htmlMarkup from '../../index-mocked.html';

import './style.scss';
import {
    selectInitCustomerTypeFlow,
    selectButtonTileId,
    toggleIDontKnow,
    selectOpenAccordeonItemId,
} from './selector';
import { mountButtonTilesQuestion} from '../../components/ButtonTiles';
import {
    mountCustomerTypeAccordion,
    scrollDownToAccordion,
} from '../../components/Accordion';
import { DONT_KNOW_ITEM_ID } from './constant';

interface StateProps {
    initCustomerTypeFlow: boolean;
    buttonTileId: boolean | string;
    accordeonItem: boolean | string;
    toggleIDontKnow: boolean;
}

/**
 * CustomerTypeSelection function
 */
function customerTypeSelection (state: StateProps, action) {

    injectReducer(NAMESPACE, reducer );
    injectSaga(NAMESPACE, customerTypeSelectionSaga);
    renderMockCMSContent(htmlMarkup);

    const connectionQuestionType = document.getElementById(CONNECTION_QUESTION_TYPE);
    const hotlineContainer = document.getElementById(HOTLINE_CONTENT);
    const gigakombiLogin = document.getElementById(GIGAKOMBI_LOGIN_CONTAINER);
    const connectionLocation = document.getElementById(CONTAINER_QUESTION_CONNECTION_LOCATION);
    const customerTypeApp = document.getElementById(CUSTOMER_TYPE_APP_CONTAINER);
    const accordion = mountCustomerTypeAccordion(ACCORDION_CONTAINER, action.accordionToggle);

    const handleButtonTilesQuestion = (event) => {
        event.preventDefault();
        const item = event.currentTarget as HTMLElement;
        const itemId = item.id;
        if (DONT_KNOW_ITEM_ID === itemId) {
            action.toggleIDontKnowButtonTile();
        } else {
            action.getClickButtonTileValue(itemId);
        }

    };

    mountButtonTilesQuestion(CONTAINER_QUESTION_CONNECTION_LOCATION, handleButtonTilesQuestion);

    mountButtonTilesQuestion(CONTAINER_QUESTION_CONNECTION_TYPE, handleButtonTilesQuestion);

    // check init open Overlay
    document.getElementById(BUTTON_CONTINUE_WITH_OFFER).addEventListener('click', action.initCustomerTypeOverlay);

    return {
        /**
         * This function is called on first load and everytime the store changes.
         * @param newState
         * @param oldState - You may also pass the oldState here, if needed
         */
        getDerivedStateFromProps (newState, oldState) {
            if ((newState.initCustomerTypeFlow !== oldState.initCustomerTypeFlow) && newState.initCustomerTypeFlow) {
                divShowHide(connectionQuestionType, false);
                divShowHide(hotlineContainer, false);
                divShowHide(gigakombiLogin, false);
                divShowHide(connectionLocation, true);
                divShowHide(customerTypeApp, true);

                return;
            }

            if (newState.toggleIDontKnow !== oldState.toggleIDontKnow) {

                // actually there should be an public open function for the accordion
                if (SECOND_ACCORDION_CONTAINER !== newState.accordeonItem) {
                    accordion.handleOnToggle(1);

                }
                scrollDownToAccordion();

                return;
            }

            if ((newState.buttonTileId !== oldState.buttonTileId) && newState.buttonTileId) {
                getCustomerTypeSelectionFlow(newState.buttonTileId, action);
            }
        },
    };
}

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
    initCustomerTypeFlow: selectInitCustomerTypeFlow(),
    buttonTileId: selectButtonTileId(),
    accordeonItem: selectOpenAccordeonItemId(),
    toggleIDontKnow: toggleIDontKnow(),
});

const mapDispatch = {
    getClickButtonTileValue,
    initCustomerTypeOverlay,
    displayQuestionConnectionType,
    displayLoginContent,
    displayHotlineContent,
    accordionToggle,
    trackClickButtonTile,
    toggleIDontKnowButtonTile,
};

const CustomerTypeSelection = connect(mapStateToProps, mapDispatch)(customerTypeSelection);
export default CustomerTypeSelection;
