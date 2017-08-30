import React, { Component } from 'react';
import glamorous from 'glamorous';

import './App.css';
import colors from './styles/colors';
import logo from './assets/images/co-logo.svg';
import co from './assets/images/co-logo-vertical.svg';
import mail from './assets/images/mail-icon.svg';
import headline from './assets/images/landing-headline.svg';
import corros from './assets/images/portfolio/corros.png';
import tbs from './assets/images/portfolio/tbs.png';
import coServices1 from './assets/images/portfolio/co-services-1.png';
import coServices2 from './assets/images/portfolio/co-services-2.png';
import lrn from './assets/images/portfolio/lrn.png';
import dattoCommunity from './assets/images/portfolio/datto-community.png';
import dattoStyleguide from './assets/images/portfolio/datto-styleguide.png';
import update from './assets/images/portfolio/update.png';
import fanduel from './assets/images/portfolio/fanduel.png';
import webot from './assets/images/portfolio/webot.png';
import cafe from './assets/images/portfolio/cafe.png';
import wewalktogether from './assets/images/portfolio/wewalktogether.png';
import coffee from './assets/images/portfolio/coffee.png';

import logan from './assets/images/team/logan.png';
import nathan from './assets/images/team/nathan.png';
import chirag from './assets/images/team/chirag.png';
import kim from './assets/images/team/kim.jpg';
import evan from './assets/images/team/evan.jpg';
import matt from './assets/images/team/matt.jpg';

import Section from './components/Section';
import SectionFixed from './components/SectionFixed';
import TextHero from './components/TextHero';
import Text from './components/Text';
import Button from './components/Button';
import Content from './components/Content';
import Link from './components/Link';
import ImageLink from './components/ImageLink';
import Image from './components/Image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TeamImage from './components/TeamImage';

const AppContainer = glamorous.div({
  background: colors.black,
  boxSizing: 'border-box',
  height: '100%',
  padding: '48px',
  marginBottom: '0',
  overflow: 'hidden',
});

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Navbar>
          <Image src={logo} css={{ width: '48px' }} />
          <Link
            css={{ float: 'right' }}
            href="mailto:team@costudio.io"
          >
            <Image src={mail} css={{ width: '32px', height: '32px' }} />
          </Link>
          {/* CO STUDIO */}
        </Navbar>

        <SectionFixed color={colors.black}>
          <Content css={{ display: 'flex', marginTop: '64px', marginBottom: 0, width: '70vw' }}>
            <div style={{ flex: '1', marginRight: '10%' }}>
              <img src={headline} style={{ width: '100%' }} />
              <Text css={{ color: colors.purple, marginTop: '48px' }}>
                That’s where Co comes in. <br/>
                We can bring your app to life on <i>web</i>, <i>mobile</i>,
                or <i>chat</i> with <i>code</i> and <i>design</i>.
              </Text>
              <div style={{ display: 'flex' }}>
                <Link
                  href="mailto:team@costudio.io"
                  css={{ width: '50%', marginRight: '12px' }}
                >
                  <Button>
                    Get In Touch
                  </Button>
                </Link>
                {/* <Link href="#contact" css={{ width: '50%' }}>
                  <Button secondary>
                  Learn More
                  </Button>
                </Link> */}
              </div>
            </div>
            <div style={{ width: '40%' }}>
              <img src={co} style={{ width: '125%' }} />
            </div>
          </Content>
        </SectionFixed>

        <Section
          color={colors.purple}
          css={{ marginTop: '92vh' }}
        >
          <Content>
            <TextHero>
              Why
            </TextHero>
            <div style={{ marginLeft: '8px' }}>
              We understand how hard it is to get your startup and product off
              the ground. We’ve run our own startups and gone through the process
              of building MVPs, raising venture capital, getting press and hiring
              engineering teams. Today our apps are used by millions.
              <br/><br/>
              Check out some of our previous startups and apps in the press:
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
            </div>
          </Content>
        </Section>

        <Section
          color={colors.white}
        >
          <Content>
            <TextHero>
              What
            </TextHero>

            <div style={{ marginLeft: '8px', marginBottom: '48px' }}>
              We are a digital product studio that codes and designs apps
              for web, mobile and chat.
              Here are some of the products we’ve taken from idea to market.
              <br/>
              <span style={{ fontSize: '14px' }}>
                By the way, startups created by Co Studio are labeled with <i>CREATED BY CO</i>.
              </span>
            </div>

            <div style={{ width: '100%' }}>
              <ImageLink src={corros} />
            </div>

            <div style={{ width: '100%', display: 'flex' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ImageLink src={tbs} />
                <ImageLink src={coServices1} />
                <div style={{ height: '100%', background: colors.grayLight, margin: '8px' }} />
              </div>

              <div style={{ width: '100%' }}>
                <ImageLink src={lrn} />
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <ImageLink src={dattoCommunity} />
            </div>

            <div style={{ width: '100%', display: 'flex' }}>
              <div style={{ width: '100%' }}>
                <ImageLink src={update} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ImageLink src={fanduel} />
                <ImageLink src={coServices2} />
                <ImageLink src={webot} css={{ display: 'flex', justifyContent: 'center' }} />
                <div style={{ height: '100%', background: colors.grayLight, margin: '8px' }} />
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <ImageLink src={cafe} />
            </div>

            <div style={{ width: '100%', display: 'flex' }}>
              <div style={{ width: '100%' }}>
                <ImageLink src={coffee} />
              </div>

              <div style={{ width: '100%' }}>
                <ImageLink src={dattoStyleguide} />
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <ImageLink src={wewalktogether} />
            </div>

          </Content>
        </Section>

        <Section
          color={colors.purple}
        >
          <Content>
            <TextHero>
              Who
            </TextHero>
            <div style={{ marginLeft: '8px' }}>
              We are a team of entrepreneurs, engineers, designers, and content
              creators that live to create digital experiences.
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '48px' }}>
              <TeamImage src={logan} name="logan" />
              <TeamImage src={nathan} name="nathan" />
              <TeamImage src={chirag} name="chirag" />
              <TeamImage src={kim} name="kim" />
              <TeamImage src={evan} name="evan" />
              <TeamImage src={matt} name="matt" />
            </div>
          </Content>
        </Section>

        <Section color={colors.white}>
          <Content>
            <TextHero>
              How
            </TextHero>
            <div style={{ marginLeft: '8px' }}>
              Just&nbsp;
              <Link
                css={{ color: colors.purple, ':hover': { color: colors.grayLight } }}
                href="mailto:team@costudio.io"
              >
                shoot us an email
              </Link> describing yourself and your needs,
              and we will be off to the races together in no time.
              <br/>
              <span style={{ fontSize: '14px' }}>
                Thanks for stopping by!
              </span>
            </div>
          </Content>
        </Section>

        <Footer>
          <Text css={{ fontSize: '12px', float: 'left', textTransform: 'uppercase', margin: '0' }}>
            Co Studio
          </Text>
          <Text css={{ fontSize: '12px', float: 'right', textTransform: 'uppercase', margin: '0' }}>
            Brooklyn, NY
          </Text>
        </Footer>
      </AppContainer>
    );
  }
}

export default App;
