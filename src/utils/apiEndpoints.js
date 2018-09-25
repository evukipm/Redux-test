// AUTH ENDPOINTS
export const FETCH_USER_DATA = '/auth/active_user';
export const LOGIN_USER = '/auth/login';

// ARTICLES ENDPOINTS
export const FETCH_FEATURED_ARTICLES = '/articles';
export const FETCH_ARTICLE_BY_ID = '/article/{:id}';

// COMENTS ENDPOINTS
export const FETCH_COMENTS = '/article/coments/{:id}';
export const PUBLISH_COMENT = '/coment/add';