import { combineReducers } from 'redux';

import * as steamReducers from './steamReducers';

const store = combineReducers({
    ...steamReducers
});

export default store;
