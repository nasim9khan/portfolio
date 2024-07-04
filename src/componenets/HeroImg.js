import "./HeroImgStyle.css";
import React, { useState, useEffect } from "react";
import IntroImg from "../assets/introimg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroImg = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9], // Custom easing function
      },
    },
  };

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.19, // Increased delay between letters
      },
    },
  };

  return (
    <div className="hero" style={{ position: "relative" }}>
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="introimg" />
      </div>
      <div className="content">
        <p>
          <strong>
            HI &nbsp;I'M <span className="my-name">Nasim A. Khan</span>&nbsp; a{" "}
          </strong>
        </p>
        <motion.div
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
        >
          <h1>
            {"ReactDeveloper".split("").map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
