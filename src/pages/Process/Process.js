import React, { Component } from 'react'

// Images
import webot from '../../assets/images/bots/logo-webot.svg'
import wrinkle from '../../assets/images/bots/logo-wrinkle.svg'
import budbot from '../../assets/images/bots/logo-budbot.svg'
import bbp from '../../assets/images/bots/logo-bbp.svg'
import impressiv from '../../assets/images/bots/logo-impressiv.svg'
import wwt from '../../assets/images/bots/logo-wwt.svg'
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
import Thumbnail from '../../components/Thumbnail/Thumbnail'
import SubHeadline from '../../components/SubHeadline/SubHeadline'

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
        <Navbar location={this.props.location} />

      <Hero headline="Our Work"
              btnText="Get in touch"
              background="process">
        <SubHeadline>
          We take a wholistic, business driven approach to building bots and apps.
          <br />
          All of our products are focused on delivering value to their users.
        </SubHeadline>
      </Hero>

        <IconList background="#c9c7ce"/>

        <section className="bots-body">
          <h2 className="bots-header">
            Recent Work
          </h2>

          <div className="bots-portfolio">
            <Thumbnail image={webot}
                       href="https://facebook.com/WeBot"
                       title="WeBot"
                       description="Discover nearby activism events" />

            <Thumbnail image={budbot}
                       href="https://facebook.com/BudBot-1827797007496925"
                       title="BudBot"
                       description="Explore cannabis strains through emojis" />

            <Thumbnail image={bbp}
                       href="https://github.com/hoodsy/messenger-bot-boilerplate"
                       title="BoilerBot"
                       description="Learn how to build chatbots" />

            <Thumbnail image={wrinkle}
                       title="Wrinkle"
                       description="Laundry made easy" />

            <Thumbnail image={impressiv}
                       href="https://news.vice.com/story/alt-right-racists-twitter-bot"
                       title="Impressiv"
                       description="Engage your audience on social media" />

            <Thumbnail image={wwt}
                       href="https://wewalktogether.org"
                       title="WeWalkTogether"
                       description="Find buddies to walk you home" />
          </div>
        </section>

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
                        button="Let's Talk">
          Next we collaborate with you to design a chatbot experience that grows your bottom line.
          A well designed conversational interface will boost user retention and provide a seamless experience.
        </ContentSection>

        <ContentSection background="dark"
                        textPosition={imageLocation}
                        title="3. Development"
                        header="How can a chatbot expand your operations?"
                        deliverable="Custom-built Bot"
                        image={processThree}
                        button="Build your Bot">
          Time to code your chatbot.
          We use our proprietary software to build efficiently and scalably while providing you with incremental versions throughout the process.
        </ContentSection>

        <ContentSection background="light"
                        textPosition="right"
                        title="4. Growth"
                        header="How can we grow your user base?"
                        deliverable="Go-to-market Strategy"
                        image={processFour}
                        button="Launch Now">
          Finally, we determine a user acquisition strategy for your chatbot’s continued growth.
          Let us find the acquisition channels which work best for your business and chatbot!
        </ContentSection>

        <Footer />
      </div>
    )
  }
}

export default Process
