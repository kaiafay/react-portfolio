import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav> 
        <Link className='navlink' to='/aboutme'>About Me</Link>
        <Link className='navlink' to='/portfolio'>Portfolio</Link>
        <Link className='navlink' to='/resume'>Resume</Link>
        <Link className='navlink' to='/contact'>Contact</Link>
      </nav>
    </div>
  );
}

export default Nav;