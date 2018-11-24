import { FETCH_USER_DATA, FETCH_FRIENDS_DATA } from '../../utils/apiEndpoints';
import { postAction, getAction } from './commonActions';

// COMENT ACTION TYPES
export const ACTIONS = {
    FETCH_USER_DATA: 'fetch_user_data',
    FETCH_FRIENDS_DATA: 'fetch_friends_data'
};

export function fetchUser (id, onSuccess = null, onError = null) {
    return function (dispatch) {
        const URL = FETCH_USER_DATA.replace('{:id}', id);
        getAction(ACTIONS.FETCH_USER_DATA, URL, null, dispatch, onSuccess, onError);
    };
}

export function fetchFriends (id, onSuccess = null, onError = null) {
    return function (dispatch) {
        const URL = FETCH_FRIENDS_DATA.replace('{:id}', id);
        getAction(ACTIONS.FETCH_FRIENDS_DATA, URL, null, dispatch, onSuccess, onError);
    };
}