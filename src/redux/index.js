import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { thunk } from "redux-thunk";

// reducers
import loadingReducer from './reducers/loading';

const reducers = combineReducers({
    loadingReducer
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));
export default store;