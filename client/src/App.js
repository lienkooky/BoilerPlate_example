import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './Components/Views/LandingPage/LandingPage';
import LoginPage from './Components/Views/LoginPage/LoginPage';
import RegisterPage from './Components/Views/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;
