import {followUnfollowAPI, usersAPI} from "../api/api";

const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
    usersList: [],
    totalUsersCount: 1,
    onPageUsersCount: 10,
    currentPage: 1,
    followingInProgress: []
};

export const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                usersList: state.usersList.map( user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: true
                        }
                    } else return user
                })
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                usersList: state.usersList.map( user => {
                    if (user.id === action.userId) {
                        return {
                            ...user, followed: false
                        }
                    } else return user
                })
            };
        case SET_USERS:
            return {
                ...state,
                usersList: action.users,
            };
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            };
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching? [...state.followingInProgress, action.userId]:
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW_USER, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW_USER, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersTotalCount = (count) => ({type: SET_USERS_TOTAL_COUNT, count});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const toggleFollowingProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId});


export const getUsers = (currentPage = 1, onPageUsersCount) => (dispatch) => {
    usersAPI.getUsers(currentPage, onPageUsersCount).then(data => {
        dispatch(setCurrentPage(currentPage))
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    })
};
export const followUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    followUnfollowAPI.followUser(userId).then(data => {
        if (data.resultCode === 0) dispatch(followSuccess(userId));
        dispatch(toggleFollowingProgress(false, userId));
    })
};
export const unfollowUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    followUnfollowAPI.unfollowUser(userId).then(data => {
        if (data.resultCode === 0) dispatch(unfollowSuccess(userId));
        dispatch(toggleFollowingProgress(false, userId));
    })
}

