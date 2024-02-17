import React from "react"
import ajith from "./images/ajith.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,} from '@fortawesome/free-solid-svg-icons'

export const Home=()=>{
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
      };
  return(
  <>
  
  <section id="home">
       <div className="home">
       <div className="text"> <div className="typewriter">Hi I'm<br></br> Ajithkumar <br></br>Full Stack Web Developer</div></div>
        
        <div class="social-icons-container">
    <ul class="social-icons">
      <li>
        <div class="social-icon-name">Linkedin</div>
        <a class="linkedin" href="https://www.linkedin.com/in/ajithkumar-anbarasu-ak23011997/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
      </li>
      <li>
        <div class="social-icon-name">Email</div>
        <a class="email" href="http://www.gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a>
      </li>
      <li>
        <div class="social-icon-name">Whatsapp</div>
        <a class="whatspp" href="http://www.whatspp.com" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
        <li>
        <div class="social-icon-name">Github</div>
        <a class="github" href="http://www.github.com" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
      </li>
      
    </ul>
  </div>
  <button> <a href="test1.txt" download>Download Resume</a></button>
        <div className="picture"><img src={ajith} alt="path not found"></img></div>
        </div>
    
        </section>
        </>
    )
 }
 export default Home;