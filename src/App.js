import React, { Component } from 'react';

// Press
import bg from './assets/images/press/press-boston-globe.svg';
import bi from './assets/images/press/press-business-insider.svg';
import gizmodo from './assets/images/press/press-gizmodo.svg';
import hp from './assets/images/press/press-huffington-post.svg';
import lifehacker from './assets/images/press/press-lifehacker.svg';
import mashable from './assets/images/press/press-mashable.svg';
import politico from './assets/images/press/press-politico.svg';
import guardian from './assets/images/press/press-the-guardian.svg';
import tnw from './assets/images/press/press-tnw.svg';
import vice from './assets/images/press/press-vice.svg';
// Illustrations
import exploration from './assets/images/illustrations/process-illustration-exploration.svg'
import design from './assets/images/illustrations/process-illustration-design.svg'
import development from './assets/images/illustrations/process-illustration-development.svg'
import growth from './assets/images/illustrations/process-illustration-growth.svg'
import offer from './assets/images/illustrations/illustration-offer.svg'
// Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Button from './components/Button/Button'
import Hero from './components/Hero/Hero'
import IconList from './components/IconList/IconList'
import ContentSection from './components/ContentSection/ContentSection'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />

        <Hero headline="Bring bots to your business"
              btnText="Get in touch">
          Bring your idea to life or streamline operations with an MVP. <br />
          All it takes is <b>1 month and $10,000</b>.
        </Hero>

        <IconList icons={[ bg, bi, gizmodo, hp, lifehacker, mashable, politico, guardian, tnw, vice ]}
                  background="#c9c7ce"/>


                <section className="landing-offer">
                  <img className="illustration-offer"
                    src={offer} />

                  <h2 className="landing-offer-header">
                    Our offer is simple
                  </h2>

                  <p className="landing-offer-body">
                    Cut costs and boost your business with a chatbot
                    for $10k over one month. <br />
                    Learn more about our process below.
                  </p>

                  <Button href="mailto:costudio.io@gmail.com?subject=Bots for my Business"
                          color="purple">
                    Get Started
                  </Button>
                </section>

        <ContentSection background="dark"
                        textPosition="left"
                        title="1. Exploration"
                        header="What's your business or idea?"
                        body="To start, we research your business and identify areas that chatbots can improve your operations. We find ways to cut costs and impact your business."
                        deliverable="Market Research"
                        image={exploration} />

        <ContentSection background="light"
                        textPosition="right"
                        title="2. Design"
                        header="What experience is right for you?"
                        body="We collaborate with you to design a chatbot experience that grows your bottom line. This is when goals are set and features are defined."
                        deliverable="Product Requirements"
                        image={design} />

        <ContentSection background="dark"
                        textPosition="left"
                        title="3. Development"
                        header="What experience is right for you?"
                        body="We collaborate with you to design a chatbot experience that grows your bottom line. This is when goals are set and features are defined."
                        deliverable="Custom-built Bot"
                        image={development} />

        <ContentSection background="light"
                        textPosition="right"
                        title="4. Growth"
                        header="What experience is right for you?"
                        body="We collaborate with you to design a chatbot experience that grows your bottom line. This is when goals are set and features are defined."
                        deliverable="Go-to-market Strategy"
                        image={growth} />

        <Footer />

      </div>
    );
  }
}

export default App;
