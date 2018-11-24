import { ACTIONS } from '../actions/sidebarActions';


export function sidebarStatus (state = true, action) {
    switch (action.type) {
        case ACTIONS.TOGGLE_SIDEBAR:
            return !state
    
        default:
            return state
    }
}

export default {
    sidebarStatus
}