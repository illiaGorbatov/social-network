import {loginAPI} from "../api/api";

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
                ...action.data, isAuth: true
            }
        default: return state
    }
};

const setAuthUserData = (id, email, login) => ({
    type: SET_USER_DATA,
    data: {
        id, email, login
    }
});

export const logIn = () => (dispatch) => {
    loginAPI.login().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export default authReducer