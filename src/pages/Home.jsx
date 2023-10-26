import React from "react";
import DrawerAppBar from "../components/AppBar/AppBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Tranding from "../components/Tranding/Tranding";

const Home = () => {
  return (
    <div>
      <DrawerAppBar />
      <Hero />
      <About />
      <HowItWorks/>
      <Tranding/>
    </div>
  );
};

export default Home;
