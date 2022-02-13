import { SET_TOKEN, SET_USER } from "./constants";

const initialState = {
    token: "",
    user: {},
    discovery_weekly: null,
    top_artists: null,
    playing: false,
    item: [],
};

function reducer(state, action) {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            throw new Error("Invalid action!");
    }
}
export { initialState };
export default reducer;
