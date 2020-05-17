import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {messagesReducer} from "./Messages-reducer";
import {usersPageReducer} from "./Users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    chat: messagesReducer,
    users: usersPageReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));
window.store = store

export default store;