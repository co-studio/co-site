import React, { PropTypes, Component } from 'react'

class SubHeadline extends Component {
  render () {
    const { children, className } = this.props
    return (
      <p className={`SubHeadline ${className}`}>
        {children}
      </p>
    )
  }
}

export default SubHeadline
