import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useEffect } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Footer from './components/Footer';
import DashBoard from './pages/DashBoard';
import Profile from './pages/Profile';
import ReadingPage from './pages/DashBoard/ReadingPage';
import Reading from './pages/DashBoard/Reading';

function App() {
  useEffect(() => {
    return () => {
      console.log('HERE');
      localStorage.removeItem('logged-in');
    };
  });
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          {/* <Route path="/dashboard/reading/:id" children={<ReadingPage />} /> */}

          <Route path='/dashboard'>
            <DashBoard />
            <Footer />
          </Route>

          <Route path='/sign-up'>
            <SignUp />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/user-profile'>
            <Profile />
            <Footer />
          </Route>

          <Route path='/'>
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
