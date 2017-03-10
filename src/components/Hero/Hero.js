import React, { Component } from 'react'

import Button from '../Button/Button';

class Hero extends Component {
  constructor(props) {
    super(props)
    this.renderButton = this.renderButton.bind(this)
  }

  renderButton(btnText) {
    return (
      <Button href="/contact#form"
              color="purple">
        {btnText}
      </Button>
    )
  }

  render() {
    const { headline, children, btnText, background } = this.props

    return (
      <section className={`headline-container headline-container-${background}`}>
        <h1 className="headline">
          {headline}
        </h1>

        <p className="sub-headline">
          {children}
        </p>

        <div className="btn-group">
          {btnText && this.renderButton(btnText)}
        </div>
      </section>
    )
  }
}

export default Hero
