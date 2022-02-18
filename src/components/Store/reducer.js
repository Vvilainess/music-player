import {
    SET_TOKEN,
    SET_USER,
    SET_PLAYLIST,
    SET_CATEGORIES,
    SET_SEARCHRESULT,
} from "./constants";

const initialState = {
    token: "",
    user: {},
    playlist: [],
    searchResult: null,
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
        case SET_SEARCHRESULT:
            return {
                ...state,
                searchResult: actions.payload,
            };
        default:
            throw new Error("Invalid action!");
    }
}
export { initialState };
export default reducer;
