import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './index.css';

const Navbar = (props) => {
  const {
    history: {
      location: { pathname }
    }
  } = props;

  let isSignUp = pathname === '/sign-up';

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
            {isSignUp ? (
              <Link to='/log-in'>
                <li>log in</li>
              </Link>
            ) : (
              <Link to='/sign-up'>
                <li>sign up</li>
              </Link>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default withRouter(Navbar);
