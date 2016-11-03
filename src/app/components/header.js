import React, {Component} from 'react';
import {Logo} from './logo';
import i18n from 'i18next';
const Scrollspy = require('react-scrollspy').Scrollspy;

export class Header extends Component {
  handleClickEn() {
    i18n.changeLanguage("en");
  }

  handleClickFr() {
    i18n.changeLanguage("fr");
  }

  render() {
    return (
      <header>
        <div className="container">
          <Logo size={48} white/>
          <Scrollspy items={['home', 'about', 'skills', 'experience', 'contact']} currentClassName="current-menu" className="navBar">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#experience">Parcours</a></li>
            <li><a href="#contact">Contact</a></li>
          </Scrollspy>
          <ul className="langs">
            <li onClick={this.handleClickEn}>EN</li>
            <li onClick={this.handleClickFr}>FR</li>
          </ul>
        </div>
      </header>

    );
  }
}
