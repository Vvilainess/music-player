import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PlayList from "../../pages/PlayList";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import RecentPlayed from "../../pages/RecentPlayed";
import Recommended from "../../pages/Recommended";

const Sidebar = () => {
    return (
        <Router>
            <div className="relative w-1/4 h-screen bg-slate-800 pl-5 py-5 mr-3">
                <div>
                    <h1 className="text-white text-3xl font-medium">
                        Playlist
                    </h1>
                </div>
                <div className="pt-5 pb-12">
                    <ul>
                        <li className="text-gray-600 hover:text-cyan-600 transition-all ease duration-200 flex items-center pb-3">
                            <BsIcons.BsMusicNoteBeamed />
                            <Link className="capitalize pl-4" to="/playlist">
                                My Playlist
                            </Link>
                        </li>
                        <li className="text-gray-600 hover:text-cyan-600 transition-all ease duration-200 flex items-center pb-3">
                            <FaIcons.FaDotCircle />
                            <Link
                                className="capitalize pl-4"
                                to="/recentplayed"
                            >
                                Last Listening
                            </Link>
                        </li>
                        <li className="text-gray-600 hover:text-cyan-600 transition-all ease duration-200 flex items-center pb-3">
                            <FaIcons.FaDotCircle />
                            <Link className="capitalize pl-4" to="/recommended">
                                Recommended
                            </Link>
                        </li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/playlist" element={<PlayList />} />
                    <Route path="/recentplayed" element={<RecentPlayed />} />
                    <Route path="/recommended" element={<Recommended />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Sidebar;
