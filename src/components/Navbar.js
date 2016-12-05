import React from 'react';
import { Link } from 'react-router';

const handinhand = require('../images/handinhand.png');
const logo = require('../images/logo.png');


export default function Navbar(props) {
  return (
    <div>
      <div className="container">
        <div className="row banner">
          <img src={handinhand} alt="logo" width="52" height="56" />
          <img src={logo} alt="logo" width="160" height="80" />
          <div className="sign">
            <Link to="/" className="login">log in</Link>
            <Link to="/" className="login">sign up</Link>
          </div>
        </div>
      </div>
      <div className="row nav">
        <div className="container navContainer">
          <ul>
            <li><Link to="/" className="navLink">Home</Link></li>
            <li><Link to="/" className="navLink">Orders</Link></li>
            <li><Link to="/" className="navLink">Account</Link></li>
          </ul>
          <form className="searchbar">
            <input type="text" className="searchInput" />
            <input type="text" className="searchInput" />
            <button className="btn">
              <i className="glyphicon glyphicon-search" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
