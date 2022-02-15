import { SET_TOKEN, SET_USER, SET_PLAYLIST } from "./constants";

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
