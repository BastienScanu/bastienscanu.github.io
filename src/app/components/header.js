import React, {Component} from 'react';
import logoUrl from '../../images/logo-white.svg';

export class Header extends Component {
  render() {
    return (
      <header>
        <p className="container">
          <img src={logoUrl} width="24" height="24" alt="Bastien Scanu"/>
          <a href="http://www.bastien-scanu.com" target="_blank">
            Bastien Scanu
          </a>
        </p>
      </header>
    );
  }
}
