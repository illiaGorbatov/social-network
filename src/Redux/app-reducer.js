import {getUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
};

const initializingSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getUserData());
    promise.then(dispatch(initializingSuccess()))
};

export default appReducer