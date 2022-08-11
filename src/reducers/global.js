import produce from "../utils/produce";

export const initialState = {
    windowWidth: null,
    windowHeight: null,
    socket: null
};

export const SET_WINDOW_WIDTH = 'SET_WINDOW_WIDTH';
export const SET_WINDOW_HEIGHT = 'SET_WINDOW_HEIGHT';
export const SET_SOCKET = 'SET_SOCKET';

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
    case SET_WINDOW_WIDTH:
        draft.windowWidth = action.data;
        break;
    case SET_WINDOW_HEIGHT:
        draft.windowHeight = action.data;
        break;
    case SET_SOCKET:
        draft.socket = action.data;
        break;
    default:
        break;
    }
});

export default reducer;