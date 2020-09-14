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
          // create auth variable
          this.auth = window.gapi.auth2.getAuthInstance();
          // update state so that component will re-render
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // listen for changes to authentication status
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // updates auth state to current auth status
  // triggered when authentication status changes
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  // helper function
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }

  render() {
    return (
      <Link to="/" className="item">
        <div>{this.renderAuthButton()}</div>
      </Link>
    );
  }
}

export default GoogleAuth;
