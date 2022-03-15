import {cartReducer} from "./cart/reducers";

const allReducers = combineReducers({
    cartReducer,
});

export default allReducers;