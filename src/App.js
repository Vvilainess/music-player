import React, { useEffect } from "react";
import Login from "./components/Feature-components/Login";
import Layout from "./components/Layout/Layout";
import getTokenFromUrl from "./components/Auth/getTokenFromUrl";
import { useStore, actions } from "./components/Store";
import SpotifyWebApi from "spotify-web-api-js";
import {
    setCategories,
    setNewRelease,
    setPlaylist,
    setTopArtist,
    setTopList,
    setTrending,
    setUser,
} from "./components/Store/actions";

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
            spotify.getCategories({ limit: 50 }).then((response) => {
                console.log(response);
                dispatch(setCategories(response.categories.items));
            });
            spotify.getMyTopArtists((err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
            spotify.getCategoryPlaylists("toplists", (err, data) => {
                if (err) console.log(err);
                if (data)
                    dispatch(setTopList(data.playlists.items.slice(0, 6)));
                console.log(data.playlists.items);
            });
            spotify.getCategoryPlaylists("popculture", (err, data) => {
                if (err) console.log(err);
                if (data)
                    dispatch(setTrending(data.playlists.items.slice(0, 6)));
                console.log(data.playlists.items);
            });
            spotify.getNewReleases((err, data) => {
                if (err) console.log(err);
                if (data)
                    dispatch(setNewRelease(data.albums.items.slice(0, 6)));
            });
        }
        return () => {};
    }, [token, playlists, input, user, dispatch]);
    return <div className="App">{token ? <Layout /> : <Login />}</div>;
}

export default App;
