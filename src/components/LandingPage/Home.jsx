import React from "react";
import { Container, Box } from "@mui/material";
import Header from "../LandingPage/Header.jsx";
import Banner from "./Banner.jsx";
import Services from "./Services.jsx";
import BestDeals from "./BestDeals.jsx";
import Footer from "../Footer/Footer.jsx";
import WorkWith from "./WorkWith.jsx";
import CenterMode from "./DealsSlider.jsx";

const Home = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <Banner />
        <Services />
        <BestDeals />
        {/* <Banner /> */}
        <CenterMode/>
      </Container>
      <WorkWith/>
      <Footer />
    </>
  );
};

export default Home;
