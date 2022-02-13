import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import getTokenFromUrl from "./components/Auth/getTokenFromUrl";
import getData from "./components/GetAPI/Axios";
import { getPlaylist } from "./components/Auth/getTokenFromUrl";
import { useStore, actions } from "./components/Store";

function App() {
    const [state, dispatch] = useStore();
    useEffect(() => {
        const { access_token, token_type } = getTokenFromUrl();
        window.location.hash = "";
        if (access_token) {
            console.log(access_token);
            dispatch(actions.setToken(access_token));
            /* Get user info */
            getData("https://api.spotify.com/v1/me", access_token, "GET")
                .then((userResponse) => {
                    const { display_name, images } = userResponse.data;
                    dispatch(actions.setUser({ display_name, images }));
                })
                .catch((error) => {
                    console.log(error);
                });
            /* Get Playlists */
            getPlaylist(access_token)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => console.log(error));
        }
        return () => {};
    }, [state.token, state.user, dispatch]);
    return <div className="App">{state.token ? <Layout /> : <Login />}</div>;
}

export default App;
