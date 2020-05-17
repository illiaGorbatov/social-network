import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b4801660-f864-43f9-8acc-579713cc64df"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"

})

export const usersAPI = {
    getUsers: (currentPage = 1, onPageUsersCount = 10) => (
        instance.get(`users?page=${currentPage}&count=${onPageUsersCount}`).then(res => res.data)
    ),
    getStatus: (userId) => (instance.get(`profile/status/${userId}`)),
    updateStatus: (status) => (instance.put(`profile/status`, {status})),
};

export const followUnfollowAPI = {
    followUser: (userId) => (instance.post(`follow/${userId}`).then(res => res.data)),
    unfollowUser: (userId) => (instance.delete(`follow/${userId}`).then(res => res.data))
};

export const loginAPI = {
    getMe: () => (instance.get('auth/me').then(res => res.data)),
    login: (email, password, rememberMe) => (instance.post('auth/login', {email, password, rememberMe})
        .then(res => res.data)),
    logout: () => (instance.delete('auth/login').then(res => res.data))
};

export const profileAPI = {
    getProfile: (userId) => (instance.get(`profile/${userId}`).then(res => res.data))
}