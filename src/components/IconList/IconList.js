import React, { Component } from 'react'

class IconList extends Component {
  constructor(props) {
    super(props)
    this.renderIcon = this.renderIcon.bind(this)
  }

  renderIcon(icon, index) {
    return (
      <img className="icon-list-item"
           src={icon}
           alt={icon}
           key={index} />
    )
  }

  render() {
    const { icons, background } = this.props
    return (
      <div className="icon-list-container" style={{ background: background }}>
        <span className="list-shortener">
          <div className="icon-list">
            {icons.length > 0 && icons.map(this.renderIcon)}
          </div>
        </span>
      </div>
    )
  }
}

export default IconList
