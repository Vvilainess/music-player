import { Credentials } from "./Credentials";
import axios from "axios";

const spotifyAuth = Credentials();
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const SPOTIFY_PLAYLIST_ENDPOINT =
    "https://api.spotify.com/v1/users/user_id/playlists";
const SPACER = "%20";
const SCOPES = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
const SCOPES_URL_PARAMS = SCOPES.join(SPACER);

const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((prev, curr) => {
            const [key, value] = curr.split("=");
            prev[key] = value;
            console.log(prev);
            return prev;
        }, {});
};
const getPlaylist = (endpoint, token) => {
    return axios
        .get(endpoint, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .catch((error) => console.log(error));
};
const getCategories = (endpoint, token) => {
    return axios
        .get(endpoint, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .catch((error) => console.log(error));
};
export { getPlaylist, getCategories };
export const accessUrl = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${spotifyAuth.ClientId}&redirect_uri=${spotifyAuth.RedirectUri}&scope=${SCOPES_URL_PARAMS}&response_type=token&show_dialog=true`;
export default getTokenFromUrl;
