import React, { useEffect } from "react";
import Container from "../../components/Body-components/Container";
import Content from "../../components/Body-components/Content";
import Header from "../../components/Header-components/Header";
import { useStore } from "../../components/Store";
import SongsRow from "./SongsRow";
const Home = () => {
    const [{ toplist, trending, newRelease }, dispatch] = useStore();
    useEffect(() => {}, [toplist, trending, newRelease, dispatch]);
    return (
        <>
            <Container>
                <Header />
                <Content>
                    <SongsRow title="Top Playlists" data={toplist} />;
                    <SongsRow title="Trending" data={trending} />
                    <SongsRow title="New Release" data={newRelease} />
                </Content>
            </Container>
        </>
    );
};

export default Home;
