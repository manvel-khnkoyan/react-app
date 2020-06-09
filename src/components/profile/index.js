import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  render() {
    return (
      <div>
        Profile <Link to={"/"}>Home</Link>
      </div>
    );
  }
}

export default Profile;
