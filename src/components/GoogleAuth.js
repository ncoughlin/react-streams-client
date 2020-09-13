import React, { Component } from "react";
import { Link } from "react-router-dom";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id: process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID,
        scope: "email",
      });
    });
  }

  render() {
    return (
      <Link to="/" className="item">
        Google Auth
      </Link>
    );
  }
}

export default GoogleAuth;
