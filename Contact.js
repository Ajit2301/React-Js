// export const Contact=()=>{
//     return(
//         <div>Contact</div>
//     )
// }
// src/components/Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <>
    <section id="contact">
      <h2>Contact</h2>
      
       
        {/* <div className="social_icons"> Feel free to reach out to me at
          <ul><li><FontAwesomeIcon icon={faLinkedin} /></li>
     <li><FontAwesomeIcon icon={faEnvelope} /></li> 
      <li><FontAwesomeIcon icon={faGithub} /></li>
     <li><FontAwesomeIcon icon={faWhatsapp} /></li> </ul>
      
      </div> */}
      <div class="social-icons-container">Feel free to reach out to me at
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
        <a class="whatsapp" href="http://www.whatsapp.com" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
        <li>
        <div class="social-icon-name">Github</div>
        <a class="Github" href="http://www.github.com" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
      </li>
      
    </ul>
  </div>
      
      

      
      <form  >
    <label >Name:</label>
    <input type="text" id="name" name="name" required />

    <label >Email:</label>
    <input type="email" id="email" name="email" required />

    <label>Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea>

    <button type="submit">Send Message</button>
  </form>
  
    </section>
    </>
  );
};

export default Contact;
