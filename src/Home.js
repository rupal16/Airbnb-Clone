import React from "react";
import Banner from "./Banner";
import Card from "./Card";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card />
      </div>
    </div>
  );
}

export default Home;
