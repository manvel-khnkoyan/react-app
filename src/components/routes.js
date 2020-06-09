import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./profile";
import Home from "./home";
import NotFound from "./404";

const mapStateToProps = store => ({
  loggedIn: !!store.accessToken
});

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {this.props.loggedIn && <div>
              <Route exact path="/profile" component={Profile} />
          </div>}
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(Routes);
