import React/* , { useEffect } */ from 'react';

function Nav(/* props */) {

  /* const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props; */

    return (
      <ul>
        <li>
          <a href="#about" >About Me</a>
        </li>

        <li>
          <a href="#portfolio" >Portfolio</a>
        </li>

        <li>
          <a href="#contact" >Contact Me</a>
        </li>

        <li>
          <a href="#resume" >My Resume</a>
        </li>
      </ul>
    );
  }
  
export default Nav;