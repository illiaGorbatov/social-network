import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {messagesReducer} from "./Messages-reducer";
import {usersPageReducer} from "./Users-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    chat: messagesReducer,
    users: usersPageReducer
});

const store = createStore(reducers);

export default store;