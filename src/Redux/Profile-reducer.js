import {profileAPI, usersAPI} from "../api/api";

const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_POST_INPUT_VALUE = 'UPDATE_POST_INPUT_VALUE';
const SET_USER_PAGE = 'SET_USER_PAGE';
const SET_STATUS = 'SET_STATUS'

let initialState = {
    userInfo: {
        aboutMe: "\O_O/",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/mur0mec",
            twitter: "https://twitter.com/@sdf",
            instagram: "",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "Fullstack 10k min",
        fullName: "Илья Hesus",
        userId: 2,
        photos: {
            small: "https://pp.userapi.com/c850120/v850120842/c2696/bbWc33P1C_k.jpg?ava=1",
            large: "https://spotlight.it-notes.ru/wp-content/uploads/2018/02/0f32f124a14b3e20db88e50da69ad686.jpg"
        }
    },
    posts: [
        {post: 'Hey there!', id: 1, likesCount: 5},
        {post: 'Nigga', id: 2, likesCount: 4},
        {post: 'Bitch!', id: 3, likesCount: 3},
    ],
    status: ''
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                post: action.post,
                id: state.posts.length + 1,
                likesCount: 1,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                postInputValue: ''
            };
        case SET_USER_PAGE:
            return {
                ...state,
                userInfo: action.userInfo
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const addPost = (post) => ({type: ADD_NEW_POST, post});
export const setUserInfo = (userInfo) => ({type: SET_USER_PAGE, userInfo});
const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserPage = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserInfo(data));
    })
};
export const getStatus = (userId) => (dispatch) => {
    usersAPI.getStatus(userId).then(res => {
        dispatch(setStatus(res.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    usersAPI.updateStatus(status).then(res => {
        if (res.data.resultCode === 0) dispatch(setStatus(status))
    })
}

