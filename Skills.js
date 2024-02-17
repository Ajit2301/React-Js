// export const Project=()=>{
//     return(
//         <div>Project</div>
//     )
// }
// src/components/Projects.js
// src/components/Projects.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5} from '@fortawesome/free-solid-svg-icons'
const Skills = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <section id="skills">
      <h2>Projects</h2>
      <div className="skill1">
      <div className="skills"><FontAwesomeIcon icon={faHtml5} /></div>
        <h3>skill 1</h3>
        <p>Description of project 1.</p>
      </div>
      <div className="skill2">
        <h3>skill 2</h3>
        <p>Description of project 2.</p>
      </div>
    </section>
  );
};

export default Skills;

