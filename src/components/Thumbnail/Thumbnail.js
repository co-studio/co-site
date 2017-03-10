import React, { Component } from 'react'

class Thumbnail extends Component {
  render() {
    const { image, href, title, description } = this.props
    const disabled = (href) ? '' : 'thumbnail-disabled'
    return (
      <div className="thumbnail-container">
        <img className="thumbnail-image"
          src={image}
          alt={title} />

        <div className="thumbnail-caption">
          <a className={`thumbnail-link ${disabled}`}
            href={href}
            target="_blank">
            <h3 className="thumbnail-title">
              {title}
            </h3>
          </a>

          <p className="thumbnail-description">
            {description}
          </p>
        </div>
      </div>
    )
  }
}

export default Thumbnail
