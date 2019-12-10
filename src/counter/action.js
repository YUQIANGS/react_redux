import * as types from "./actionTypes";

export const increase = (name) => {
    return {
        type: types.increaseType,
        name
    }
}


export const decrease = (name) => {
    return {
        type: types.decreaseType,
        name
    }
}