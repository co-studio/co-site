import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import logan from '../../assets/images/about/about-logan.jpg'
import nathan from '../../assets/images/about/about-nathan.jpg'

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

        <section className="about-body">
          <h3 className="about-header">
            Our Founders
          </h3>

          <div className="about-founders">
            <div className="about-person">
              <img className="about-person-image"
                src={logan} />
              <div className="about-person-text">
                <h2 className="about-name">
                  Logan Bernard
                </h2>
                <p className="about-blurb">
                  A leader in the bots community with equal programming and design chops, Logan loves building products that make user’s lives easier.
                </p>
              </div>
            </div>

            <div className="about-person">
              <img className="about-person-image"
                src={nathan} />
              <div className="about-person-text">
                <h2 className="about-name">
                  Nathan Bernard
                </h2>
                <p className="about-blurb">
                  A serial entrepreneur and CEO of multiple venture-backed tech businesses, Nathan is passionate about bringing mobile products to large audiences.
                </p>
              </div>
            </div>
          </div>

          <h3 className="about-header about-header-story">
            Our Story
          </h3>

          <div className="about-story-container">
            <p className="about-story">

            </p>

          </div>

        </section>

        <Footer />
      </div>
    )
  }
}

export default About
