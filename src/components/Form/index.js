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

const formIds = {
  name: '1943646400',
  email: '194556849',
  budget: '2066886571',
  description: '680039016'
};

const FormContainer = glamorous.form({
  padding: spacing.regular,
  background: colors.purple,
  borderRadius: '4px',
});

class Form extends React.Component {

  state = {
    name: '',
    email: '',
    budget: '$10k',
    description: '',
    buttonText: 'Send'
  }

  storeValue = (field, e) => { console.log(e.target.value); this.state[field] = e.target.value }

  submitForm = (e) => {
    e.preventDefault()
    const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf6hf9BVu7jMxXNxlONjipDcQKVnQlZxQuRzdGBwkAZNgdOhg'

    const nameStr = `entry.${formIds.name}=${this.state.name}`
    const emailStr = `entry.${formIds.email}=${this.state.email}`
    const budgetStr = `entry.${formIds.budget}=${this.state.budget}`
    const descriptionStr = `entry.${formIds.description}=${this.state.description}`

    const requestUrl = `${baseUrl}/formResponse?${nameStr}&${emailStr}&${budgetStr}&${descriptionStr}/formResponse`
    fetch(requestUrl,
      {
        method: 'POST',
        mode: 'no-cors'
      }
    )

    this.setState({
      name: '',
      email: '',
      budget: '',
      description: '',
      buttonText: 'Thank You!'
    });
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
          <TextField
            required
            id={formIds.name}
            name="Form-name"
            onChange={(e) => this.storeValue('name', e)}
          />
        </Label>

        <Label>
          Email
          <TextField
            required
            id={formIds.email}
            name="Form-email"
            onChange={(e) => this.storeValue('email', e)}

          />
        </Label>

        <Label>
          Budget
          <DropdownField
            required
            id={formIds.budget}
            name="Form-budget"
            onChange={(e) => this.storeValue('budget', e)}

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
            required
            id={formIds.description}
            name="Form-description"
            onChange={(e) => this.storeValue('description', e)}
          />
        </Label>

        <Button
          black
          type="submit"
          onClick={this.submitForm}>
          {this.state.buttonText}
        </Button>

      </FormContainer>
    )
  }
}

export default Form;
