import React from "react";
import Footer from "../Components/FOOTER/Footer";
import Banner from "../Components/Banner/Banner";
import Row from "../Components/Row/Row";
import requests from "../urals/request";
import Heade from "../Components/Header/Heade";

const Home = () => {
  return (
    <div className="app">
      <Heade />
      <Banner />
      <Row url={requests.netflex_orignals} />

      <Row url={requests.popular} />
      <Row url={requests.movie} />
      <Row url={requests.top} />

      <Footer />
    </div>
  );
};

export default Home;
