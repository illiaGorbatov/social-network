const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const REQUEST_USERS = 'REQUEST_USERS';

let initialState = {
    usersList: [
        {firstName: 'Illia', secondName: 'Horbatov', location: {country: 'Belarus', city:'Minsk' }, followed: true,
        userAvatar: 'https://pp.userapi.com/c850120/v850120842/c2696/bbWc33P1C_k.jpg?ava=1', id: 1},
        {firstName: 'Hesus', secondName: 'Christ', location: {country: 'Israel', city:'Jerusalem' }, followed: false,
        userAvatar: 'https://previews.123rf.com/images/panyamail/panyamail1809/panyamail180900343/109879063-user-avatar-icon-sign-profile-symbol.jpg', id: 2},
        {firstName: 'Deus', secondName: 'Vult', location: {country: 'Vatican', city:'Vatican' }, followed: true,
        userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png', id: 3}
    ]
};

export const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                usersList: state.usersList.map( user => {
                    if (user.id === action.userID) {
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
                    if (user.id === action.userID) {
                        return {
                            ...user, followed: false
                        }
                    } else return user
                })
            };
        case REQUEST_USERS:
            return state;
        default:
            return state;
    }
};

export const followThisUserAC = (id) => ({type: FOLLOW_USER, userID: id});
export const unfollowThisUserAC = (id) => ({type: UNFOLLOW_USER, userID: id});

