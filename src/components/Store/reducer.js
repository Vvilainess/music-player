import { SET_TOKEN, SET_USER, SET_PLAYLIST, SET_CATEGORIES } from "./constants";

const initialState = {
    token: "",
    user: {},
    playlist: [],
    discovery_weekly: null,
    top_artists: null,
    playing: false,
    categories: [],
};

function reducer(state, actions) {
    switch (actions.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: actions.payload,
            };
        case SET_USER:
            return {
                ...state,
                user: actions.payload,
            };
        case SET_PLAYLIST:
            return {
                ...state,
                playlist: actions.payload,
            };
        case SET_CATEGORIES:
            return {
                ...state,
                categories: actions.payload,
            };
        default:
            throw new Error("Invalid action!");
    }
}
export { initialState };
export default reducer;
