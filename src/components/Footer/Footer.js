import React, { Component } from 'react';

import Button from '../Button/Button'
import logoWhite from '../../assets/co-logo-white.svg';

class Footer extends Component {
  render() {
    return(
      <footer className="footer-container">
          <div className="footer-links">

            <div className="footer-left">
              <a href="#navbar">
                <img src={logoWhite} className="footer-logo" alt="Co" />
              </a>

              <a href="mailto:logan@costudio.io" className="footer-email">
                logan@costudio.io
              </a>

              <span className="footer-copyright">
                &copy; Co Studio Inc. <span className="footer-location">Brooklyn, NY</span>
              </span>
            </div>

            <div className="footer-right">
              <label className="footer-btn-label">
                Ready to learn more or get started?
              </label>

              <Button href="/contact"
                      color="purple">
                Get in touch
              </Button>
            </div>

        </div>
      </footer>
    )
  }
}

export default Footer
