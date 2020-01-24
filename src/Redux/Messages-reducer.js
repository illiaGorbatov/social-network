const UPDATE_CHAT_INPUT_VALUE = 'UPDPATE_CHAT_INPUT_VALUE';
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
    chatInputCurrentValue: '',
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CHAT_INPUT_VALUE:
            state.chatInputCurrentValue = action.value;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                message: state.chatInputCurrentValue,
                id: state.messages.length + 1
            };
            state.messages.push(newMessage);
            state.chatInputCurrentValue = '';
            return state;
        default:
            return state;
    }
};

export const updateChatInputValueCreator = (inputValue) => ({type: UPDATE_CHAT_INPUT_VALUE, value: inputValue});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

