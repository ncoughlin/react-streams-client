import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/glitch-logo.png'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <img src={Logo}  className="ui mini" />
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
    </div>
  );
};

export default Header;
