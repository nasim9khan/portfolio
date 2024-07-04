import "./FooterStyles.css"
import React from 'react'
import{ FaHome, FaMailBulk, FaPhone,  FaLinkedin, FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location ">
            <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <div>
              <p>G68,BatlaHouse</p>
              <p>Delhi,India</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            +919521421841</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            nasimakhtarkhan9@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4> About Me</h4>
          <p>Passionate web developer specializing in creating dynamic and responsive websites using React. Dedicated to delivering seamless user experiences and innovative solutions.</p>
          <div className="social">
            <a href="http://www.linkedin.com/in/nasim9" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
            </a>
            <a href="https://github.com/nasim9khan" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/>
            </a>
            
            
            </div>       
        </div>
      </div>
    </div>
  )
}

export default Footer
