import React from "react";
import { Link } from "react-router-dom";

import Logo from "../images/glitch-logo.png";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <img src={Logo} className="ui mini" alt="glitch logo" />
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          <button className="ui button">All Streams</button>
        </Link>
        <Link to="/streams/new" className="item">
          <button className="ui green basic button">New Stream</button>
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
