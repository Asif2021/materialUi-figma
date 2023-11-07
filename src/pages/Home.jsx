import React, {createContext, useState} from "react";
import DrawerAppBar from "../components/AppBar/AppBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Tranding from "../components/Tranding/Tranding";
import Questions from "../components/Questions/Questions";
import GetApp from "../components/GetApp/GetApp";
import Footer from "../components/Footer/Footer";
import Context from '../components/Tranding/Context'



const Home = () => {
const [value, setValue] = useState();
const [loading, setLoading] = useState(false);

  return (
    <div>
      <Context.Provider value={{value, setValue, loading, setLoading}}>
      <DrawerAppBar />
      <Hero />
      <About />
      <HowItWorks/>
      <Tranding/>
      <GetApp/>
      <Questions/>
      <Footer/>
      </Context.Provider>
    </div>
  );
};

export default Home;