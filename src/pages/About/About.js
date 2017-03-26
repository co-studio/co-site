import React, { Component } from 'react';

// Images
import logan from '../../assets/images/about/about-logan.jpg'
import nathan from '../../assets/images/about/about-nathan.jpg'
// Components
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import IconList from '../../components/IconList/IconList'
import SubHeadline from '../../components/SubHeadline/SubHeadline'

class About extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar location={this.props.location} />

        <Hero headline="About Us"
              btnText="Get in touch"
              background="about">
          <SubHeadline>
            We are a team of entrepreneurs, creatives, and engineers <br />
            bound together by a passion for products and people.
          </SubHeadline>
        </Hero>

        <IconList background="#c9c7ce"/>

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
              We have been building mobile products since early 2013 when we launched the iOS app Coffee,
              which was featured in the <a target="_blank" href="http://www.huffingtonpost.com/melanie-curtin/the-coolest-networking-ap_b_5730554.html">Huffington Post</a> and <a target="_blank" href="https://www.bostonglobe.com/business/2014/09/12/new-app-makes-job-hunting-social-experience/0a0GHZxxRjPscJaRmgdc3O/story.html">Boston Globe</a> among other outlets.
              Since then we have built apps such as <a target="_blank" href="http://www.businessinsider.com/lrn-coding-app-2015-7">Lrn</a> that have been featured in hundreds of countries as a Best New App by Apple.
              Today, our mobile apps are used by hundreds of thousands of people.
              <br />
              <br />
              As an extension of our interest in mobile products, we started building political bots during the 2016 election.
              After around 4 months we had amassed over 200M views our content, exclusively promoted by our bots.
              Our political bot work was featured in <a target="_blank" href="https://news.vice.com/story/alt-right-racists-twitter-bot">VICE News</a> and <a target="_blank" href="http://mashable.com/2017/02/08/facebook-bot-trump-protests-webot">Mashable</a> for our innovations in news tech.
              <br />
              <br />
            Today we continue to pursue our passion for building mobile products and bots at Co Studio.
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
