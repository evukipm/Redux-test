import { initial, commonReducer } from './commonReducers';
import { ACTIONS } from '../actions/demoActions';


export function articles (state = initial, action) {
    return commonReducer(state, action, ACTIONS.FETCH_FEATURED_ARTICLES);
}

export function articleDetail (state = initial, action) {
    return commonReducer(state, action, ACTIONS.FETCH_ARTICLE_BY_ID);
}
