import {profileAPI} from "../api/api";

const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_POST_INPUT_VALUE = 'UPDATE_POST_INPUT_VALUE';
const SET_USER_PAGE = 'SET_USER_PAGE';

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
    postInputValue: '',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_INPUT_VALUE:
            return {
                ...state,
                postInputValue: action.value,
            };
        case ADD_NEW_POST:
            let newPost = {
                post: state.postInputValue,
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
        default:
            return state;
    }
};

export const addPostInputChange = (value) => ({type: UPDATE_POST_INPUT_VALUE, value});
export const addPost = () => ({type: ADD_NEW_POST});
export const setUserInfo = (userInfo) => ({type: SET_USER_PAGE, userInfo});

export const getUserPage = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserInfo(data));
    })
}

