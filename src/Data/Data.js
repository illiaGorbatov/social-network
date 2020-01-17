import {render} from "./render";

let data = {
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
    posts: [
        {post: 'Hey there!', id: 1, likesCount: 5},
        {post: 'Nigga', id: 2, likesCount: 4},
        {post: 'Bitch!', id: 3, likesCount: 3},
    ],
};

export let addPost = (postMessage) => {
    let newPost = {
        post: postMessage,
        id: data.posts.length+1,
        likesCount: 1,
    };
    data.posts.push(newPost);
    render(data, addPost);
};

export default data;