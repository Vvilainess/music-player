import React from "react";
const requestAPI = () => {
    axios("https://accounts.spotify.com/api/token", {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
                "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
        },
        data: "grant_type=client_credentials",
        method: "POST",
    }).then((tokenResponse) => {
        setToken(tokenResponse.data.access_token);
    });
};

export default requestAPI;
