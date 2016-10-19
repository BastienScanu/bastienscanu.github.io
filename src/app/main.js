import React, {Component} from 'react';
import {Header} from './components/header';
import {Home} from './components/home';
import {MyFooter} from './components/footer';
import {Experience} from './components/experience';
import {Contact} from './components/contact';
import {Skills} from './components/skills';
import {About} from './components/about';
import {VideoContainer} from './components/videocontainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green500, green600, green700, red500} from 'material-ui/styles/colors';

const greenTheme = getMuiTheme({
  palette: {
    primary1Color: green600,
    primary2Color: green700,
    accent1Color: red500,
    pickerHeaderColor: green500
  }
});

export class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(greenTheme)}>
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
      </MuiThemeProvider>
    );
  }
}
