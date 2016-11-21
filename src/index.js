import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green500, green600, green700, red500} from 'material-ui/styles/colors';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n'; // initialized i18next instance

const greenTheme = getMuiTheme({
  palette: {
    primary1Color: green600,
    primary2Color: green700,
    accent1Color: red500,
    pickerHeaderColor: green500
  }
});

import {Main} from './app/main';
import './app/style/main.scss';

// injectTapEventPlugin();
ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(greenTheme)}>
    <I18nextProvider i18n={i18n}>
      <Router history={browserHistory}>
        <Route path="/" component={Main}/>
      </Router>
    </I18nextProvider>
  </MuiThemeProvider>, document.getElementById('root'));
