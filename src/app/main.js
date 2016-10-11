import React, {Component} from 'react';
import {Header} from './components/header';
import {Title} from './components/title';
import {Techs} from './components/techs/techs';
import {Footer} from './components/footer';

export class Main extends Component {
  render() {
    return (
      <div className="containerAll">
        <Header/>
        <main>
          <Title/>
          <Techs/>
        </main>
        <Footer/>
      </div>
    );
  }
}
