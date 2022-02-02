import {
    TRACKING_PAGE_TYPE,
    TRACKING_SITE_AREA_MOBILITY,
    TRACKING_PLATFORM_TYPE_RESPONSIVE,
    TRACKING_OFORM_NAME,
    TRACKING_OFORM_TYPE,
    TRACKING_OFORM_FORMSTEP_ONE,
    TRACKING_OFORM_FORMSTEP_NAME,
    TRACKING_OFORM_FORM_STATUS_START,
 } from '../../../constant';

/**
 * initTracking
 * @param siteStructure
 */
export const initTracking = (siteStructure: string[], loginStatus: string) => {
    const trackingPayload = {
        pageType: TRACKING_PAGE_TYPE,
        loginStatus,
        siteArea: TRACKING_SITE_AREA_MOBILITY,
        platformType: TRACKING_PLATFORM_TYPE_RESPONSIVE,
        siteStructure,
        oForm: {
            name: TRACKING_OFORM_NAME,
            type: TRACKING_OFORM_TYPE,
            formStep: TRACKING_OFORM_FORMSTEP_ONE,
            formStepName: TRACKING_OFORM_FORMSTEP_NAME,
            formStatus: [TRACKING_OFORM_FORM_STATUS_START],
        },
    };

    return trackingPayload;
};

/**
 * connectionType Step Tracking
 *
 */

export const connectionTypeStepTracking = (stepTracking) => {
    const trackingPayload = initTracking(stepTracking.siteStructure, stepTracking.loginStatus);

    trackingPayload.siteStructure.push(stepTracking.formStepName);
    trackingPayload.oForm.formStep = stepTracking.formStep;
    trackingPayload.oForm.formStepName = stepTracking.formStepName;
    trackingPayload.oForm.formStatus = stepTracking.formStatus;

    return trackingPayload;

};
