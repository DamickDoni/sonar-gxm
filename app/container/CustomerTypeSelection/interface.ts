/**
 * Interface InitialState
 */
interface IInitialState {
    /**
     * initCustomerTypeFlow
     */
    initCustomerTypeFlow: boolean;
    /**
     * buttonTileId - store id of clicked button tile
     */
    buttonTileId: string | boolean;
    /**
     * showQuestionConnectionType
     */
    showQuestionConnectionType: boolean;
    /**
     * showHotlineContent
     */
    showHotlineContent: boolean;
    /**
     * showLoginContent
     */
    showLoginContent: boolean;
    /**
     * toggleIDontKnow
     */
    toggleIDontKnow: boolean;
    /**
     * openAccordeonItemId
     */
    openAccordeonItemId: string | boolean;
}
