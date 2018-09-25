// DEVELOPMENT
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers';
const enhancer = composeWithDevTools(
    applyMiddleware(thunk, createLogger())
);
if (process.env.ENV === 'development') {
    export default function configureStore (initialState) {
        return createStore(rootReducer, initialState, enhancer);
    }
} else {
    export default function configureStore (initialState) {
      return createStore(rootReducer, initialState, applyMiddleware(thunk))
    };

}