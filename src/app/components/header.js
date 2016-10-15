import React, {Component} from 'react';
import {Logo} from './logo';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <Logo size={48} white/>
          <ul className="navBar">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#experience">Parcours</a></li>
            <li><a href="#contact">Contact</a></li>
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
