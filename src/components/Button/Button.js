import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { href, color, children } = this.props

    return (
      <a href={href} className={`btn btn-${color}`}>
        {children}
      </a>
    )
  }
}

export default Button
