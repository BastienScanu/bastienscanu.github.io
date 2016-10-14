import React, {Component} from 'react';
import {Header} from './components/header';
import {Home} from './components/home';
import {Title} from './components/title';
import {Techs} from './components/techs/techs';
import {MyFooter} from './components/footer';
import {VideoContainer} from './components/videocontainer';

export class Main extends Component {
  render() {
    return (
      <div className="containerAll">
        <Header/>
        <main>
          <VideoContainer
            mp4="https://s3-us-west-2.amazonaws.com/coverr/mp4/Aloha-Mundo.mp4"
            webm="https://s3-us-west-2.amazonaws.com/coverr/webm/Aloha-Mundo.webm"
            >
            <Home/>
          </VideoContainer>
          <Title/>
          <Techs/>
        </main>
        <MyFooter/>
      </div>
    );
  }
}
