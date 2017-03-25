import React, { Component } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import IconList from '../../components/IconList/IconList'
import SubHeader from '../../components/SubHeader/SubHeader'
import FormContact from '../../components/FormContact/FormContact'

class Contact extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar location={this.props.location} />

        <Hero headline="Let's Chat"
              background="contact">
          We are always happy to talk and will respond within a day's time.
        </Hero>

        <IconList background="#c9c7ce"/>

        <section className="contact-container">
          <SubHeader className="contact-header">
            Contact Us
          </SubHeader>

          <FormContact />
        </section>

        <Footer />
      </div>
    )
  }
}

export default Contact
