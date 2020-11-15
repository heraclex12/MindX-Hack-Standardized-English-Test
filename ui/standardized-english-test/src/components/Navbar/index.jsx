import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './index.css';

const Navbar = (props) => {
  const { history } = props;

  const valid = localStorage.getItem('logged-in');
  console.log(valid);
  return (
    <div className='navbar'>
      <header>
        <nav>
          <h1 onClick={() => history.push('/')}>HackEng</h1>

          <ul>
            <Link to='/'>
              <li>home</li>
            </Link>

            <Link to='/dashboard'>
              <li>dashboard</li>
            </Link>

            {valid && (
              <Link to='/user-profile'>
                <li>profile</li>
              </Link>
            )}

            <Link to='/sign-up'>
              <li>sign up</li>
            </Link>

            <Link to='/login'>
              <li>log in</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default withRouter(Navbar);
