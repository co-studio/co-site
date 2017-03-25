import React, { PropTypes, Component } from 'react'

class SubHeader extends Component {
  render () {
    const { children, className } = this.props
    return (
      <h2 className={`SubHeader ${className}`}>
        {children}
      </h2>
    )
  }
}

export default SubHeader
