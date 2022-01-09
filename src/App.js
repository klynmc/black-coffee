import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Project from '../src/components/Project';
import Footer from '../src/components/Footer';
import Contact from '../src/components/Contact';
import Portfolio from '../src/components/Portfolio';

function App() {

  const [categories] = useState([
    {
      name: 'projects',
      description: 'Photos of my computer projects',
    },
    { name: 'portfolio', description: 'My portfolio' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
      <main>
      {!contactSelected ? (
        <>
          <About currentCategory={currentCategory}></About>
          <Project></Project>
          <Portfolio></Portfolio>
        </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
