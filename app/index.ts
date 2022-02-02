/* istanbul ignore file */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { configStore } from '@vfde-fe/sails_core';
import CustomerTypeSelection from './container/CustomerTypeSelection';

const store = configStore({});
store && CustomerTypeSelection();
