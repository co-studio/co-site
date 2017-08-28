import React, { Component } from 'react';

import './App.css';
import hero from './assets/images/landing-hero.png';
import colors from './styles/colors';

import Section from './components/Section';
import SectionFixed from './components/SectionFixed';
import TextHero from './components/TextHero';
import Content from './components/Content';
import Link from './components/Link';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SectionFixed image={hero}>
        </SectionFixed>

        <Section
          color={colors.purple}
          css={{ marginTop: '100vh' }}
        >
          <Content>
            <TextHero>
              Why
            </TextHero>
            We understand how hard it is to get your startup and product off
            the ground. We’ve run our own startups and gone through the process
            of building MVPs, raising venture capital, getting press and hiring
            engineering teams. Today our products are used by millions.
            <br/><br/>
            Check out some of our previous startups and products in the press:
            <br/>
            <Link
              target="_blank"
              href="http://mashable.com/2017/02/08/facebook-bot-trump-protests-webot"
            >
              Mashable
            </Link>,&nbsp;
            <Link
              target="_blank"
              href="https://www.bostonglobe.com/business/2014/09/12/new-app-makes-job-hunting-social-experience/0a0GHZxxRjPscJaRmgdc3O/story.html"
            >
              Business Insider
            </Link>,&nbsp;
            <Link
              target="_blank"
              href="http://www.businessinsider.com/lrn-coding-app-2015-7"
            >
              Boston Globe
            </Link>,&nbsp;
            <Link
              target="_blank"
              href="https://news.vice.com/story/alt-right-racists-twitter-bot"
            >
              VICE News
            </Link>.
          </Content>
        </Section>

        <Section
          color={colors.white}
        >
          <Content>
            <TextHero>
              What
            </TextHero>
          </Content>
        </Section>

        <Section
          color={colors.black}
        >
          asdfasdf
        </Section>
      </div>
    );
  }
}

export default App;
