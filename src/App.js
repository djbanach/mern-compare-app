import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CarList from './Components/CarList';
import CarCreate from './Components/CarCreate';
/*import Compare from './Components/Compare';*/

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Car Compare App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Car Catelog</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Car</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={CarList} />
          <Route path="/create" component={CarCreate} />
        </div>
      </Router>
    );
  }
}

export default App;
