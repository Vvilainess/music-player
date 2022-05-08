import React, { useEffect } from "react";
import Header from "../../components/Header-components/Header";
import { Link } from "react-router-dom";
import LoginBtn from "../../components/Feature-components/LoginBtn";
import { useStore } from "../../components/Store";
import ContentSpacing from "../../components/Utils/ContentSpacing";
import EmptyList from "./components/EmptyList";

const LikedSongs = () => {
    const [{ user }, dispatch] = useStore();
    useEffect(() => {}, [user, dispatch]);
    return (
        <>
            <div className="relative top-0 left-0 h-full w-full z-1">
                <Header />
                <ContentSpacing className="relative flex flex-row flex-1 justify-between h-[30vh] max-h-[500px] min-h-[350px]">
                    <div
                        className="absolute block left-0 top-0 w-full h-full"
                        style={{ backgroundColor: "rgb(80, 56, 160)" }}
                    ></div>
                    <div
                        className="absolute block left-0 top-0 w-full h-full"
                        style={{
                            background:
                                "linear-gradient(transparent 0,rgba(0,0,0,.5) 100%),transparent",
                        }}
                    ></div>
                    <div className="flex">
                        <div className="relative flex items-end justify-items-center">
                            <div className="relative mx-5 mb-7 w-48 h-48 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-52 lg:h-52 bg-[#282828] shadow-lg shadow-black">
                                <img
                                    src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
                                    alt="liked songs"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row flex-1 align-bottom items-end mb-7 z-0">
                        <div className="w-full">
                            <p className="text-white text-xs md:text-sm lg:text-base font-bold uppercase">
                                Playlist
                            </p>
                            <h1 className="text-white tracking-[-0.04em] xs:text-2xl sm:text-3xl leading-[30px] md:text-5xl md:leading-[48px] lg:text-8xl lg:leading-[96px] xl:text-8xl xl:leading-[96px] xxl:text-8xl xxl:leading-[96px] font-bold py-[0.08em]">
                                Liked Songs
                            </h1>
                            <div className="flex items-center flex-wrap mt-[8px]">
                                <div className="grid gap-[4px] grid-flow-col items-center text-[rgba(255,255,255,.7)] whitespace-nowrap">
                                    {user && (
                                        <span>
                                            <Link
                                                to="/"
                                                className="text-white text-sm font-bold hover:underline"
                                            >
                                                {
                                                    <LoginBtn
                                                        background="transparent"
                                                        arrowBtn={false}
                                                    />
                                                }
                                            </Link>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentSpacing>
                <div className="absolute h-full w-full -z-10 bg-[#5038a0] bg-gradient-to-b from-[rgba(0,0,0,.6)] to-[#121212]"></div>
                <div className="relative py-6 lg:px-8 xl:px-8 xxl:px-8 flex flex-col items-start"></div>
                <ContentSpacing>
                    <EmptyList />
                </ContentSpacing>
            </div>
        </>
    );
};

export default LikedSongs;
