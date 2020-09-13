import React, { Component } from "react";
import { Link } from "react-router-dom";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // update state so that component will re-render
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  // helper function
  retrieveUserStatus() {
    if (this.state.isSignedIn === null) {
      return "UNKNOWN";
    } else if (this.state.isSignedIn) {
      return "SIGNED IN";
    } else {
      return "NOT SIGNED IN";
    }
  }

  render() {
    return (
      <Link to="/" className="item">
        <div>Status: {this.retrieveUserStatus()}</div>
      </Link>
    );
  }
}

export default GoogleAuth;
