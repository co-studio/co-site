import React, { Component } from 'react'

// Press
import bg from '../../assets/images/press/press-boston-globe.svg'
import bi from '../../assets/images/press/press-business-insider.svg'
import gizmodo from '../../assets/images/press/press-gizmodo.svg'
import hp from '../../assets/images/press/press-huffington-post.svg'
import lifehacker from '../../assets/images/press/press-lifehacker.svg'
import mashable from '../../assets/images/press/press-mashable.svg'
import politico from '../../assets/images/press/press-politico.svg'
import guardian from '../../assets/images/press/press-the-guardian.svg'
import tnw from '../../assets/images/press/press-tnw.svg'
import vice from '../../assets/images/press/press-vice.svg'
// Illustrations
import exploration from '../../assets/images/illustrations/process-illustration-exploration.svg'
import design from '../../assets/images/illustrations/process-illustration-design.svg'
import development from '../../assets/images/illustrations/process-illustration-development.svg'
import growth from '../../assets/images/illustrations/process-illustration-growth.svg'
import offer from '../../assets/images/illustrations/illustration-offer.svg'
import offerVertical from '../../assets/images/illustrations/illustration-offer-vertical.svg'
// Components
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
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
    const offerImage = (this.state.windowWidth > 768)
      ? offer
      : offerVertical

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

        <IconList icons={[ bg, bi, gizmodo, hp, lifehacker, mashable, politico, guardian, tnw, vice ]}
                  background="#c9c7ce"/>


        <section className="landing-offer">
          <img className="illustration-offer"
            src={offerImage}
            alt="Our Offer" />

          <h2 className="landing-offer-header">
            Our offer is simple
          </h2>

          <p className="landing-offer-body">
            Cut costs and boost your business with a chatbot for $10k over one month.
            <br />
            Learn more about our process below.
          </p>

          <Button href="mailto:costudio.io@gmail.com?subject=Bots for my Business"
                  color="purple">
            Get Started
          </Button>
        </section>

        <ContentSection background="dark"
                        textPosition={imageLocation}
                        title="1. Exploration"
                        header="What problem are we solving?"
                        deliverable="Market Research"
                        image={exploration}
                        button={true}>
          To start, we research your business and identify areas that chatbots can improve your operations.
          Some common use cases are customer service, order tracking, digital coupon delivery and direct sales campaigns.
        </ContentSection>

        <ContentSection background="light"
                        textPosition="right"
                        title="2. Design"
                        header="What's the user experience?"
                        deliverable="Product Requirements"
                        image={design}
                        button={true}>
          Next we collaborate with you to design a chatbot experience that grows your bottom line.
          A well designed conversational interface will boost user retention and provide a seamless experience.
        </ContentSection>

        <ContentSection background="dark"
                        textPosition={imageLocation}
                        title="3. Development"
                        header="What are we coding?"
                        deliverable="Custom-built Bot"
                        image={development}
                        button={true}>
          Time to code your chatbot.
          We use our proprietary software to build efficiently and scalably while providing you with incremental versions throughout the process.
        </ContentSection>

        <ContentSection background="light"
                        textPosition="right"
                        title="4. Growth"
                        header="How can we grow your user base?"
                        deliverable="Go-to-market Strategy"
                        image={growth}
                        button={true}>
          Finally, we determine a user acquisition strategy for your chatbot’s continued growth.
          Let us find the acquisition channels which work best for your business and chatbot!
        </ContentSection>

        <Footer />
      </div>
    )
  }
}

export default Process
