/**
 * @jest-environment jsdom
 */
import 'regenerator-runtime/runtime';
import {
    initTracking,
    connectionTypeStepTracking,
} from '../helpers/tracking';
import {
    TRACKING_NOT_LOGGED_IN ,
    TRACKING_LOGGED_IN,
    TRACKING_PAGE_TYPE,
    ADDITIONAL_CMS_SITE_STRUCTURE,
    TRACKING_SITE_AREA_MOBILITY,
    TRACKING_PLATFORM_TYPE_RESPONSIVE,
    TRACKING_OFORM_NAME,
    TRACKING_OFORM_TYPE,
    TRACKING_OFORM_FORMSTEP_ONE,
    TRACKING_OFORM_FORMSTEP_NAME,
    TRACKING_OFORM_FORM_STATUS_START,
} from '../../../constant';

describe('CustomerTypeSelection tracking', () => {

    test('test Initial tracking for not Logged in customer', () => {

        const loginStatus = TRACKING_LOGGED_IN;
        const siteStructure = ADDITIONAL_CMS_SITE_STRUCTURE;

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

        expect(initTracking(siteStructure, loginStatus)).toEqual(trackingPayload);
     });

     test('test connectionTypeStepTracking', () => {

        const loginStatus = TRACKING_LOGGED_IN;
        const siteStructure = ADDITIONAL_CMS_SITE_STRUCTURE;

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

        const trackParams = {
            formStep: TRACKING_OFORM_FORMSTEP_ONE,
            formStepName: TRACKING_OFORM_FORMSTEP_NAME,
            formStatus: [TRACKING_OFORM_FORM_STATUS_START],
            siteStructure: siteStructure,
            loginStatus: TRACKING_LOGGED_IN,
        };

        expect(connectionTypeStepTracking(trackParams)).toEqual(trackingPayload);
     });

 });
