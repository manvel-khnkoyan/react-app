import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Api from "../../server/backend";
import Manager from "../../library/manager";

const mapStateToProps = store => ({
  loggedIn: !!store.authState.accessToken
});

class Home extends React.Component {
  handleLogin = () => {
    Api.authorize({})
      .then(({ data }) => {
        Manager.dispatchGlobalEvent("LogIn", data);
      })
      .catch(alert);
  };

  handleLogout = () => {
    Manager.dispatchGlobalEvent("LogOut");
  };

  render() {
    return (
      <div>
        Hello Word
        <div>
          {!this.props.loggedIn ? (
            <button onClick={this.handleLogin}>Log In</button>
          ) : (
            <div>
              <Link to={"/profile"}>Profile</Link>
              <button onClick={this.handleLogout}>Log Out</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
