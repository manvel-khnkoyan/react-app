import React from "react";
import { connect } from "react-redux";
import storage from "../storage";
import Manager from "../library/manager";
import Routes from "./routes";

class Index extends React.Component {
  componentDidMount() {
    const accessToken = storage.getItem("accessToken");
    if (accessToken) {
      Manager.dispatchEvent("LogIn", { accessToken });
    }
  }

  render() {
    return <Routes />;
  }
}

export default connect(store =>
  Object.assign({
    accessToken: store.authState.accessToken
  })
)(Index);
