import React, {Component} from 'react';
import {Logo} from './logo';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <Logo size={48} white/>
          <ul className="navBar">
            <li>Accueil</li>
            <li>Compétences</li>
            <li>Parcours</li>
            <li>Contact</li>
          </ul>
          <ul className="langs">
            <li>EN</li>
            <li>FR</li>
            <li>ES</li>
          </ul>
        </div>
      </header>

    );
  }
}
