import {loginAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
};

const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        id, email, login, isAuth
    }
});

export const getUserData = () => (dispatch) => {
    return loginAPI.getMe().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
};
export const login = (email, password, rememberMe) => (dispatch) => {
    loginAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getUserData())
        } else {
            let message = data.messages.length > 0 ? data.messages : 'Логин или пароль неверный'
            dispatch(stopSubmit('Login', {_error: message}))
        }
    })
}

export const logout = () => (dispatch) => {
    loginAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export default authReducer