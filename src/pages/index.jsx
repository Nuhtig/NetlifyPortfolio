import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import me from '../../static/img/me.jpg';
import Form from './components/Form';
import Layouts from './components/Layouts';
import FrontBanner from './components/FrontBanner';

import { Container } from '../styles/global';

import reactIcon from '../images/react-icon.png';
import gulpIcon from '../images/gulp-icon.png';
import scssIcon from '../images/scss-icon.svg';
import gitIcon from '../images/git-icon.png';
import gatsbyIcon from '../images/gatsby-icon.png';
import vueIcon from '../images/vue-icon.png';
import graphqlIcon from '../images/graphql-icon.png';
import nodejsIcon from '../images/nodejs-icon.png';

export default () => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>JAM Spread Ninja</title>
      <meta name="description" content="Personal Portfolio of Glen Lexry Wan" />
      <meta name="author" content="Glen Lexry Wan" />
      <link rel="canonical" href="https://www.jam-spread-ninja.com/" />
    </Helmet>
    <Layouts>
      <section>
        <FrontBanner
          // imagename="bg2.jpg" not working yet. something wrong with grapgql
          // nothing wrong with graphql, queries are run on build time not run time
          // so you you can't use react data
          // instead you have to pass arguments to queries when creating pages & layouts
          imageheight="95vh"
          title="JAM Spread Ninja"
          description="Personal portfolio of Glen Lexry Wan"
        />
      </section>
      <section>
        <BackgroundBg>
          <Container>
            <AboutMe>
              <img src={me} alt="Glen" />
              <p>
                I work as a front end developer/software developer... Basically,
                i handle the User Interface and handle your experince on the web
                and have been focusing on building web applications! Anyway, i'm
                Glen and i've been teaching myself how to code for over a year
                now and i love every part of it including my morning cup of
                coffee!
              </p>
              <HeadingWrapper>
                <h2>Skills</h2>
                <img src={reactIcon} />
                <img src={scssIcon} />
                <img src={gulpIcon} />
                <img src={gitIcon} />
              </HeadingWrapper>
              <AboutMeSub>
                <h3>React/Redux</h3>
                <p>
                  React was a tough library to get a familiar with, the syntax,
                  jsx, seemed hard to get used to but after building several
                  small applications, i slowly adjusted to how the React
                  ecosystem worked. Now, i am able to contribute to my company's
                  codebase which includes using Redux to manage the State
                  without the state object getting over complicated with the
                  React State.
                </p>
                <h3>Gulp</h3>
                <p>
                  I am able to create my custom build tool with Gulp while i was
                  in my previous company to help me automate my workflow and
                  helped me to code faster, shipping code out sooner without
                  degrading in quality! I have also used this tool to shave of
                  the css which was not being used due to importing of large css
                  frameworks succh as Bootstrap. Faster first meaninful paint!
                </p>
                <h3>SCSS</h3>
                <p>
                  Scss was somewhat my stepping stone to learn ReactJs, weird...
                  maybe, but I think it has helped me think in terms of
                  seperating my website into components and helps me think
                  critcally about what styles could be shared, just like how
                  components could be re-used throughout the application.
                </p>
                <h3>Semantics HTML</h3>
                <p>
                  Writing code which bots understand is very important when
                  writing mark up and trying to boost your SEO!
                </p>
                <h3>Javascript</h3>
                <p>
                  I love how loosely written this language is! it helps me with
                  my productivity by cutting out the details other languages
                  stress about.
                </p>
                <h3>Git</h3>
                <p>What is life without a version control system!</p>
              </AboutMeSub>
            </AboutMe>
            <AboutMe>
              <HeadingWrapper>
                <h2>
                  Currently
                  <br />
                  {' '}
learning
                </h2>
                <img src={gatsbyIcon} />
                <img src={vueIcon} />
                <img src={graphqlIcon} />
              </HeadingWrapper>
              <AboutMeSub>
                <h3>GatsbyJS</h3>
                <p>
                  I'm currently building this portofolio with GatsbyJS and i
                  freaking love it! no need for server side code, gatsby helps
                  me ship code faster than ever, and with an integration with
                  Netlify, i can push my updates with a simple git push to my
                  repo!
                </p>
                <h3>VueJS</h3>
                <p>
                  Recently picked up, can't wait to use this! a bit confusing
                  after coming from React.
                </p>
                <h3>GraphQL</h3>
                <p>No more innefficient RESTful API's!</p>
              </AboutMeSub>
            </AboutMe>
            <AboutMe>
              <HeadingWrapper>
                <h2>
                  Picking up
                  <br />
                  {' '}
Soon!
                </h2>
                <img src={nodejsIcon} />
              </HeadingWrapper>
              <AboutMeSub>
                <h3>NodeJS</h3>
                <p>
                  I want to be able to write my own backend code with the
                  language im most familiar with and implement server side
                  rendering(NextJS) for faster page loads on top of Gatsby SSR
                  which is already implemented here.
                </p>
              </AboutMeSub>
            </AboutMe>
          </Container>
        </BackgroundBg>
      </section>
      <section>
        <FormBg>
          <Container>
            <Form />
          </Container>
        </FormBg>
      </section>
    </Layouts>
  </React.Fragment>
);

const AboutMe = styled.div`
  display:grid;
  grid-template-columns: 1fr 2fr;
  /* grid-template-rows: 1fr 1fr; */
  grid-row-gap: 5rem;
  color: #000;

  img {
    border-radius: 10px;
  }

  h3 {
    margin-bottom: 1rem;
  }

  h2, h3 {
    color: rgb(61, 21, 95);
  }
  

  p {
    margin: 0;
    margin-bottom 2rem;
    text-align: justify;
  }

  @media(max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 3rem;
  }

  @media(max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 3rem;
    text-align: center;

    h2 {
      margin: 0;
      
      &::after {
        content: '';
        left: 50%;
        height: 2px;
        transform: translate(-50%, 5rem);
      }
    }

    img {
      margin auto;
    }

    p {
      text-align: center;
    }
  }
`;

const BackgroundBg = styled.div`
  background-color: #fff;
`;

const FormBg = styled.div`
  background-color: #000315;

  form {
    width: 500px;
  }

  input,
  textarea,
  label {
    ::placeholder {
      font-size: 2rem;
    }
    font-size: 2rem;
    line-height: 2rem;
  }
  button {
    font-size: 1.5rem;
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    form {
      width: 100%;
    }
  }
`;

const AboutMeSub = styled.div`
  display: grid;
`;

const HeadingWrapper = styled.div`
  h2 {
    margin-bottom: 5rem;
  }
  img {
    height: 60px;
    object-fit: contain;
    margin: 10px;
  }
`;
