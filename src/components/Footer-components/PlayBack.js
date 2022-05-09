import React, { useEffect } from "react";
import PlaybackControl from "./PlaybackControl";
import PlayingTrack from "./PlayingTrack";
import VolumnControl from "./VolumnControl";
import { spotify } from "../../App";
import { actions, useStore } from "../Store";
import { setDevicesId } from "../Store/actions";
const PlayBack = () => {
    const [{ token, devicesId }, dispatch] = useStore();

    spotify.getMyDevices((err, succ) => {
        if (err) dispatch(actions.setDevicesId(null));
        if (succ && !devicesId) {
            dispatch(actions.setDevicesId(succ.devices?.[0]));
        }
    });
    /* spotify.getMyCurrentPlayingTrack((err, data) => {
        if (err) console.log(err);
        if (data) console.log(data);
    }); */
    useEffect(() => {
        console.log(devicesId);
    }, [token, devicesId, dispatch]);
    return (
        <footer className="absolute flex flex-1 items-center bg-[#181818] border-[#282828] border-t bottom-0 h-[90px] left-0 w-full z-10">
            <div className="flex flex-1 flex-row h-auto bg-[#181818] px-4">
                <PlayingTrack />
                <PlaybackControl />
                <VolumnControl />
            </div>
        </footer>
    );
};

export default PlayBack;
