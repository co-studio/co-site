import React, { Component } from 'react'

class ContentSection extends Component {
  constructor(props) {
    super(props)
    this.renderImage = this.renderImage.bind(this)
  }

  renderImage() {
    const { image, title } = this.props
    return (
      <div className="content-section-image-container">
        <img className="content-section-image"
             src={image}
             alt={title} />
      </div>
    )
  }

  render() {
    const {
      background, title, header,
      body, deliverable, image,
      textPosition
    } = this.props
    return (
      <section className={`content-section-container content-section-${background}`} id={title}>
        {textPosition === 'right' && this.renderImage()}

        <div className="content-section-text-container">
          <label className="content-section-label content-section-title">
            {title}
          </label>

          <h2 className="content-section-header">
            {header}
          </h2>

          <p className="content-section-body">
            {body}
          </p>

          <div className="content-section-deliverable-container">
            <label className="content-section-label">
              Deliverable
            </label>

            <label className={`content-section-label content-section-deliverable-${background}`}>
              {deliverable}
            </label>
          </div>
        </div>

        {textPosition === 'left' && this.renderImage()}
      </section>
    )
  }
}

export default ContentSection
