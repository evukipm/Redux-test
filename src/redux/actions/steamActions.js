import { FETCH_USER_DATA } from '../../utils/apiEndpoints';
import { postAction, getAction } from './commonActions';

// COMENT ACTION TYPES
export const ACTIONS = {
    FETCH_USER_DATA: 'fetch_user_data',

};

export function fetchUser (id, onSuccess = null, onError = null) {
    return function (dispatch) {
        const URL = FETCH_USER_DATA.replace('{:id}', id);
        getAction(ACTIONS.FETCH_USER_DATA, URL, null, dispatch, onSuccess, onError);
    };
}
