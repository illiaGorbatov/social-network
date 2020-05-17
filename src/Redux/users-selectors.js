import {createSelector} from "reselect";

const getUsers = (state) => {
    return state.users.usersList
};
export const getUsersSelect = createSelector(getUsers, (users) => {
    return users
})

export const getUsersCount = (state) => {
    return state.users.totalUsersCount
};
export const getOnPageUsersCount = (state) => {
    return state.users.onPageUsersCount
};
export const getCurrentPage = (state) => {
    return state.users.currentPage
};
export const getFollowingInProgress = (state) => {
    return state.users.followingInProgress
};