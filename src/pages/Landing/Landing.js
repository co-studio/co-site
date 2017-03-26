import React, { Component } from 'react'

// Illustrations
import pitchOne from '../../assets/images/illustrations/illustration-pitch-1.svg'
import pitchTwo from '../../assets/images/illustrations/illustration-pitch-2.svg'
import pitchThree from '../../assets/images/illustrations/illustration-pitch-3.svg'
import pitchFour from '../../assets/images/illustrations/illustration-pitch-4.svg'
import botOne from '../../assets/images/illustrations/illustration-bot-1.svg'
import timer from '../../assets/images/illustrations/illustration-timer.svg'
import chart from '../../assets/images/illustrations/illustration-chart.svg'
import app from '../../assets/images/illustrations/illustration-app.svg'
import store from '../../assets/images/illustrations/illustration-store.svg'
import downArrow from '../../assets/icons/icon-down-arrow.svg'
// Components
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import Hero from '../../components/Hero/Hero'
import IconList from '../../components/IconList/IconList'
import ContentSection from '../../components/ContentSection/ContentSection'
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader'
import SubHeadline from '../../components/SubHeadline/SubHeadline'
import FormEmail from '../../components/FormEmail/FormEmail'
import CardUseCase from '../../components/CardUseCase/CardUseCase'

class Landing extends Component {
  constructor(props) {
    super(props)

    this.scrollTo = this.scrollTo.bind(this)

    this.state = {
      windowWidth: null
    }
  }

  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  scrollTo() {
    const anchor = document.getElementById('landing-uses').scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    const imageLocation = (this.state.windowWidth > 768)
      ? 'left'
      : 'right'

    return (
      <div className="app-container">
        <Navbar location={this.props.location} />

        <Hero className="Hero-landing">
          <Header>
            Never leave a customer unsatisfied again.
            <br/>
            Let your <b>chatbot</b> do the talking.
          </Header>
          <SubHeadline className="SubHeadline-landing">
            Handle your customers’ every request instantly, around the clock.
            <br/>
            Find out how a chatbot can revolutionize your customer experience.
          </SubHeadline>

          <FormEmail btnText="Learn More" />

          <div className="Hero-landing-arrow"
               onClick={this.scrollTo}>
            <label className="Hero-landing-arrow-label">
              Keep Reading
            </label>

            <img src={downArrow}
                 className="Hero-landing-arrow-icon"
                 type="presentation"/>
          </div>
        </Hero>

        <IconList background="#c9c7ce"/>

        <section className="landing-uses"
                 id="landing-uses">
          <SubHeader className="landing-uses-header">
            What can a chatbot do for you?
          </SubHeader>

          <div className="landing-uses-body">
            <CardUseCase image={timer}
                         header="Customer Support"
                         listItems={[
                           '24/7, real-time chat support',
                           'Answer 80% of questions',
                           'Automate escalation to a human'
                         ]} />

            <CardUseCase image={app}
                         header="Mobile App MVP"
                         listItems={[
                           'Engage 3B+ chat platform users',
                           'Reach mobile in 70% less time',
                           'Test your idea for 30% the price'
                         ]} />

            <CardUseCase image={botOne}
                         header="Brand Engagement"
                         listItems={[
                           'Respond to 1M+ fans instantly',
                           'Share special offers and deals',
                           'Deliver subscription content'
                         ]} />

            <CardUseCase image={chart}
                         header="Sales Assistant"
                         listItems={[
                           'Qualify potential leads',
                           'Integrate with your CRM',
                           'Manage accounts with ease'
                         ]} />

            <CardUseCase image={store}
                         header="Small Business"
                         listItems={[
                           'Handle delivery orders',
                           'Sell event tickets',
                           'Send appointment reminders'
                         ]} />
          </div>
        </section>

        <SubHeader className="landing-benefits-header">
          What will you gain from a chatbot?
        </SubHeader>

        <ContentSection background="dark"
                        textPosition={imageLocation}
                        header="You'll provide better service"
                        image={pitchOne}>
          From immediate responses 24/7 to personalized 1-1 engagement,
          your chatbot will improve your business’s customer experience.
        </ContentSection>

        <ContentSection background="light"
                        textPosition="right"
                        header="You'll reach a new market"
                        image={pitchTwo}>
          With more than 3B active users on chat platforms
          (more than social media), your chatbot will help your
          business reach a new market.
        </ContentSection>

        {/* <ContentSection background="dark"
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
        </ContentSection> */}

        <section className="landing-footer-cta">
          <SubHeader>
            Curious how a chatbot can help your business?
          </SubHeader>
          <FormEmail btnText="Learn More"
                     className="FormEmail-light-background"/>
        </section>

        <Footer />
      </div>
    )
  }
}

export default Landing
