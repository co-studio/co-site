import React, { Component } from 'react'
import { Link } from 'react-router'

import logoWhite from '../../assets/co-logo-white.svg'
import iconHamburger from '../../assets/icons/icon-hamburger.svg'
import iconClose from '../../assets/icons/icon-close.svg'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.getItemClassnames = this.getItemClassnames.bind(this)
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

  getItemClassnames(href, className) {
    let classNames = className
    if (this.props.location.pathname === href) {
      classNames += ` ${className}-active`
    }

    return classNames
  }

  renderNavItem({ href, label }) {
    const classNames = this.getItemClassnames(href, 'nav-item')

    if (label === 'Blog') {
      return (
        <a href={href}
           target="_blank"
           className={classNames}
           key={label}>
          {label}
        </a>
      )
    }

    return (
      <Link to={href}
            className={classNames}
            key={label}>
        {label}
      </Link>
    )
  }

  renderMobileNavItem({ href, label }) {
    const classNames = this.getItemClassnames(href, 'nav-mobile-item')

    if (label === 'Blog') {
      return (
        <a href={href}
           target="_blank"
           className={classNames}
           key={label}>
          {label}
        </a>
      )
    }

    return (
      <Link to={href}
            className={classNames}
            key={label}>
        {label}
      </Link>
    )
  }

  render() {
    const navItems = [
      { label: 'Home', href: '/' },
      { label: 'Process', href: '/process' },
      { label: 'Blog', href: 'https://blog.costudio.io' },
      { label: 'About', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ]

    return (
      <nav id="navbar" className="navbar">
        <Link to="/">
          <img src={logoWhite} className="logo" alt="Co Studio" />
        </Link>

        {navItems.reverse().map(this.renderNavItem)}

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
          </div>
        </nav>
      </nav>
    )
  }
}

export default Navbar
