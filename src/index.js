import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "./components/Store";

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <Router>
                <App />
            </Router>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
