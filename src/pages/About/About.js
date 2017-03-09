import React, { Component } from 'react';

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
// Images
import logan from '../../assets/images/about/about-logan.jpg'
import nathan from '../../assets/images/about/about-nathan.jpg'
// Components
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import IconList from '../../components/IconList/IconList'

class About extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />

        <Hero headline="About Us"
              btnText="Get in touch"
              background="about">
          We are a team of entrepreneurs, creatives, and engineers <br />
          bound together by a passion for products and people.
        </Hero>

        <IconList icons={[ bg, bi, gizmodo, hp, lifehacker, mashable, politico, guardian, tnw, vice ]}
                  background="#c9c7ce"/>

        <section className="about-body">
          <h3 className="about-header">
            Our Founders
          </h3>

          <div className="about-founders">
            <div className="about-person">
              <img className="about-person-image"
                src={logan}
                alt="Logan" />
              <div className="about-person-text">
                <h2 className="about-name">
                  Logan Bernard
                </h2>
                <p className="about-blurb">
                  A leader in the bots community with equal programming and design chops,
                  Logan loves building products that make user’s lives easier.
                </p>
              </div>
            </div>

            <div className="about-person">
              <img className="about-person-image"
                src={nathan}
                alt="Nathan" />
              <div className="about-person-text">
                <h2 className="about-name">
                  Nathan Bernard
                </h2>
                <p className="about-blurb">
                  A serial entrepreneur and CEO of multiple venture-backed tech businesses,
                  Nathan is passionate about bringing mobile products to large audiences.
                </p>
              </div>
            </div>
          </div>

          <h3 className="about-header about-header-story">
            Our Story
          </h3>

          <div className="about-story-container">
            <p className="about-story">
              We have been building mobile products since early 2013 when we launched the iOS app Coffee, which was featured in the Huffington Post and Boston Globe among other outlets.
              Since then we have built apps such as Lrn that have been featured in hundreds of countries as a Best New App by Apple.
              Today, our mobile apps are used by hundreds of thousands of people.
              <br />
              <br />
              As an extension of our interest in mobile products, we started building political bots during the 2016 election.
              Our election bot work was featured in VICE News and The Ringer for our innovations in news tech.
              <br />
              <br />
              Today we continue to pursue our passion for building mobile products at Co Studio.
              We love the challenge of creating chatbots that help businesses and entrepreneurs, and pursue every project with enthusiastic energy!
            </p>

          </div>

        </section>

        <Footer />
      </div>
    )
  }
}

export default About
