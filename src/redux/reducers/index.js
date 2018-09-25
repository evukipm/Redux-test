import { combineReducers } from 'redux';

import * as demoReducers from './demoReducers';

const store = combineReducers({
    ...demoReducers
});

export default store;
