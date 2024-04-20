import "./HeroImgStyle.css";

import React from 'react';

import IntroImg from "../assets/introimg.jpg";

import { Link } from "react-router-dom";



const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="introimg" />

        </div>
        <div className="content">
            <p> <strong>HI &nbsp;I'M Nasim A. Khan&nbsp; a </strong></p>
            <h1>ReactDeveloper</h1>
            <div >
               <Link to= "/project" className="btn">Projects</Link>
               <Link to= "/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
      
    </div>
  )
}

export default HeroImg
