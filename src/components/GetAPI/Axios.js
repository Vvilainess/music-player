import axios from "axios";
const getData = (endpoint, token, method = "GET") => {
    return axios(endpoint, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        data: "grant_type=client_credentials",
        method: method,
    });
};

export default getData;
