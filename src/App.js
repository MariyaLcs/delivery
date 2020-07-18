import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Manager from "./Components/ManagerHome/Home";
import Volunteer from "./Components/VolunteerHome/VolunteerHome";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/manager"}>
                  For Manager
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/volunteer"}>
                  For Volunteer
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="auth-inner mt-2">
          <h3 className="text-center mb-2">
            What is the essence of life? To serve others and to do good.
          </h3>
          <Switch>
            <Route exact path="/manager" component={Manager} />
            <Route exact path="/volunteer" component={Volunteer} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
