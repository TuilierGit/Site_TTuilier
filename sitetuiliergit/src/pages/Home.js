import React from "react";
import Navigation from "../components/Navigation";
import Presentation from "../components/Presentation";
import Resume from "../components/Resume";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="content">
        <Presentation />
        <Skills />
        <Resume />
      </div>
    </div>
  );
};

export default Home;
