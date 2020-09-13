import React from "react";
import { Link } from "react-router-dom";

import Logo from '../images/glitch-logo.png'
import GoogleAuth from './GoogleAuth'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <img src={Logo}  className="ui mini" alt="glitch logo" />
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
