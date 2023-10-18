import React from "react";
import DrawerAppBar from "../components/AppBar/AppBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import HowItWorks from "../components/HowItWorks/HowItWorks";

const Home = () => {
  return (
    <React.Fragment>
      <DrawerAppBar />
      <Hero />
      <About />
      {/* <HowItWorks/> */}
    </React.Fragment>
  );
};

export default Home;
