import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <About></About>
      <Resume></Resume>
      <Footer></Footer>
    </div>
  );
}

export default App;
