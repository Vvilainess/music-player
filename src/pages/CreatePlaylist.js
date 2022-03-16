import React from "react";
import Header from "../components/Header-components/Header";
const CreatePlaylist = () => {
    return (
        <div className="relative bg-[#535353]">
            <Header background="bg-transparient" />
            <div>
                <div>
                    <svg
                        role="img"
                        height="48"
                        width="48"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="Svg-sc-1bi12j5-0 hDgDGI"
                    >
                        <path d="M17.318 1.975a3.329 3.329 0 114.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 01-1.28-1.28l1.581-4.376a4.726 4.726 0 011.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 00-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 001.001-.636L20.611 5.268a1.329 1.329 0 000-1.879z"></path>
                    </svg>
                </div>
                <div>
                    <p>Playlist</p>
                    <h1>platlist name</h1>
                    <p>user name</p>
                </div>
            </div>
        </div>
    );
};

export default CreatePlaylist;
