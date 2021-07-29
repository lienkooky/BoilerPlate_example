import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './Components/Views/LandingPage/LandingPage';
import LoginPage from './Components/Views/LoginPage/LoginPage';
import RegisterPage from './Components/Views/RegisterPage/RegisterPage';
import Auth from './Hoc/Auth';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
      </Switch>
    </Router>
  );
}

export default App;
