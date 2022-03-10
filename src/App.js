import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { logout } from "./actions/login"
import { clearMessage } from "./actions/message"

import BikesList from "./components/bikes-list.component";
import Login from "./components/login.component";
import { history } from './helpers/history';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: undefined
    }

    history.listen((location) => {
      this.props.dispatch(clearMessage()); // clear message when changing location
    });
  }
  
  logOut() {
    this.props.dispatch(logout());

    this.setState({
      currentUser: undefined
    });
  }

  componentDidMount() {
    var user = this.props.user;
    if(user) {
      this.setState({
        currentUser: user
      });
    }
  }

  render() {
    var { currentUser } = this.state;
    return (
      <Router history={history}>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/bikesList"} className="nav-link">
                    Explore bikes
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
        </nav>

        <div className="container mt-5">
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/bikesList" component={BikesList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.login;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);

