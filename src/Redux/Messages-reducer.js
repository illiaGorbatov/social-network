const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {message: action.newMessage, id: 5}],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage});

