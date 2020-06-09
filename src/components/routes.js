import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./profile";
import Home from "./home";
import NotFound from "./404";

const mapStateToProps = store => ({
  loggedIn: !!store.authState.accessToken
});

class Routes extends React.Component {
  unauthorizedRoutes = () => [
    <Route key="home" exact path="/" component={Home} />,
    <Route key="404" component={NotFound} />
  ];

  authorizedRoutes = () => [
    <Route key="profile" exact path="/profile" component={Profile} />
  ];

  render() {
    return (
      <Router>
        <Switch>
          {this.props.loggedIn && this.authorizedRoutes().map(i => i)}
          {this.unauthorizedRoutes().map(i => i)}
        </Switch>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(Routes);
