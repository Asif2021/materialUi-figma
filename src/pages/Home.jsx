import React from "react";
import DrawerAppBar from "../components/AppBar/AppBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Tranding from "../components/Tranding/Tranding";
import Questions from "../components/Questions/Questions";
import GetApp from "../components/GetApp/GetApp";
import Footer from "../components/Footer/Footer";


const Home = () => {
  return (
    <div>
      <DrawerAppBar />
      <Hero />
      <About />
      <Tranding/>
      <HowItWorks/>
      <GetApp/>
      <Questions/>
      <Footer/>
    </div>
  );
};

export default Home;