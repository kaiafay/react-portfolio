import React, { useState } from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Contact from '../Contact';

function Nav() {
  const [nav, setNav] = useState('About Me');

  const handleClick = (e) => {
    setNav(e.target.innerText);
  }

  return (
    <div>
      <nav>
        <ul>
          <li onClick={handleClick}>About Me</li>
          <li onClick={handleClick}>Portfolio</li>
          <li onClick={handleClick}>Resume</li>
          <li onClick={handleClick}>Contact</li>
        </ul>
      </nav>
      {nav === 'About Me' && <About /> }
      {nav === 'Portfolio' && <Portfolio />} 
      {nav === 'Resume' && <Resume /> }
      {nav === 'Contact' && <Contact /> }
    </div>
  );
}

export default Nav;