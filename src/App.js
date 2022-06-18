import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/aboutme' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
