import React, { PropTypes, Component } from 'react'

class SubHeadline extends Component {
  render () {
    const { children } = this.props
    return (
      <p className="SubHeadline">
        {children}
      </p>
    )
  }
}

export default SubHeadline
