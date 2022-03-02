import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import BikesList from "./components/bikes-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/bikesList"} className="navbar-brand">
            Bikes Kart
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/bikesList"} className="nav-link">
                Tutorials
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/bikesList"]} component={BikesList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
