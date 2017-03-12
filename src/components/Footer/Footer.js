import React, { Component } from 'react';

import Button from '../Button/Button'
import logoWhite from '../../assets/co-logo-white.svg';
import iconTwitter from '../../assets/icons/icon-twitter.svg';
import iconFacebook from '../../assets/icons/icon-facebook.svg';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.renderSMIcon = this.renderSMIcon.bind(this)
  }

  renderSMIcon({ href, image }) {
    return (
      <a href={href}
         className="footer-icon-link"
         target="_blank"
         key={href}>
        <img className="footer-icon"
             src={image}
             alt={href} />
      </a>
    )
  }

  render() {
    const icons = [
      { image: iconTwitter, href: 'https://twitter.com' },
      { image: iconFacebook, href: 'https://facebook.com' }
    ]

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

              <div className="footer-icons">
                {icons.map(this.renderSMIcon)}
              </div>
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
