import React from 'react';
import "./TechStyle.css"


const Technologies = () => {
  return (
    <div className="technologies">
      <h1><span style={{color:"#dbcc47"}}>Technologies</span> I've worked with</h1>
      <div className='tech-list-container'>
        <div className="tech-child">
        <img width="78" height="78" src="https://img.icons8.com/ultraviolet/40/react--v1.png" alt="react--v1"/>
         <p>React</p>
        </div>
        <div className="tech-child">
        <img width="78" height="78" src="https://img.icons8.com/color/48/redux.png" alt="redux"/>
         <p>Redux</p>
        </div>
        <div className="tech-child">
        <img width="78" height="78" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
         <p>Javascript</p>
        </div>
        <div className="tech-child">
        <img width="78" height="78" src="https://img.icons8.com/color-glass/48/bootstrap.png" alt="bootstrap"/>
         <p>Bootstrap</p>
        </div>
        <div className="tech-child">
        <img width="78" height="78"  src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
         <p>HTML</p>
        </div>
        <div className="tech-child">
        <img width="78" height="78" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
         <p>CSS</p>
        </div>
        <div className="tech-child">
        <img width="78" height="78" src="https://img.icons8.com/color/48/git.png" alt="git"/>
         <p>GIT</p>
        </div>
        <div className="tech-child">
        <img width="78" height="78" src="https://img.icons8.com/nolan/64/github.png" alt="github"/>
         <p>GitHub</p>
        </div>
        <div className="tech-child">
        <img width="78" height="78" src="https://img.icons8.com/color/48/tailwind_css.png" alt="tailwind_css"/>
         <p>Tailwind</p>
        </div>
        <div className="tech-child last">
        <img width="78" height="78" src="https://img.icons8.com/color/48/figma--v1.png" alt="figma--v1"/>
         <p>Figma</p>
        </div>
        
        
      </div>
      
    </div>
  );
};

export default Technologies;
