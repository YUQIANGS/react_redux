import { createStore,combineReducers } from 'redux';
import { reducer as countReducer } from "./counter/reducer";

const reducer = combineReducers({
    counter: countReducer
});
const store = createStore(reducer);

export default store