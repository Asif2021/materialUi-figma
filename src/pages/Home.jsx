import React from 'react'
import DrawerAppBar from '../components/AppBar/AppBar'
import Hero from '../components/Hero/Hero'
import Frame5 from '../components/Frame5/Frame5'
import Frame1000 from '../components/Frame1000/Frame1000'
import About from '../components/About/About'
import HowItWorks from '../components/HowItWorks/HowItWorks'

const Home = () => {
  return (
    <React.Fragment>
      <DrawerAppBar/>
      <Hero/>
      <Frame5/>
      <Frame1000/>
      <About/>
      {/* <HowItWorks/> */}
    </React.Fragment>
  )
}

export default Home