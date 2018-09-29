
export const initial = {isFetching: true, isError: false};

export function commonReducer (state = initial, action, actionType) {
    const requestAction = `${actionType}_request`;
    const fulFilledAction = `${actionType}_fulfilled`;
    const rejectedAction = `${actionType}_reject`;
    switch (action.type) {
    case requestAction: {
        return Object.assign({}, state, {
            isFetching: true,
            isError: false
        });
    }
    case fulFilledAction: {
        if (action.onSuccess) {
            action.onSuccess(action.payload);
        }

        return Object.assign({}, state, {
            isFetching: false,
            isError: false,
            item: action.payload.data
        });
    }
    case rejectedAction:

        if (action.onError) {
            action.onError(action.payload);
        }

        // if (action.silent === undefined || !action.silent) {
        //     let message = action.payload;
        //     manageErrorMessage('reducer-error', message);
        // }

        return Object.assign({}, state, {
            isFetching: false,
            isError: true,
            err: action.payload
        });

    default:
        return state;
    }
}