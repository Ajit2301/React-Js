import React, { useEffect } from 'react';

const Typing = () => {
  const textToType = "Welcome to my portfolio! I'm Ajithkumar A, a passionate Frontend Developer with a keen interest in web development. With a background in undergoing Full Stack Web Development Course, I bring a unique blend of skills and expertise to the table.I am a Frontend Devleoper dedicated to work sincerly in Web Developing Field, has equipped me with valuable knowledge, allowing me to create interactive website using Html,Css,Javascript and React-Js Programming Knowledges.In my six month journey, I specialized in React-JS. I am committed to become a Good Web developer giving user friendly websites. My approach involves creating interactive websites and I am always eager to tackle challenges head-on.Collaboration is key, and I thrive in Team Environments or Collaborative Projects.I am committed to staying abreast of industry trends and continuously improving my skills in Web Development.";

  const typeText = () => {
    const chatContainer = document.getElementById('chat-container');
    let index = 0;

    const typeCharacter = () => {
      if (index <= textToType.length) {
        chatContainer.textContent += textToType.charAt(index);
        index += 1;
        setTimeout(typeCharacter, 70); // Adjust the delay as needed
      }
    };

    // Clear previous content and start typing
    chatContainer.textContent = '';
    typeCharacter();
  };

  // Start typing after the component mounts
  useEffect(() => {
    typeText();

    // Clean up function
    return () => {
      // Clear any remaining timeouts when the component unmounts
      clearTimeout();
    };
  }, []);

  return (
    <div id="chat-container">Welcome to my portfolio! I'm Ajithkumar A, a passionate Frontend Developer with a keen interest in web development. With a background in undergoing Full Stack Web Development Course, I bring a unique blend of skills and expertise to the table.I am a Frontend Devleoper dedicated to work sincerly in Web Developing Field, has equipped me with valuable knowledge, allowing me to create interactive website using Html,Css,Javascript and React-Js Programming Knowledges.In my six month journey, I specialized in React-JS. I am committed to become a Good Web developer giving user friendly websites. My approach involves creating interactive websites and I am always eager to tackle challenges head-on.Collaboration is key, and I thrive in Team Environments or Collaborative Projects.I am committed to staying abreast of industry trends and continuously improving my skills in Web Development.</div>
  );
};

export default Typing;
