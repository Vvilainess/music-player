import React, { useEffect } from "react";
import Container from "../../components/Body-components/Container";
import Content from "../../components/Body-components/Content";
import Header from "../../components/Header-components/Header";
import { useStore } from "../../components/Store";
import SongsRow from "./components/SongsRow";
const Home = () => {
    const [
        { toplist, trending, newRelease, top_artists, recentPlayed },
        dispatch,
    ] = useStore();
    useEffect(() => {
        console.log(top_artists);
    }, [toplist, trending, newRelease, top_artists, recentPlayed, dispatch]);
    return (
        <>
            <Container>
                <Header searchInput={true} />
                <Content>
                    {toplist && (
                        <SongsRow title="Top Playlists" data={toplist} />
                    )}
                    {trending && <SongsRow title="Trending" data={trending} />}
                    {newRelease && (
                        <SongsRow title="New Releases" data={newRelease} />
                    )}
                    {top_artists && (
                        <SongsRow title="Your Top Artists" data={top_artists} />
                    )}
                </Content>
            </Container>
        </>
    );
};

export default Home;
