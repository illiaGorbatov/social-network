import {profileReducer} from "./Profile-reducer";
import {messagesReducer} from "./Messages-reducer";

let storage = {
    _data: {
        chat: {
            messages: [
                {message: 'норм', id: 1},
                {message: 'кодишь,', id: 2},
                {message: 'Хорёк =)', id: 3},
            ],
            friends: [
                {name: 'Геннадий', id: 1},
                {name: 'Леша', id: 2},
                {name: 'Леонид', id: 3},
                {name: 'Лаврентий', id: 4},
            ],
            chatInputCurrentValue: '',
        },
        friends: [
            {name: 'Гена', id: 1},
            {name: 'Жорик', id: 2},
            {name: 'Лаврентий', id: 3},
            {name: 'Дементий', id: 4},
        ],
        newsfeed: [],
        profile: {
            posts: [
                {post: 'Hey there!', id: 1, likesCount: 5},
                {post: 'Nigga', id: 2, likesCount: 4},
                {post: 'Bitch!', id: 3, likesCount: 3},
            ],
            postInputValue: '',
        },
    },
    dispatch(action) {
        this._data.profile = profileReducer(this._data.profile, action);
        this._data.chat = messagesReducer(this._data.chat, action);
        this._callSubscriber(this._data);
    },

    _callSubscriber() {
        console.log('something');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._data;
    }
};

export default storage;