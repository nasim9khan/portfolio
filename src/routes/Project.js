
import React from 'react';

import Navbar from '../componenets/Navbar';
import Footer from "../componenets/Footer";
import HeroImg2 from '../componenets/HeroImg2';
import Work from '../componenets/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading= "PROJECTS." text="Some of my projects"/>
      <Work/>
      {/* <PricingCard/> */}
      <Footer/>
    </div>
  )
}

export default Project
