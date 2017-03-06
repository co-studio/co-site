import React, { Component } from 'react'

import Button from '../Button/Button';

class Hero extends Component {
  render() {
    return (
      <section className="headline-container">
        <h1 className="headline">
          Bring bots to your business
        </h1>

        <p className="sub-headline">
          Bring your idea to life or streamline operations with an MVP. <br />
        All it takes is <b>1 month and $10,000</b>.
        </p>

        <div className="btn-group">
          <Button href="mailto:costudio.io@gmail.com"
                  color="purple">
            Get in touch
          </Button>
        </div>
      </section>
    )
  }
}

export default Hero
