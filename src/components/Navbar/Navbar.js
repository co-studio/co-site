import React, { Component } from 'react';

import logoWhite from '../../assets/co-logo-white.svg';

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar" className="navbar">
        <a href="/">
          <img src={logoWhite} className="logo" alt="Co" />
        </a>

        <a href="mailto:costudio.io@gmail.com" className="nav-item">
          Contact Us
        </a>

        <a href="/about" className="nav-item">
          About
        </a>

        <a href="/#1. Exploration" className="nav-item">
          Our Work
        </a>
      </nav>
    )
  }
}

export default Navbar
