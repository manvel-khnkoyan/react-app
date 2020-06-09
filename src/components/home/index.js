import React from "react";
import Api from "../../server/backend";
import Manager from "../../library/manager";

class Home extends React.Component {
  handleLogin = () => {
    Api.authorize({})
      .then(data => {
        console.log("OK");
        Manager.dispatchEvent("login", data);
      })
      .catch(alert);
  };

  render() {
    return (
      <div>
        Hello Word
        <div>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    );
  }
}

export default Home;
