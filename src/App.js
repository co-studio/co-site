import React, { Component } from 'react';

import logoWhite from './assets/co-logo-white.svg';
// import impressiv from './assets/images/portfolio-impressiv.svg';
// import fanduel from './assets/images/portfolio-fanduel.svg';
// import lrn from './assets/images/portfolio-lrn.svg';
// import datto from './assets/images/portfolio-datto.svg';
// import kmbyoga from './assets/images/portfolio-kmbyoga.svg';
import logan from './assets/images/who-logan.jpg';
import nathan from './assets/images/who-nathan.jpg';
import james from './assets/images/who-james.jpg';
import devices from './assets/images/what-devices.jpg';
import heart from './assets/images/why-heart.gif';

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
// import brandImage from './assets/images/brand-image.png';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import IconList from './components/IconList/IconList'

class App extends Component {
  render() {
    return (
      <div className="app-container">

        <Navbar />
        <Hero />
        <IconList icons={[ bg, bi, gizmodo, hp, lifehacker, mashable, politico, guardian, tnw, vice ]}
                  background="#c9c7ce"/>


        <section id="about" className="about-container">
          <div className="about-sub-container">
            <h1 className="about-header">Who</h1>
            <p className="about-section">
              We are a small team of designers, developers, and entrepreneurs
              from Brooklyn, NY.
            </p>
            <div className="about-images">
              <img src={nathan} alt="Nathan Bernard" />
              <img src={logan} alt="Logan Bernard" />
              <img src={james} alt="James Staley" />
            </div>
          </div>
          <div className="about-sub-container">
            <h1 className="about-header">What</h1>
            <p className="about-section">
              We help businesses large and small  accomplish their digital goals.
              <b> We design and develop a range of digital products from
                websites, apps, and bots to brands and marketing materials.</b>
            </p>
            <img className="what-image" src={devices} alt="Device Range" />
          </div>
          <div className="about-sub-container">
            <h1 className="about-header">Why</h1>
            <p className="about-section">
              Crafting digital products is our passion.
              We hone our craft outside of business hours because it's what we love to do.
            </p>
            <img className="why-image" src={heart} alt="<3 Products" />
          </div>
        </section>

        <section className="portfolio-container">
          <h1 className="about-header">You</h1>
          <p className="about-section">
            You might work for a corporation, a business, or be an entrepreneur.
            Whatever your situation and needs, we've (likely) seen it before and are happy to help.
          </p>
          <div className="portfolio-images">
            {/* <img className="portfolio-img" src={datto} alt="Datto" />
            <img className="portfolio-img" src={fanduel} alt="FanDuel" />
            <img className="portfolio-img" src={kmbyoga} alt="KMB Yoga" />
            <img className="portfolio-img" src={impressiv} alt="Impressiv" />
            <img className="portfolio-img" src={lrn} alt="Lrn" /> */}
          </div>
        </section>

        <section className="contact-container">
          <h1 className="about-header">When</h1>
          <p className="about-section">
            It’s always a good time to get started. <br/>
            Let’s build something great together.
          </p>
          <a href="mailto:costudio.io@gmail.com" className="btn btn-contact">
            Get Started Now
          </a>
        </section>
{/*
        <section className="brand-container">
          <img className="brand-image" src={brandImage} alt="Co Studio" />
        </section> */}

        <footer className="footer-container">
          <a href="#headline">
            <img src={logoWhite} className="logo" alt="Co" />
          </a>
          <div className="footer-links">
            <span className="copyright">
              &copy; Co Studios Inc.
            </span>
            <a href="mailto:costudio.io@gmail.com" className="email">
              costudio.io@gmail.com
            </a>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
