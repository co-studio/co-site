import React, { Component } from 'react'

class Header extends Component {
  render () {
    const { children, className } = this.props
    return (
      <h1 className={`Header ${className}`}>
        {children}
      </h1>
    )
  }
}

export default Header
