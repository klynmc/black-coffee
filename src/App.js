import React/* , { useState } */ from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Project from '../src/components/Project';
import Footer from '../src/components/Footer';
import Contact from '../src/components/Contact';
import Resume from '../src/components/Resume';

//import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  //const [currentCategory] = useState("About")

  return (

    <div>
      <Header>
      </Header>
        <main>
          <About></About>
          <Project></Project>
          <Contact></Contact>
          <Resume></Resume>
        </main>
      <Footer></Footer>
    </div>

    /*<div>
     <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Project />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
    </div> */

    
    /* <div>
      <Header />
    
      <Router>
        <div>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>

      <Route path="/about">
        <About />
      </Route>

      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
    </BrowserRouter>

    <Footer></Footer>
    </div> */

  );
}

export default App;
