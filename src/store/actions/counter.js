import * as actionTypes from './../action-type';

export const increament = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const add = (payload) => {
    return {
        type: actionTypes.ADD,
        payload
    }
}

export const subtract = (payload) => {
    return {
        type: actionTypes.SUBTRACT,
        payload
    }
}