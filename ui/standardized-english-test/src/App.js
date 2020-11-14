import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useEffect } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Footer from './components/Footer';
import DashBoard from './pages/DashBoard'
import Profile from './pages/Profile';

function App() {
  useEffect(() => {
    return () => {
      localStorage.removeItem('logged-in');
    };
  });
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/sign-up'>
            <SignUp />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/user-profile'>
            <Profile />
          </Route>

          <Route path='/dashboard'>
            <DashBoard />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
