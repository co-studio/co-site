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

        <Hero headline="Bringing bots to your business"
              btnText="Get in touch">
          Bring your idea to life or streamline your business with a chatbot today
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
            For $10K and one month’s time we’ll grow your business or bring your idea to life through chatbots.
            <br />
            Learn more about the advantages of a chatbot below!
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
                        image={exploration}
                        button={true}>
          Chatbots automate conversations and tasks.
          They can be used to answer support questions, provide directions to a store location, or order a pizza, among many other things.
          Often times chatbots provide functionality similar to a mobile app.
        </ContentSection>

        <ContentSection background="light"
                        textPosition="right"
                        title="2. Time"
                        header="How long will it take to build my chatbot?"
                        image={design}
                        button={true}>
          In <b>only 1 month</b> you can have a chatbot built, tested, and integrated into your business.
          This tight timeline allows you to reach the mobile market quickly and cut costs.
        </ContentSection>

        <ContentSection background="dark"
                        textPosition={imageLocation}
                        title="3. Cost"
                        header="How much will my chatbot cost?"
                        button={true}
                        image={development}>
          For <b>only $10k</b> you can build a custom chatbot for your business or idea.
          With the help of our proprietary software and industry expertise we are capable of building bots in an economic fashion.
        </ContentSection>

        <ContentSection background="light"
                        textPosition="right"
                        title="4. Discovery"
                        header="How will customers find my chatbot?"
                        button={true}
                        image={growth}>
          Customers typically will find your chatbot through your business’s Facebook Page.
          Your chatbot can utilize your Facebook Page’s audience, which is a nascent asset for most businesses and entrepreneurs.
        </ContentSection>

        <Footer />
      </div>
    )
  }
}

export default Landing
