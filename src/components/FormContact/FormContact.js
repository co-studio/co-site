import React, { PropTypes, Component } from 'react'

class FormContact extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.renderThankYouMessage = this.renderThankYouMessage.bind(this)

    this.state = {
      showThankYou: false
    }

    this.formIds = {
      name: '942985033',
      email: '1049864417',
      message: '1286200268'
    }
  }

  submitForm(e) {
    e.preventDefault()
    const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSesuaBPEUkWs95Y00e3C0RxDu_3R3c7UlYBNptVLY8LMn_SpA'

    const inputs = [
      this.refs['FormContact-input-name'],
      this.refs['FormContact-input-email'],
      this.refs['FormContact-input-message'],
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
      <div className="FormContact-thank-you">
        <h2 className="FormContact-thank-you-header">
          Message Received!
        </h2>

        <p className="FormContact-thank-you-body">
          Thanks for reaching out, we will be in touch soon.
        </p>
      </div>
    )
  }

  render () {
    return (
      <form className="FormContact-form"
            id="form"
            action=""
            method="POST"
            target="no-target">

        <label className="FormContact-input-label">
          Name
          <input id={this.formIds.name}
                 className="FormContact-input FormContact-input-name"
                 ref="FormContact-input-name"
                 name="FormContact-name"
                 required
                 type="text" />
         </label>

        <label className="FormContact-input-label">
          Email
          <input id={this.formIds.email}
                 className="FormContact-input FormContact-input-email"
                 ref="FormContact-input-email"
                 name="FormContact-email"
                 required
                 type="email" />
        </label>

        <label className="FormContact-input-label">
          Message
          <textarea id={this.formIds.message}
            className="FormContact-input FormContact-input-message"
            ref="FormContact-input-message"
            name="FormContact-message"
            required
            type="text" />
        </label>

        <div className="FormContact-form-footer">
          {this.state.showThankYou && this.renderThankYouMessage()}

          <button className="btn btn-purple FormContact-submit-btn"
            type="submit"
            onClick={this.submitForm}>
            Send Message
          </button>
        </div>
      </form>
    )
  }
}

export default FormContact
