import React from 'react';
import './style.css'
//import {capitalizeFirstLetter} from '../../utils/helpers'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import project7 from '../assets/project7.png'
import project8 from '../assets/project8.png'

function Project () {
    return (
      <div className="project">
        <h2 id="portfolio">My Projects</h2>
        <div>
          <a href="https://lara-destein13.github.io/my-backyard-trails/">
            <img className="projects" src={project1} alt="my backyard trails web app"></img>
          </a>
          <br />
          <a href="https://damp-gorge-70879.herokuapp.com">
            <img className="projects" src={project2} alt="stack full of clients web app"></img>
          </a>
          <br />
          <a href="https://klynmc.github.io/strong-coffee/">
            <img className="projects" src={project3} alt="weather app"></img>
          </a>
          <br />
          <a href="https://klynmc.github.io/friendly-system/Develop/">
            <img className="projects" src={project4} alt="password generator app"></img>
          </a>
          <br />
          <a href="https://klynmc.github.io/turbo-goggles/">
            <img className="projects" src={project5} alt="coding quiz app"></img>
          </a>
          <br />
          <a href="https://klynmc.github.io/sturdy-disco/">
            <img className="projects" src={project6} alt="portfolio app"></img>
          </a>
          <br />
          <a href="https://gentle-anchorage-07730.herokuapp.com/">
            <img className="projects" src={project7} alt="diabetes app"></img>
          </a>
          <br />
          <a href="https://creaturecomforts.herokuapp.com/">
            <img className="projects" src={project8} alt="pet care app"></img>
          </a>
        </div>
      </div>
    );
}

export default Project;
