import React, { Component } from 'react'
import { Link } from 'react-router'

import logoWhite from '../../assets/co-logo-white.svg'
import iconHamburger from '../../assets/icons/icon-hamburger.svg'
import iconClose from '../../assets/icons/icon-close.svg'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.renderNavItem = this.renderNavItem.bind(this)
    this.renderMobileNavItem = this.renderMobileNavItem.bind(this)

    this.state = {
      menuOpen: false
    }
  }

  toggleMobileMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  renderNavItem({ href, label }) {
    return (
      <Link to={href}
            className="nav-item"
            key={label}>
        {label}
      </Link>
    )
  }

  renderMobileNavItem({ href, label }) {
    return (
      <Link to={href}
            className="nav-mobile-item"
            key={label}>
        {label}
      </Link>
    )
  }

  render() {
    const navItems = [
      { label: 'Our Offer', href: '/' },
      { label: 'Process', href: '/process' },
      { label: 'Bots', href: '/bots' },
      { label: 'About', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ]

    return (
      <nav id="navbar" className="navbar">
        <Link to="/">
          <img src={logoWhite} className="logo" alt="Co Studio" />
        </Link>

        {navItems.reverse().map(this.renderNavItem)}
        {/* <a href="mailto:costudio.io@gmail.com"
           className="nav-item">
          Contact Us
        </a> */}


        {/* <Link to="/about"
              className="nav-item">
          About
        </Link>

        <Link to="/process"
              className="nav-item">
          Process
        </Link>

        <Link to="/"
              className="nav-item">
          Our Offer
        </Link> */}

        <i className="nav-menu" onClick={this.toggleMobileMenu}>
          <img className="nav-menu-icon"
               src={iconHamburger}
               alt="menu" />
         </i>

        <nav className={`nav-mobile nav-mobile-open-${this.state.menuOpen}`}>
          <i className="nav-menu" onClick={this.toggleMobileMenu}>
            <img className="nav-menu-icon"
                 src={iconClose}
                 alt="Close" />
           </i>

          <div className="nav-mobile-items" onClick={this.toggleMobileMenu}>
            {navItems.reverse().map(this.renderMobileNavItem)}
            {/* <Link to="/"
                  className="nav-mobile-item">
              Our Offer
            </Link>

            <Link to="/process"
                  className="nav-mobile-item">
              Process
            </Link>

            <Link to="/about"
                  className="nav-mobile-item">
              About
            </Link>

            <a href="mailto:costudio.io@gmail.com"
              className="nav-mobile-item">
              Contact Us
            </a> */}
          </div>
        </nav>
      </nav>
    )
  }
}

export default Navbar
