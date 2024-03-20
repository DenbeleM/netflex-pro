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
      <Row
        url={requests.netflex_orignals}
        title="TOP RATED"
        islargerow="islargerow"
      />

      <Row url={requests.popular} title="MOST POPULAR " i />
      <Row url={requests.movie} title=" BEST MOVIES EVER " />
      <Row url={requests.top} title="Action Movies" />

      <Footer />
    </div>
  );
};

export default Home;
