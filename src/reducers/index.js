import * as types from '../actions/ActionTypes'

// Reducer : 기존 constructor의 state 역할.

// 리듀서 함수는 state 와 action 을 파라미터로 가지는 함수.
// 그 내부에서 switch 문을 통하여 action.type 에 따라 상태에 다른 변화를 일으키면 됨


const initialState = {
    number: 0,
    diff: 1
};

const reducers = ( state = initialState, action ) => { //action ????
    switch(action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: +state.number + +state.diff
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - state.diff
            }
        case types.SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        default:
            return state;
    }
};

export default reducers;