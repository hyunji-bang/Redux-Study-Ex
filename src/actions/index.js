import * as types from './ActionTypes'

export const increment = () => ({
    type: types.INCREMENT
})

export const decrement = () => ({
    type: types.DECREMENT
})

export const setdiff = (input) => ({
    type: types.SET_DIFF,
    input
})