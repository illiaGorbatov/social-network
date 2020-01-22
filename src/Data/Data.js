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
            ]
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
        }
    },
    addPost() {
        let newPost = {
            post: this._data.profile.postInputValue,
            id: this._data.profile.posts.length + 1,
            likesCount: 1,
        };
        this._data.profile.posts.push(newPost);
        this._data.profile.postInputValue = '';
        this._rerenderEntireTree(this._data);
    },
    updatePostCurrentValue(value) {
        this._data.profile.postInputValue = value;
        this._rerenderEntireTree(this._data);
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

export default storage;