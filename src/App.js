import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import getTokenFromUrl from "./components/Auth/getTokenFromUrl";
import getData from "./components/GetAPI/Axios";
import { getPlaylist, getCategories } from "./components/Auth/getTokenFromUrl";
import { useStore, actions } from "./components/Store";

function App() {
    const [state, dispatch] = useStore();
    const { access_token } = getTokenFromUrl();
    useEffect(() => {
        window.location.hash = "";
        /* const refreshApp = setTimeout(() => {
            window.location.reload();
        }, expires_in); */
        if (access_token) {
            console.log(access_token);
            dispatch(actions.setToken(access_token));
            getData("https://api.spotify.com/v1/me", access_token, "GET")
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
                        console.log(response.data);
                        const { items } = response.data;
                        dispatch(actions.setPlaylist(items));
                    })
                )
                .then(
                    getCategories(
                        `https://api.spotify.com/v1/browse/categories?offset=0&limit=50`,
                        access_token
                    ).then((response) => {
                        console.log(response);
                    })
                );
        }
        console.log("Rerender...");
        console.log(state.playlist);
        return () => {};
    }, [state, dispatch]);
    return <div className="App">{state.token ? <Layout /> : <Login />}</div>;
}

export default App;
