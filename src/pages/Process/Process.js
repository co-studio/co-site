import React, { Component } from 'react'

// Illustrations
import processOne from '../../assets/images/illustrations/illustration-process-1.svg'
import processTwo from '../../assets/images/illustrations/illustration-process-2.svg'
import processThree from '../../assets/images/illustrations/illustration-process-3.svg'
import processFour from '../../assets/images/illustrations/illustration-process-4.svg'
// Components
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import IconList from '../../components/IconList/IconList'
import ContentSection from '../../components/ContentSection/ContentSection'

class Process extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: null
    }
  }

  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  render() {
    const imageLocation = (this.state.windowWidth > 768)
      ? 'left'
      : 'right'

    return (
      <div className="app-container">
        <Navbar />

        <Hero headline="Our Process"
              btnText="Get in touch"
              background="process">
          We take a wholistic, business driven approach to building bots.
          <br />
          After crafting countless bots, we've learned a thing or two.
        </Hero>

        <IconList background="#c9c7ce"/>

        <ContentSection background="dark"
                        textPosition={imageLocation}
                        title="1. Exploration"
                        header="How can we grow your business with chatbots?"
                        deliverable="Market Research"
                        image={processOne}
                        button="Get Started">
          To start, we research your business and identify areas that chatbots can improve your operations.
          Some common use cases are customer service, order tracking, digital coupon delivery and direct sales campaigns.
        </ContentSection>

        <ContentSection background="light"
                        textPosition="right"
                        title="2. Design"
                        header="What user experience can grow your bottom line?"
                        deliverable="Product Requirements"
                        image={processTwo}
                        button="Get Started">
          Next we collaborate with you to design a chatbot experience that grows your bottom line.
          A well designed conversational interface will boost user retention and provide a seamless experience.
        </ContentSection>

        <ContentSection background="dark"
                        textPosition={imageLocation}
                        title="3. Development"
                        header="How can a chatbot expand your operations?"
                        deliverable="Custom-built Bot"
                        image={processThree}
                        button="Get Started">
          Time to code your chatbot.
          We use our proprietary software to build efficiently and scalably while providing you with incremental versions throughout the process.
        </ContentSection>

        <ContentSection background="light"
                        textPosition="right"
                        title="4. Growth"
                        header="How can we grow your user base?"
                        deliverable="Go-to-market Strategy"
                        image={processFour}
                        button="Get Started">
          Finally, we determine a user acquisition strategy for your chatbot’s continued growth.
          Let us find the acquisition channels which work best for your business and chatbot!
        </ContentSection>

        <Footer />
      </div>
    )
  }
}

export default Process
