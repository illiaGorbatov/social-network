const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_POST_INPUT_VALUE = 'UPDATE_POST_INPUT_VALUE';

let initialState = {posts: [
        {post: 'Hey there!', id: 1, likesCount: 5},
        {post: 'Nigga', id: 2, likesCount: 4},
        {post: 'Bitch!', id: 3, likesCount: 3},
    ],
    postInputValue: '',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_INPUT_VALUE:
            state.postInputValue = action.value;
            return state;
        case ADD_NEW_POST:
            let newPost = {
                post: state.postInputValue,
                id: state.posts.length + 1,
                likesCount: 1,
            };
            state.posts.push(newPost);
            state.postInputValue = '';
            return state;
        default:
            return state;
    }
};

export const updateAddPostInputValueCreator = (inputValue) => ({type: UPDATE_POST_INPUT_VALUE, value: inputValue});
export const addPostCreator = () => ({type: ADD_NEW_POST});

