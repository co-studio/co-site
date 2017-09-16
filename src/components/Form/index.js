import React from 'react';
import glamorous from 'glamorous';

import TextField from '../Fields/Text';
import DropdownField from '../Fields/Dropdown';
import TextAreaField from '../Fields/TextArea';
import Text from '../Text';
import Label from '../Label';
import Button from '../Button';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import typography from '../../styles/typography';

    // this.formIds = {
    //   name: '942985033',
    //   email: '1049864417',
    //   message: '1286200268'
    // }

const FormContainer = glamorous.form({
  padding: spacing.regular,
  background: colors.purple,
  borderRadius: '4px',
});

class Form extends React.Component {

  state = {
    showThankYou: false
  }

  submitForm = (e) => {
    e.preventDefault()
    const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSesuaBPEUkWs95Y00e3C0RxDu_3R3c7UlYBNptVLY8LMn_SpA'

    const inputs = [
      this.refs['Form-input-name'],
      this.refs['Form-input-email'],
      this.refs['Form-input-message'],
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

  renderThankYouMessage = () => {
    return (
      <div className="Form-thank-you">
        <h2 className="Form-thank-you-header">
          Message Received!
        </h2>

        <p className="Form-thank-you-body">
          Thanks for reaching out, we will be in touch soon.
        </p>
      </div>
    )
  }

  render () {
    return (
      <FormContainer className="Form-form"
        id="form"
        action=""
        method="POST"
        target="no-target">

        <Text css={{ margin: 0, lineHeight: 1 }}>
          <span style={{ textTransform: 'uppercase', fontSize: typography.fontSize.regular }}>
            Contact Us
          </span>
          <br />
          <span style={{ fontSize: typography.fontSize.xxsmall, marginTop: '-12px' }}>
            (we probably won’t bite)
          </span>
        </Text>

        <Label>
          Name
          <TextField />
        </Label>

        <Label>
          Email
          <TextField />
        </Label>

        <Label>
          Budget
          <DropdownField
            options={[
              { value: "10k", label: "less than $10K" },
              { value: "50k", label: "between $10–50K" },
              { value: "100k", label: "over $50K" },
            ]}
          />
        </Label>

        <Label>
          Project Overview
          <TextAreaField
          />
        </Label>

        <Button
          black
          type="submit"
          onClick={this.submitForm}>
          Send
        </Button>

        {/* <label className="Form-input-label">
          Name
          <input id={this.formIds.name}
          className="Form-input Form-input-name"
          ref="Form-input-name"
          name="Form-name"
          required
          type="text" />
        </label> */}
        {/*
          <label className="Form-input-label">
          Email
          <input id={this.formIds.email}
          className="Form-input Form-input-email"
          ref="Form-input-email"
          name="Form-email"
          required
          type="email" />
          </label>

          <label className="Form-input-label">
          Message
          <textarea id={this.formIds.message}
          className="Form-input Form-input-message"
          ref="Form-input-message"
          name="Form-message"
          required
          type="text" />
        </label> */}

        {/* <div className="Form-form-footer">
          {this.state.showThankYou && this.renderThankYouMessage()}

          <button className="btn btn-purple Form-submit-btn"
          type="submit"
          onClick={this.submitForm}>
          Send Message
          </button>
        </div> */}

      </FormContainer>
    )
  }
}

export default Form;
