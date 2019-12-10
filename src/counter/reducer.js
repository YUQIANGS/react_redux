import * as types from './actionTypes';

const defaultState = {
    first: 5,
    second: 10,
    thrid: 15,
}

export const reducer = (state=defaultState,action) => {
    const name = action.name;
    switch(action.type){
        case types.increaseType:{ 
            return Object.assign({},state,{[name]:state[name]+1});
        }
        case types.decreaseType:{ 
            return Object.assign({},state,{[name]:state[name]-1});
        }
        default:
            return state;
    }
}