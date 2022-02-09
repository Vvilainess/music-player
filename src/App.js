import React, { useState, useEffect } from "react";
import axios from "axios";
import Switch from "./components/router/Switch";
import Credentials from "./components/auth/Credentials";
import SideBar from "./components/sidebar/SideBar";

function App() {
    const spotify = Credentials();

    const [token, setToken] = useState("");
    const [genres, setGenres] = useState({
        selectedGenre: "",
        listOfGenresFromAPI: [],
    });
    const [playlist, setPlaylist] = useState({
        selectedPlaylist: "",
        listOfPlaylistFromAPI: [],
    });
    const [tracks, setTracks] = useState({
        selectedTrack: "",
        listOfTracksFromAPI: [],
    });
    const id = "06HL4z0CvFAxyc27GXpf02";
    const market = "US";
    const [trackDetail, setTrackDetail] = useState(null);
    /*  useEffect(() => {
        axios("https://accounts.spotify.com/api/token", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization:
                    "Basic " +
                    btoa(spotify.ClientId + ":" + spotify.ClientSecret),
            },
            data: "grant_type=client_credentials",
            method: "POST",
        })
            .then((tokenResponse) => {
                console.log(tokenResponse);
                setToken(tokenResponse.data.access_token);
                axios(
                    "https://api.spotify.com/v1/browse/categories?locale=sv_VN",
                    {
                        method: "GET",
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                    }
                ).then((genreResponse) => {
                    console.log(genreResponse);
                    setGenres({
                        selectedGenre: genres.selectedGenre,
                        listOfGenresFromAPI:
                            genreResponse.data.categories.items,
                    });
                });
            })
            .then(() =>
                axios(
                    `https://api.spotify.com/v1/artists/${id}/top-tracks?market=${market}`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                    }
                ).then((tracksResponse) => {
                    console.log(tracksResponse);
                })
            );
    }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]); */

    return (
        <div className="App">
            <SideBar />
            <div className="relative ml-[241px]">
                <Switch />
            </div>
        </div>
    );
}

export default App;
