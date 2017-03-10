import React, { Component } from 'react'

// Illustrations
import pitchOne from '../../assets/images/illustrations/illustration-pitch-1.svg'
import pitchTwo from '../../assets/images/illustrations/illustration-pitch-2.svg'
import pitchThree from '../../assets/images/illustrations/illustration-pitch-3.svg'
import pitchFour from '../../assets/images/illustrations/illustration-pitch-4.svg'
import offer from '../../assets/images/illustrations/illustration-offer.svg'
import offerVertical from '../../assets/images/illustrations/illustration-offer-vertical.svg'
// Components
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import Hero from '../../components/Hero/Hero'
import IconList from '../../components/IconList/IconList'
import ContentSection from '../../components/ContentSection/ContentSection'

class Landing extends Component {
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

        <Hero headline="Bringing chatbots to your business"
              btnText="Get in touch">
          Automate tasks, expand your mobile presence, and cut costs today
        </Hero>

        <IconList background="#c9c7ce"/>

        <section className="landing-offer">
          <img className="illustration-offer"
            src={offerImage}
            alt="Our Offer" />

          <h2 className="landing-offer-header">
            Our offer is simple
          </h2>

          <p className="landing-offer-body">
            For <b>$10K</b> we will work with you for <b>a month</b> to design and code a chatbot that will grow your business.
          </p>

          <Button href="mailto:costudio.io@gmail.com?subject=Bots for my Business"
                  color="purple">
            Get Started
          </Button>
        </section>

        <ContentSection background="dark"
                        textPosition={imageLocation}
                        title="1. What"
                        header="What is a chatbot?"
                        image={pitchOne}
                        button="Learn More">
          Chatbots automate conversations and tasks.
          They can be used to answer support questions, provide directions to a store location, or order a pizza, among many other things.
          Often times chatbots provide functionality similar to a mobile app.
        </ContentSection>

        <ContentSection background="light"
                        textPosition="right"
                        title="2. Time"
                        header="How long will it take to build my chatbot?"
                        image={pitchTwo}
                        button="Let's Talk">
          In <b>only 1 month</b> you can have a chatbot built, tested, and integrated into your business.
          This tight timeline allows you to reach the mobile market quickly and cut costs.
        </ContentSection>

        <ContentSection background="dark"
                        textPosition={imageLocation}
                        title="3. Cost"
                        header="How much will my chatbot cost?"
                        button="Start Building"
                        image={pitchThree}>
          For <b>only $10k</b> you can build a custom chatbot for your business or idea.
          With the help of our proprietary software and industry expertise we are capable of building bots in an economic fashion.
        </ContentSection>

        <ContentSection background="light"
                        textPosition="right"
                        title="4. Discovery"
                        header="How will customers find my chatbot?"
                        button="Get Started"
                        image={pitchFour}>
          Customers typically find chatbots through a business’s Facebook Page.
          Your chatbot can utilize your Facebook Page’s audience, which is a nascent asset for most businesses and entrepreneurs.
        </ContentSection>

        <Footer />
      </div>
    )
  }
}

export default Landing
