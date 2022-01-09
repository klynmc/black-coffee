import React/* , { useState } */ from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import Nav from '../src/components/Nav';
import Project from '../src/components/Project';
import Footer from '../src/components/Footer';

function App() {

  return (
    <div>
      <Header>
        <Nav
          /* categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected} */
        ></Nav>
      </Header>
      <main>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
