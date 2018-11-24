import { combineReducers } from 'redux';

import * as steamReducers from './steamReducers';
import * as sidebarReducers from './sidebarReducers';

const store = combineReducers({
    ...steamReducers,
    ...sidebarReducers
});

export default store;
