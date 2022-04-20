import React, { useEffect } from "react";
import Login from "./components/Feature-components/Login";
import Layout from "./components/Layout/Layout";
import getTokenFromUrl, {
    getPlaylist,
    getCategories,
} from "./components/Auth/getTokenFromUrl";
import getData from "./components/GetAPI/Axios";
import { useStore, actions } from "./components/Store";
import SpotifyWebApi from "spotify-web-api-js";
import {
    setCategories,
    setPlaylist,
    setTopArtist,
    setUser,
} from "./components/Store/actions";
import CategoryItem from "./components/Utils/Category/CategoryItem";

export const spotify = new SpotifyWebApi();
function App() {
    const [{ token, playlists, input, user }, dispatch] = useStore();
    useEffect(() => {
        const { access_token } = getTokenFromUrl();
        window.location.hash = "";
        let _token = access_token;
        if (_token) {
            spotify.setAccessToken(_token);
            console.log(access_token);
            dispatch(actions.setToken(_token));
            spotify.getMe().then((user) => dispatch(setUser(user)));
            spotify.getMyTopArtists().then((response) => {
                dispatch(setTopArtist(response.items));
            });
            spotify.getUserPlaylists().then((playlists) => {
                dispatch(setPlaylist(playlists.items));
            });
            spotify.getCategories().then((response) => {
                console.log(response.categories.items);
                dispatch(setCategories(response.categories.items));
            });
            spotify.search(input).then((response) => {
                console.log(response);
            });
            /* getData("https://api.spotify.com/v1/me", access_token, "GET")
                .then((userResponse) => {
                    const { display_name, images, id } = userResponse.data;
                    console.log(id);
                    dispatch(actions.setUser({ display_name, images, id }));
                })
                .then(
                    getPlaylist(
                        `https://api.spotify.com/v1/me/playlists`,
                        access_token
                    ).then((response) => {
                        const { items } = response.data;
                        dispatch(actions.setPlaylist(items));
                    })
                )
                .then(
                    getCategories(
                        `https://api.spotify.com/v1/browse/categories?offset=0&limit=50`,
                        access_token
                    ).then((response) => {
                        dispatch(
                            actions.setCategories(
                                response.data.categories.items
                            )
                        );
                    })
                ); */
        }
        return () => {};
    }, [token, playlists, user, dispatch]);
    return <div className="App">{token ? <Layout /> : <Login />}</div>;
}

export default App;
