import API from './axiosInstance';
import axios from 'axios';

export function getAction (type, url, params, dispatch, onSuccess, onError) {
    let requestAction = type + '_request';
    let fullfilledAction = type + '_fulfilled';
    let rejectedAction = type + '_rejected';

    dispatch({type: requestAction});
    API().get(url, {
        params: params
    })
        .then((response) => {
            dispatch({
                type: fullfilledAction,
                payload: response.data
            });

            if (onSuccess) {
                onSuccess(response.data);
            }
        })
        .catch((err) => {
            dispatch({
                type: rejectedAction,
                payload: err
            });

            if (onError) {
                onError();
            }
        });
}

export function customGetAction (type, url, params, dispatch, onSuccess, onError) {
    let requestAction = type + '_request';
    let fullfilledAction = type + '_fulfilled';
    let rejectedAction = type + '_rejected';

    dispatch({type: requestAction});
    axios.get(url, {
        params: params
    })
        .then((response) => {
            dispatch({
                type: fullfilledAction,
                payload: response
            });

            if (onSuccess) {
                onSuccess(response);
            }
        })
        .catch((err) => {
            dispatch({
                type: rejectedAction,
                payload: err
            });

            if (onError) {
                onError();
            }
        });
}

export function postAction (type, url, data, dispatch, onSuccess, onError) {
    // console.log('listingAction type : ' + type);
    let requestAction = type + '_request';
    let fullfilledAction = type + '_fulfilled';
    let rejectedAction = type + '_rejected';

    dispatch({type: requestAction});

    API().post(url, data)
        .then((response) => {
            dispatch({
                type: fullfilledAction,
                payload: response.data
            });

            if (onSuccess) {
                onSuccess(response.data);
            }
        })
        .catch((err) => {
            dispatch({
                type: rejectedAction,
                payload: err
            });

            if (onError) {
                onError(err);
            }
        });
}


export function putAction (type, url, data, dispatch, onSuccess, onError) {
    // console.log('listingAction type : ' + type);
    let requestAction = type + '_request';
    let fullfilledAction = type + '_fulfilled';
    let rejectedAction = type + '_rejected';

    dispatch({type: requestAction});

    API().put(url, data)
        .then((response) => {
            dispatch({
                type: fullfilledAction,
                payload: response.data
            });

            if (onSuccess) {
                onSuccess(response.data);
            }
        })
        .catch((err) => {
            dispatch({
                type: rejectedAction,
                payload: err
            });

            if (onError) {
                onError(err);
            }
        });
}
