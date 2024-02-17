

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHtml5,faJs,faCss3Alt, faBootstrap,faReact} from '@fortawesome/free-brands-svg-icons'
const Skill= () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    
    }
    return(
    <>
    <section id="skill" >
        <div className="skill-bar">
            <table>
<tr ><th colSpan={2} className='technical-heading'>Technical Skills</th></tr>
<tr><td><FontAwesomeIcon className="icon"icon={faHtml5} /></td><td>Html<br></br><input className="skill-bar-fill" type="range" value="95"></input>95%</td></tr>
<tr><td><FontAwesomeIcon className="icon" icon={faCss3Alt} /></td><td>Css<br></br><input className="skill-bar-fill" type="range" value="95"></input>95%</td></tr>
<tr><td><FontAwesomeIcon  className="icon"icon={faJs} /></td><td>Javascript<br></br><input className="skill-bar-fill" type="range" value="80"></input>80%</td></tr>
<tr><td><FontAwesomeIcon  className="icon"icon={faBootstrap} /></td><td>Bootstrap<br></br><input className="skill-bar-fill"type="range" value="80"></input>80%</td></tr>
<tr><td><FontAwesomeIcon  className="icon"icon={faReact} /></td><td>React-Js<br></br><input className="skill-bar-fill" type="range" value="80"></input>80%</td></tr>
</table>
<div className="prof-skills">
    <h2>Professional-Skills</h2>
    <ul>
      <li>Web Development</li>
      <li>Backend Development</li>
      <li>Database Management</li>
      <li>Good Communication Skills</li>
      <li>Problem Solving Skills</li>
      </ul>
      <div className="progress-circle"></div>
  </div>
</div>

{/* <div className="button"><button onClick={() => scrollToSection('project')}>projects</button></div> */}

        </section>
        </>
        
    )
}
export default Skill;
