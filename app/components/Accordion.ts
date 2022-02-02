import {createAccordionComponent, IAccordionProperties, IAccordionBusinessLogic } from '@vfde-brix/accordion';
import { SECOND_ACCORDION_ITEM_CLASS } from 'Constant';

/**
 * Export mountCustomerTypeAccordion
 *
 * @export mountAccordion
 */
export const mountCustomerTypeAccordion = (container, onToggle) => {

    const elAccordion: HTMLElement = <HTMLElement> document.getElementById(container);

    const accordionBusinessLogic: IAccordionBusinessLogic = {
            onToggle,
    };

    const createAccordion = createAccordionComponent(elAccordion, accordionBusinessLogic);

    return createAccordion;
};

/**
 * scroll to second accordeon with a delay
 */
export const scrollDownToAccordion = () => {
    setTimeout(function () {
        document.getElementsByClassName(SECOND_ACCORDION_ITEM_CLASS)[0].scrollIntoView({
            behavior: 'smooth',
        });
    }, 200);
};
