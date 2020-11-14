import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Footer from './components/Footer';
import DashBoard from './pages/DashBoard'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/dashboard'>
            <DashBoard />
          </Route>

          <Route path='/sign-up'>
            <SignUp />
          </Route>

          <Route path='/login'>
            <Login />
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
