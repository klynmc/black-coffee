import React/* , { useEffect } */ from 'react';

function Nav(props) {

  const {
    /*categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory, */
    setContactSelected,
  } = props;

    return (
      <ul>
        <li>
          <a href="#about" onClick={() => setContactSelected(true)}>About Me</a>
        </li>

        <li>
          <a href="#portfolio" onClick={() => setContactSelected(true)}>Portfolio</a>
        </li>

        <li>
          <a href="#contact" onClick={() => setContactSelected(true)}>Contact Me</a>
        </li>

        <li>
          <a href="#resume" onClick={() => setContactSelected(true)}>My Resume</a>
        </li>
      </ul>
    );
  }
  
export default Nav;