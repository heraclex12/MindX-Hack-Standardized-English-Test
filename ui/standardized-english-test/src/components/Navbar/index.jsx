import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <header>
        <nav>
          <h1>AppName</h1>
          <ul>
            <Link to='/'>
              <li>home</li>
            </Link>
            <Link to='/dashboard'>
              <li>dash board</li>
            </Link>
            <Link to='/sign-up'>
              <li>sign up</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
