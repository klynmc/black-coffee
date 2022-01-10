import React, { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Project from '../src/components/Project';
import Footer from '../src/components/Footer';
import Contact from '../src/components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'Photos of my computer projects',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
      {!contactSelected ? (
        <>
          <About></About>
          <Project></Project>
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
