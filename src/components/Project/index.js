import React from 'react';
//import {capitalizeFirstLetter} from '../../utils/helpers'

function Project (/* props */) {
    /* const { currentCategory } = props; */
    return (
      <div className="projects">
        <h2 id="projects">Projects</h2>
        <div>
          <img src={project1} alt="src/assets/stack-full-of-clients.png"></img>
        </div>
      </div>
    );
    /* (
      <div>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.description}</p>
      </div>
    ); */
}

export default Project;