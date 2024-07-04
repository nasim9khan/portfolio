import React from "react";
import"./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import AnimatedBackground from "./componenets/AnimatedBg"
import CustomCursor from "./componenets/CursorAnimation"

import { Route, Routes } from "react-router-dom";




function App() {
  return (
   <>
   <AnimatedBackground/>
   <CustomCursor/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/project" element={<Project />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
   </Routes>
   </>
  );
}

export default App;
