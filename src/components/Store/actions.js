import {
    SET_TOKEN,
    SET_USER,
    SET_PLAYLIST,
    SET_CATEGORIES,
    SET_SEARCHRESULT,
    SET_INPUT,
    SET_RECENTPLAYED,
    SET_ARTISTS,
    SET_PLAYLISTDETAIL,
} from "./constants";

export const setToken = (payload) => ({
    type: SET_TOKEN,
    payload,
});
export const setUser = (payload) => ({
    type: SET_USER,
    payload,
});
export const setPlaylist = (payload) => ({
    type: SET_PLAYLIST,
    payload,
});
export const setCategories = (payload) => ({
    type: SET_CATEGORIES,
    payload,
});
export const setSearchResult = (payload) => ({
    type: SET_SEARCHRESULT,
    payload,
});
export const setArtist = (payload) => ({
    type: SET_ARTISTS,
    payload,
});
export const setInput = (payload) => ({
    type: SET_INPUT,
    payload,
});
export const setRecentPlayed = (payload) => ({
    type: SET_RECENTPLAYED,
    payload,
});
export const setPlaylistDetail = (payload) => ({
    type: SET_PLAYLISTDETAIL,
    payload,
});
