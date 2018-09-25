import { PUBLISH_COMENT, FETCH_COMENTS } from '../../utils/apiEndpoints';
import { postAction, getAction } from './commonActions';

// COMENT ACTION TYPES
export const ACTIONS = {
    DEMO_FETCH: 'demo_fetch',
    DEMO_POST: 'demo_post'
};

export function demoPostAction (id, onSuccess = null, onError = null) {
    return function (dispatch) {
        const URL = FETCH_COMENTS.replace('{:id}', id);
        getAction(ACTIONS.DEMO_FETCH, URL, null, dispatch, onSuccess, onError);
    };
}

export function demoGetAction (data, onSuccess = null, onError = null) {
    return function (dispatch) {
        const URL = PUBLISH_COMENT;
        postAction(ACTIONS.DEMO_POST, URL, data, dispatch, onSuccess, onError);
    };
}
