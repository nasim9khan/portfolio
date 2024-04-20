import React from 'react';
import Navbar from '../componenets/Navbar';
import Footer from "../componenets/Footer";
import HeroImg2 from '../componenets/HeroImg2';
import AboutContent from '../componenets/AboutContent';

const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="ABOUT." text="Im a friendly Front-End-Developer."/>
        <AboutContent/>
        <Footer/>
    </div>
  )
}

export default About
