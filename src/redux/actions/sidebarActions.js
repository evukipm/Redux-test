export const ACTIONS = {
    TOGGLE_SIDEBAR: 'toggle_sidebar'
}

export function toggleSidebar () {
    return function (dispatch) {
        dispatch({
            type: ACTIONS.TOGGLE_SIDEBAR
        })
    };
}