import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/dashboard'>
            <div>dashboard</div>
          </Route>

          <Route path='/sign-up'>
            <SignUp />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
