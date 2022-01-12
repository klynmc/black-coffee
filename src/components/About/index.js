import React from 'react';
import avatar from '../assets/character.jpeg'

function About() {
  return (
    <main>
      <div className="about-me">
        <h2 id="about">About Me</h2>
        <img src={avatar} alt="avatar of me" className="avatar"></img>
        <p>
        My name is Leigha and I am currently a student at Vanderbilt University for a computer coding bootcamp.
        <br />
        I love animals, the outdoors, and coding of course! I usually spend my free time either listening to music, 
        <br />
        cleaning, or making crafts.
        <br />
        On this app which I have constructed with React, you will be able to view a handful of projects I've created, 
        <br /> 
        their live apps if you click on a project photo,
        as well as ways to contact me via the navigation bar 
        <br /> 
        and also the footer.
        </p>
      </div>
    </main>
  );
}

export default About;
