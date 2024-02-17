// 
// src/components/Header.js
// src/components/Header.js
import React from 'react'

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  }
  


    
  

  return (
    <header>
      <h1>MY PORTFOLIO</h1>
      <nav>
        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('skill')}>Skill</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
       </ul>
      </nav>
    </header>
          
  );
};

export default Header;
