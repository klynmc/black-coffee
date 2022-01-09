import React/* , { useState } */ from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Project from '../src/components/Project';
import Footer from '../src/components/Footer';
import Contact from '../src/components/Contact';
import Portfolio from '../src/components/Portfolio';

function App() {

  return (
    <div>
        <Nav
          /* categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected} */
        ></Nav>
      <main>
        <About></About>
        <Project></Project>
        <Contact></Contact>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
