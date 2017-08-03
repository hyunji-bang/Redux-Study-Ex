import * as types from '../actions/ActionTypes'

const initialState = {
    filterBy: ''
}

function filtering(state = initialState, action) {
    switch (action.type) {
        case types.SET_FILTER:
            return
                Object.assign({}, state, {
                    filterBy: action.input
                })
        default:
            return state;
    }
}

export default filtering;