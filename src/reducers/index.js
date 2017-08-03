import * as types from '../actions/ActionTypes'

const initialState = {
    filterBy: ''
}

export default function filtering(state = initialState, action) {
    switch (action.type) {
        case types.SET_FILTER:
            console.log(`예전엔 ${state.filterBy}였고 지금은 ${action.input}`);
            return Object.assign({}, state, {
                    filterBy: action.input
                })
        default:
            return state;
    }
}