import {
    SET_TOKEN,
    SET_USER,
    SET_PLAYLIST,
    SET_CATEGORIES,
    SET_SEARCHRESULT,
    SET_RECENTPLAYED,
    SET_INPUT,
    SET_ARTISTS,
    SET_PLAYLISTDETAIL,
} from "./constants";

const initialState = {
    token: "",
    user: {},
    playlist: [],
    playlistDetail: null,
    recentPlayed: {},
    input: "",
    searchResult: null,
    artists: null,
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
        case SET_PLAYLISTDETAIL:
            return {
                ...state,
                playlistDetail: actions.payload,
            };
        case SET_RECENTPLAYED:
            return {
                ...state,
                recentPlayed: [...state, actions.payload],
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
        case SET_ARTISTS:
            return {
                ...state,
                artists: actions.payload,
            };
        case SET_INPUT:
            return {
                ...state,
                input: actions.payload,
            };
        default:
            throw new Error("Invalid action!");
    }
}
export { initialState };
export default reducer;
