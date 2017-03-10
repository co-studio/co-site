import React, { Component } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import IconList from '../../components/IconList/IconList'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.renderThankYouMessage = this.renderThankYouMessage.bind(this)

    this.state = {
      showThankYou: false
    }
  }

  submitForm(e) {
    e.preventDefault()
    const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSesuaBPEUkWs95Y00e3C0RxDu_3R3c7UlYBNptVLY8LMn_SpA'

    const inputs = [
      this.refs['contact-input-name'],
      this.refs['contact-input-email'],
      this.refs['contact-input-message'],
    ]

    const buildInputStr = (ref) => `entry.${ref.id}=${ref.value}`
    const [ nameStr, emailStr, messageStr ] = inputs.map(buildInputStr)

    const requestUrl = `${baseUrl}/formResponse?${nameStr}&${emailStr}&${messageStr}&submit=Submit`
    fetch(requestUrl,
      {
        method: 'POST',
        mode: 'no-cors'
      }
    )

    const clearRef = (ref) => ref.value = null
    inputs.map(clearRef)

    this.setState({
      showThankYou: true
    })
  }

  renderThankYouMessage() {
    return (
      <div className="contact-thank-you">
        <h2 className="contact-thank-you-header">
          Message Received!
        </h2>

        <p className="contact-thank-you-body">
          Thanks for reaching out, we will be in touch soon.
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <Navbar />

        <Hero headline="Let's Chat"
              background="contact">
          We are always happy to talk and will respond within a day's time.
        </Hero>
        
        <IconList background="#c9c7ce"/>

        <section className="contact-container">
          <h2 className="contact-header">
            Contact Us
          </h2>
          <form className="contact-form"
                id="form"
                action=""
                method="POST"
                target="no-target">

            <label className="contact-input-label">
              Name
              <input id="942985033"
                     className="contact-input contact-input-name"
                     ref="contact-input-name"
                     name="contact-name"
                     required
                     type="text" />
             </label>

            <label className="contact-input-label">
              Email
              <input id="1049864417"
                     className="contact-input contact-input-email"
                     ref="contact-input-email"
                     name="contact-email"
                     required
                     type="email" />
            </label>

            <label className="contact-input-label">
              Message
              <textarea id="1286200268"
                className="contact-input contact-input-message"
                ref="contact-input-message"
                name="contact-message"
                required
                type="text" />
            </label>

            <div className="contact-form-footer">
              {this.state.showThankYou && this.renderThankYouMessage()}

              <button className="btn btn-purple contact-submit-btn"
                type="submit"
                onClick={this.submitForm}>
                Send Message
              </button>
            </div>
          </form>
        </section>

        <Footer />
      </div>
    )
  }
}

export default Contact
