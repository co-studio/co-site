import React, { Component } from 'react'

// Illustrations
import pitchOne from '../../assets/images/illustrations/illustration-pitch-1.svg'
// import pitchThree from '../../assets/images/illustrations/illustration-pitch-3.svg'
import processFour from '../../assets/images/illustrations/illustration-process-4.svg'
import processTwoDark from '../../assets/images/illustrations/illustration-process-2-dark.svg'
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
import FormEmail from '../../components/FormEmail/FormEmail'
import SubHeadline from '../../components/SubHeadline/SubHeadline'
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
          <div className="Hero-landing-headline">
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
          </div>

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

        <section className="landing-content">
          <ContentSection background="dark"
                          textPosition={imageLocation}
                          header="You'll provide better service"
                          image={processTwoDark}>
            From immediate responses 24/7 to personalized 1-1 engagement,
            your chatbot will improve your business’s customer experience.
          </ContentSection>

          <ContentSection background="light"
                          textPosition="right"
                          header="You'll reach a new market"
                          image={processFour}>
            With more than 3B active users on chat platforms
            (more than social media), your chatbot will help your
            business reach a new market.
          </ContentSection>

          <ContentSection background="dark"
                          textPosition={imageLocation}
                          header="You'll generate revenue"
                          image={pitchOne}>
            From less overhead for your team to improved customer retention,
            your chatbot will generate revenue in a variety of ways.
          </ContentSection>
        </section>

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
