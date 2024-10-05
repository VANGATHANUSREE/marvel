import React from 'react';
import './Navbar.css';
import image from '../images/logo.png';

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img src={image} alt="Logo" className="logo" />
          </div>
          <nav className="navitems col-lg-6">
            <ul className="nav-list">
              <li><a href="">Home</a></li>
              <li><a href="">Courses</a></li>
              <li><a href="">Placements</a></li>
              <li><a href="">Internships</a></li>
              <li><a href="">Reviews</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </nav>
          <div className="col-lg-2">
            <a href="" className="link">Login</a>
            <a href="" className="link" style={{ marginLeft: 10 }}>Sign Up</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;