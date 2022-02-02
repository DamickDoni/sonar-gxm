import {createButtonTilesComponent, IButtonTilesBusinessLogic} from '@vfde-brix/button-tiles';

/**
 * Export mountButtonTilesQuestion
 *
 * @export mountButton
 */
export const mountButtonTilesQuestion = (container, action) => {

        const elButtonTiles = document.getElementById(container);
        const businessLogicProps: IButtonTilesBusinessLogic = {
            onClick: action,
        };

        const createButtonTile = createButtonTilesComponent(elButtonTiles, businessLogicProps);

    return createButtonTile;
};
