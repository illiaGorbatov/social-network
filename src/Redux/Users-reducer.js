const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    usersList: [],
    totalUsersCount: 1,
    onPageUsersCount: 10,
    currentPage: 1
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
        default:
            return state;
    }
};

export const followThisUser = (userId) => ({type: FOLLOW_USER, userId});
export const unfollowThisUser = (userId) => ({type: UNFOLLOW_USER, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersTotalCount = (count) => ({type: SET_USERS_TOTAL_COUNT, count});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});

