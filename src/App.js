import React, { Component } from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignInForm from './pages/SignInForm';

import './App.css';

class App extends Component { 
  render() {
    return (
      <Router basename="/multicms-login/">
        <div className="App">
          <div className="MG_Inside"><p><img src={logo} alt="My logo" /></p> <p>Rayice CMS</p></div>
          <div className="MG_Form">

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Access Login</NavLink>
              </div>

              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
