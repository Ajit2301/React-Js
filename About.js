// import React from "react"
// export const About=()=>{
//     return(
//         <>
        
//         <div className="about"><span>About Me</span>
        // <p>Welcome to my portfolio! I'm <b>Ajithkumar A</b>, a passionate <b>Frontend Developer</b> with a keen interest in web development. With a background in undergoing <b>Full Stack Web Development Course</b>, I bring a unique blend of skills and expertise to the table.</p>

/* <p>I am a Frontend Devleoper dedicated to work sincerly in  Web Developing Field, has equipped me with valuable knowledge, allowing me to create  interactive website using Html,Css,Javascript and React-Js Programming Knowledges.</p> */

/* <p>In my six month journey, I specialized in React-JS. I am committed to become a Good Web developer   giving user friendly websites. My approach involves creating interactive websites and I am always eager to tackle challenges head-on.</p> */
/* <p>Collaboration is key, and I thrive in Team Environments or Collaborative Projects.I am committed to staying abreast of industry trends and continuously improving my skills in  Web Development. */
//         </p></div>
      //   <div className="education">
      //   <table><tr><th colSpan={2}><span>Education</span></th></tr><tr><td><h2>Full Stack Web Developement Course<br></br>
      //   Livewire-Karur</h2></td><td><h1>70%</h1></td></tr>
      //  <tr><td> <h2>M.Sc Physics <br></br>Bishop Heber College-Trichy</h2></td><td><h1>70%</h1></td></tr>
      //  <tr><td> <h2>B.Sc Physics<br></br>Government Arts and Science College<br></br>Karur</h2></td><td><h1>70%</h1></td></tr>
      //  <tr><td> <h2>HSSC <br></br>KSV Higher Secondary School<br></br> Karur</h2></td><td><h1>70%</h1></td></tr>
      //   </table>
        
      //   </div>
//         </>

//     )
// }
// src/components/AboutMe.js
import React from 'react';
import Typing from './Typing';


const About = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
        
    }
    
  return (
    <section id="about">
     <div className='about'>
      <p><h2>About Me</h2>Welcome to my portfolio! I'm Ajithkumar A, a passionate Frontend Developer with a keen interest in web development. With a background in undergoing Full Stack Web Development Course, I bring a unique blend of skills and expertise to the table.I am a Frontend Devleoper dedicated to work sincerly in Web Developing Field, has equipped me with valuable knowledge, allowing me to create interactive website using Html,Css,Javascript and React-Js Programming Knowledges.In my six month journey, I specialized in React-JS. I am committed to become a Good Web developer giving user friendly websites. My approach involves creating interactive websites and I am always eager to tackle challenges head-on.Collaboration is key, and I thrive in Team Environments or Collaborative Projects.I am committed to staying abreast of industry trends and continuously improving my skills in Web Development</p>
      </div>
      <div className="education">
        <table><tr><th colSpan={2}><h2 className="heading">Education</h2></th></tr><tr><td>Full Stack Web Developement Course<br></br>
        Livewire-Karur</td><td>70%</td></tr>
       <tr><td> M.Sc Physics <br></br>Bishop Heber College-Trichy</td><td>70%</td></tr>
       <tr><td> B.Sc Physics<br></br>Government Arts and Science College<br></br>Karur</td><td>70%</td></tr>
       <tr><td> HSSC <br></br>KSV Higher Secondary School<br></br> Karur</td><td>70%</td></tr>
        </table>
        {/* <div className="button"><button onClick={() => scrollToSection('skill')}>skills</button></div> */}
        </div>
    </section>
  );
}

export default About;

