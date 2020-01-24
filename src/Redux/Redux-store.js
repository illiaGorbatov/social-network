import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {messagesReducer} from "./Messages-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    chat: messagesReducer,
});

const store = createStore(reducers);

export default store;