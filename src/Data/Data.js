const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_POST_INPUT_VALUE = 'UPDATE_POST_INPUT_VALUE';
const UPDPATE_CHAT_INPUT_VALUE = 'UPDPATE_CHAT_INPUT_VALUE';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
        if (action.type === UPDATE_POST_INPUT_VALUE) {
            this._data.profile.postInputValue = action.value;
            this._rerenderEntireTree(this._data);
        } else if (action.type === ADD_NEW_POST) {
            let newPost = {
                post: this._data.profile.postInputValue,
                id: this._data.profile.posts.length + 1,
                likesCount: 1,
            };
            this._data.profile.posts.push(newPost);
            this._data.profile.postInputValue = '';
            this._rerenderEntireTree(this._data);
        } else if (action.type === UPDPATE_CHAT_INPUT_VALUE) {
            this._data.chat.chatInputCurrentValue = action.value;
            this._rerenderEntireTree(this._data);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                message: this._data.chat.chatInputCurrentValue,
                id: this._data.chat.messages.length + 1
            };
            this._data.chat.messages.push(newMessage);
            this._data.chat.chatInputCurrentValue = '';
            this._rerenderEntireTree(this._data);
        }
    },

    _rerenderEntireTree() {
        console.log('something');
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    getData() {
        return this._data;
    }
};

export const updateAddPostInputValueCreator = (inputValue) => ({type: UPDATE_POST_INPUT_VALUE, value: inputValue});
export const addPostCreator = () => ({type: ADD_NEW_POST});

export const updateChatInputValueCreator = (inputValue) => ({type: UPDPATE_CHAT_INPUT_VALUE, value: inputValue});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default storage;