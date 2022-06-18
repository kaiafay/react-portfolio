import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav>
        <Link to='/aboutme'>About Me</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </div>
  );
}

export default Nav;