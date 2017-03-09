import React, { Component } from 'react';

import logoWhite from '../../assets/co-logo-white.svg';
import iconHamburger from '../../assets/icons/icon-hamburger.svg';
import iconClose from '../../assets/icons/icon-close.svg';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)

    this.state = {
      menuOpen: false
    }
  }

  toggleMobileMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    return (
      <nav id="navbar" className="navbar">
        <a href="/">
          <img src={logoWhite} className="logo" alt="Co" />
        </a>

        <a href="mailto:costudio.io@gmail.com"
           className="nav-item">
          Contact Us
        </a>

        <a href="/about"
           className="nav-item">
          About
        </a>

        <a href="/"
           className="nav-item">
          Our Work
        </a>

        <i className="nav-menu" onClick={this.toggleMobileMenu}>
          <img className="nav-menu-icon"
               src={iconHamburger} />
         </i>

        <nav className={`nav-mobile nav-mobile-open-${this.state.menuOpen}`}>
          <i className="nav-menu" onClick={this.toggleMobileMenu}>
            <img className="nav-menu-icon"
                 src={iconClose} />
           </i>

          <div className="nav-mobile-items" onClick={this.toggleMobileMenu}>
            <a href="/"
              className="nav-mobile-item">
              Our Work
            </a>

            <a href="/about"
              className="nav-mobile-item">
              About
            </a>

            <a href="mailto:costudio.io@gmail.com"
              className="nav-mobile-item">
              Contact Us
            </a>
          </div>
        </nav>
      </nav>
    )
  }
}

export default Navbar
