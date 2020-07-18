import React from "react";
import pickUpVolunteer from "./pickUpVolunteer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function AppHeader() {
  return (
    <Router>
      <nav className="d-flex flex-row-reverse p-3">
        <Link to="/" className="nav-link">
          Log Out
        </Link>
        <Link to="/pickUp-Volunteer" className="nav-link">
          Pick Up Volunteer
        </Link>
        <Link to="/" className="nav-link ">
          <i className="fas fa-user mr-2"></i>Welcome Kate
        </Link>
      </nav>
      <Switch>
        <Route path="/pickUp-Volunteer" component={pickUpVolunteer} />
      </Switch>
    </Router>
  );
}

export default AppHeader;
