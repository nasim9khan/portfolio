import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"
import React from 'react'



const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};


const Work = () => {
  const maxLength = 80;
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
      <div className="project-container">
       { WorkCardData.map((val, ind) =>{
        return(
          <WorkCard
          key ={ind}
          imgsrc ={val.imgsrc}
          title ={val.title}
          text ={truncateText(val.text, maxLength)}
          view={val.view}
          source={val.source}
          
          />
        )
       })}
      </div>
    </div>
  )
}

export default Work
