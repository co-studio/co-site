import React, { Component } from 'react'

// Press
import bg from '../../assets/images/press/press-boston-globe.svg'
import bi from '../../assets/images/press/press-business-insider.svg'
import gizmodo from '../../assets/images/press/press-gizmodo.svg'
import hp from '../../assets/images/press/press-huffington-post.svg'
import lifehacker from '../../assets/images/press/press-lifehacker.svg'
import mashable from '../../assets/images/press/press-mashable.svg'
import politico from '../../assets/images/press/press-politico.svg'
import guardian from '../../assets/images/press/press-the-guardian.svg'
import tnw from '../../assets/images/press/press-tnw.svg'
import vice from '../../assets/images/press/press-vice.svg'
import adweek from '../../assets/images/press/press-adweek.svg'
import nowthis from '../../assets/images/press/press-nowthis.svg'

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
    let { icons, background } = this.props

    if (!icons) {
      icons = [ nowthis, adweek, bg, bi, gizmodo, hp, lifehacker, mashable, politico, guardian, tnw, vice ]
    }

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
