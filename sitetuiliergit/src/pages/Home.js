import React from "react";
import CVbutton from "../components/CVbutton";
import Navigation from "../components/Navigation";
import Presentation from "../components/Presentation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Presentation />
      <CVbutton />
    </div>
  );
};

export default Home;
