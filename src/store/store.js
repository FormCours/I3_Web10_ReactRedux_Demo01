import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counter-reducer";

const reducer = combineReducers({
    counter: counterReducer,
//  product: productReducer,
//  weather: weatherReducer
});

export default createStore(reducer);