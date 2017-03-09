import React, { Component } from 'react'

import Button from '../Button/Button'

class ContentSection extends Component {
  constructor(props) {
    super(props)
    this.renderImage = this.renderImage.bind(this)
    this.renderDeliverable = this.renderDeliverable.bind(this)
    this.renderDeliverable = this.renderDeliverable.bind(this)
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

  renderDeliverable() {
    const { background, deliverable } = this.props
    return (
      <div className="content-section-deliverable-container">
        <label className="content-section-label">
          Deliverable
        </label>

        <label className={`content-section-label content-section-deliverable-${background}`}>
          {deliverable}
        </label>
      </div>
    )
  }

  renderButton(btnText) {
    return (
      <Button href="mailto:costudio.io@gmail.com?subject=Bots for my Business"
              color="purple">
        {btnText}
      </Button>
    )
  }

  render() {
    const {
      background, title, header,
      children, textPosition, deliverable,
      button
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
            {children}
          </p>

          {deliverable && this.renderDeliverable()}

          {button && this.renderButton(button)}
        </div>

        {textPosition === 'left' && this.renderImage()}
      </section>
    )
  }
}

export default ContentSection
