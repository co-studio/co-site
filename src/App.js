import React, { Component } from 'react';

import logo from './assets/co-logo.svg';
import logoWhite from './assets/co-logo-white.svg';
import impressiv from './assets/images/portfolio-impressiv.jpg';
import budbot from './assets/images/portfolio-budbot.jpg';
import lrn from './assets/images/portfolio-lrn.jpg';
import datto from './assets/images/portfolio-datto.jpg';
import resurgent from './assets/images/portfolio-resurgent.jpg';
import kmbyoga from './assets/images/portfolio-kmbyoga.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">

        <nav id="headline" className="navbar">
          <img src={logo} className="logo" alt="Co" />
          <a href="mailto:costudio.io@gmail.com" className="email">
            Contact Us
          </a>
        </nav>

        <section className="headline-container">
          <h1 className="headline">
            <span className="headline-first">What</span>
            <div className="highlight">
              <span>design</span>
              <span>code</span>
              <span>app</span>
              <span>website</span>
              <span>bot</span>
              <span>logo</span>
            </div>
            <br/>
            do you need?
          </h1>
          <p className="sub-headline">
            We can help you with that.
          </p>
          <div className="btn-group">
            <a href="mailto:costudio.io@gmail.com" className="btn btn-contact">
              Let's Get Started
            </a>
            <a href="#about" className="btn btn-clear">
              Learn More
            </a>
          </div>
        </section>

        <section id="about" className="about-container">
          <div className="about-sub-container">
            <h1 className="about-header">Who</h1>
            <p className="about-section">
              We are a small team of designers, developers, and entrepreneurs
              from Brooklyn, NY.
            </p>
          </div>
          <div className="about-sub-container">
            <h1 className="about-header">What</h1>
            <p className="about-section">
              We help businesses large and small  accomplish their digital goals.
              From coding websites, apps, and bots to designing brands and
              marketing materials, we’ve done it all.
            </p>
          </div>
          <div className="about-sub-container">
            <h1 className="about-header">Why</h1>
            <p className="about-section">
              We are passionate about helping businesses, corporations,
              and entrepreneurs accomplish their goals. All of our digital
              experiences are crafted with love and care.
            </p>
          </div>
        </section>

        <section className="portfolio-container">
          <h1 className="about-header">Recent Work</h1>
          <div className="portfolio-images">
            <img className="portfolio-img" src={impressiv} alt="Impressiv" />
            <img className="portfolio-img" src={datto} alt="Datto Community" />
            <img className="portfolio-img" src={lrn} alt="Lrn" />
            <img className="portfolio-img" src={kmbyoga} alt="KMB Yoga" />
            <img className="portfolio-img" src={budbot} alt="BudBot" />
            <img className="portfolio-img" src={resurgent} alt="Resurgent" />
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
