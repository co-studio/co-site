import React, { Component } from 'react';

// Images
import webot from '../../assets/images/bots/logo-webot.svg'
import wrinkle from '../../assets/images/bots/logo-wrinkle.svg'
import budbot from '../../assets/images/bots/logo-budbot.svg'
import bbp from '../../assets/images/bots/logo-bbp.svg'
import impressiv from '../../assets/images/bots/logo-impressiv.svg'
import wwt from '../../assets/images/bots/logo-wwt.svg'
// Components
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import IconList from '../../components/IconList/IconList'
import Thumbnail from '../../components/Thumbnail/Thumbnail'

class Bots extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />

        <Hero headline="Our Chatbots"
              btnText="Get in touch"
              background="about">
          We build chatbots internally and externally with
          <br />
          a consistent focus on delivering value to the end user.
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
                       href="https://facebook.com/BudBot"
                       title="BudBot"
                       description="Engage your audience on social media" />

            <Thumbnail image={bbp}
                       href="github.com/hoodsy/messenger-bot-boilerplate"
                       title="BoilerBot"
                       description="Learn how to build chatbots" />

            <Thumbnail image={wrinkle}
                       title="Wrinkle"
                       description="Laundry made easy" />

            <Thumbnail image={impressiv}
                       title="Impressiv"
                       description="Engage your audience on social media" />

            <Thumbnail image={wwt}
                       href="https://wewalktogether.org"
                       title="WeWalkTogether"
                       description="Find buddies to walk you home" />
          </div>

        </section>

        <Footer />
      </div>
    )
  }
}

export default Bots
