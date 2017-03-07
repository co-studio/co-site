import React, { Component } from 'react'

import Button from '../Button/Button';

class Hero extends Component {
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
          <Button href="mailto:costudio.io@gmail.com?subject=Bots for my Business"
                  color="purple">
            {btnText}
          </Button>
        </div>
      </section>
    )
  }
}

export default Hero
