import React, {Component} from 'react';
import {Header} from './components/header';
import {Home} from './components/home';
import {MyFooter} from './components/footer';
import {Experience} from './components/experience';
import {Contact} from './components/contact';
import {Skills} from './components/skills';
import {About} from './components/about';
import {VideoContainer} from './components/videocontainer';

export class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <VideoContainer mp4="https://s3-us-west-2.amazonaws.com/coverr/mp4/Aloha-Mundo.mp4" webm="https://s3-us-west-2.amazonaws.com/coverr/webm/Aloha-Mundo.webm">
          <Home/>
        </VideoContainer>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
        <MyFooter/>
      </div>
    );
  }
}
