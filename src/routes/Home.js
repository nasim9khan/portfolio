import React from 'react';
import Navbar from '../componenets/Navbar';
import HeroImg from "../componenets/HeroImg";
import Work from "../componenets/Work";
import Footer from "../componenets/Footer";
// import Technologies from "../componenets/Tech";



const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work/>
      {/* <Technologies/> */}
      <Footer/>
    
    </div>
  )
};

export default Home;
