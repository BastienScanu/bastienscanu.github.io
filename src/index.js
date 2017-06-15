import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n'; // initialized i18next instance

import {Main} from './app/main';
import './app/style/main.scss';

injectTapEventPlugin();
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Main/>
  </I18nextProvider>,
  document.getElementById('root')
);
