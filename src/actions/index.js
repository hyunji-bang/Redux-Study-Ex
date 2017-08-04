import * as types from './ActionTypes'

// Action: 어떤 변화가 일어나야 할 지 알려주는 객체

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export const setdiff = (input) => ({
    type: SET_DIFF,
    diff: input
})