import React, { Component } from 'react'
import { Link } from 'react-router'

class Button extends Component {
  render() {
    const { href, color, children } = this.props

    return (
      <Link to={href} className={`btn btn-${color}`}>
        {children}
      </Link>
    )
  }
}

export default Button
