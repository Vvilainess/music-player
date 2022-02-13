import { SET_TOKEN, SET_USER } from "./constants";

export const setToken = (payload) => ({
    type: SET_TOKEN,
    payload,
});
export const setUser = (payload) => ({
    type: SET_USER,
    payload,
});
