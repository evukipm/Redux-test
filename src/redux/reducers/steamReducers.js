import { initial, commonReducer } from './commonReducers';
import { ACTIONS } from '../actions/steamActions';


export function user (state = initial, action) {
    return commonReducer(state, action, ACTIONS.FETCH_USER_DATA);
}

export function friends (state = initial, action) {
    return commonReducer(state, action, ACTIONS.FETCH_FRIENDS_DATA);
}

export default {
    user,
    friends,
}