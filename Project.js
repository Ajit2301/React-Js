// export const Project=()=>{
//     return(
//         <div>Project</div>
//     )
// }
// src/components/Projects.js
// src/components/Projects.js
import React from 'react';

const Project = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <section id="projects">
     <div className="heading1"> <h1>Projects</h1></div>
    
      <div className="project1">
        <h2>1.Weather Map Forecast  Website using React-Js</h2>
        <p>The Weather Forecast App is a web application built using React.js that provides real-time weather information for a given location. The application fetches weather data from a third-party weather API and displays it in an intuitive and user-friendly interface.Users can search for weather information based on a specific location.
The application uses a geocoding API to convert location input into coordinates for accurate weather data retrieval.</p>
      </div>
      <div className="project2">
        <h2>2.Basic Framework using Html and Css</h2>
        <p>The Basic HTML Framework project is a simple and lightweight starting point for web development, providing a foundational structure for building static web pages. The framework focuses on clean HTML markup, ensuring ease of use and customization for developers who prefer a minimalistic approach.</p>
      </div>
      <div className="project3">
        <h2>3.Design a Basic  College Engineering Website</h2>
        <p>The AK College of Engineering Website project is a simple and static website built using basic HTML and CSS. The website serves as an informational platform for the engineering college, providing details about courses, faculty, admission procedures, and other relevant information. The inclusion of dropdown menus enhances navigation and user experience.</p>
      </div>
      
    </section>
  );
};

export default Project;

