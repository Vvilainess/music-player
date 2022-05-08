import {
    SET_TOKEN,
    SET_USER,
    SET_TOP_ARTISTS,
    SET_PLAYLIST,
    SET_CATEGORIES,
    SET_SEARCHRESULT,
    SET_RECENTPLAYED,
    SET_INPUT,
    SET_ARTISTS,
    SET_PLAYLISTDETAIL,
    SET_TOPLIST,
    SET_TRENDING,
    SET_NEWRELEASE,
} from "./constants";

const initialState = {
    token: "",
    user: {},
    topartists: {},
    playlist: [],
    playlistDetail: null,
    recentPlayed: null,
    input: "",
    searchResult: null,
    artists: null,
    toplist: null,
    top_artists: null,
    trending: null,
    newRelease: null,
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
        case SET_TOP_ARTISTS:
            return {
                ...state,
                top_artists: actions.payload,
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
                recentPlayed: actions.payload,
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
        case SET_TOPLIST:
            return {
                ...state,
                toplist: actions.payload,
            };
        case SET_TRENDING:
            return {
                ...state,
                trending: actions.payload,
            };
        case SET_NEWRELEASE:
            return {
                ...state,
                newRelease: actions.payload,
            };
        default:
            throw new Error("Invalid action!");
    }
}
export { initialState };
export default reducer;
