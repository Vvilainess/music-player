import React from "react";
import Container from "../../components/Body-components/Container";
import Content from "../../components/Body-components/Content";
import Header from "../../components/Header-components/Header";
import { useStore } from "../../components/Store";
import SongsRow from "./SongsRow";

const Home = () => {
    const [{ discovery_weekly }, dispatch] = useStore();
    console.log(discovery_weekly);
    return (
        <div>
            <Container>
                <Header />
                <Content></Content>
                {/* <SongsRow title="Discovery" data={discovery_weekly} /> */}
            </Container>
        </div>
    );
};

export default Home;
