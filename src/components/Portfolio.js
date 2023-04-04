import React from 'react';
import Project from './Project';
function Portfolio() {
  return (
   <div>
    <div id="github" className="projects"></div>
        <h2>My GitHub Repos &#9981;</h2>
        <a href={"https://karguello90.github.io/prework-study-guide/"}><img src="./Prework.png"></img></a>
        <a href={"https://karguello90.github.io/Horiseon-SEO---Digital-advancement/"}><img src="./Horiseeon.png"></img></a>
        <a href={"https://karguello90.github.io/5day-weather-dashboard/"}><img src="./weather dashboard.png"></img></a>
    <Project/>
   </div>
  );
}

export default Portfolio;