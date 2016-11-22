import React, {PropTypes} from 'react';
import {Logo} from './logo';
import i18n from 'i18next';
const Scrollspy = require('react-scrollspy').Scrollspy;
import {translate} from 'react-i18next';
import FontIcon from 'material-ui/FontIcon';
import {lightGreen50} from 'material-ui/styles/colors';

const Header = React.createClass({
  getInitialState() {
    return {
      openedMenu: false
    };
  },

  handleClickEn() {
    i18n.changeLanguage("en");
  },

  handleClickFr() {
    i18n.changeLanguage("fr");
  },

  handleClickMenu() {
    this.setState(state => {
      return {openedMenu: !state.openedMenu};
    });
  },

  dynamicClass() {
    return `header${this.state.openedMenu ? "Mobile" : ""}`;
  },

  render() {
    const {t} = this.props;
    return (
      <header className={this.dynamicClass()}>
        <div className="container">
          <div className="showMenu">
            <FontIcon onClick={this.handleClickMenu} className="material-icons" color={lightGreen50}>menu</FontIcon>
          </div>
          <Logo size={32} big/>
          <Scrollspy items={['home', 'about', 'skills', 'experience', 'contact']} currentClassName="current-menu" className="navBar">
            <li><a href="#home">{t('header:home')}</a></li>
            <li><a href="#about">{t('header:about')}</a></li>
            <li><a href="#skills">{t('header:skills')}</a></li>
            <li><a href="#experience">{t('header:experience')}</a></li>
            <li><a href="#contact">{t('header:contact')}</a></li>
          </Scrollspy>
          <ul className="langs">
            <li onClick={this.handleClickEn}>EN</li>
            <li onClick={this.handleClickFr}>FR</li>
          </ul>
        </div>
      </header>

    );
  },

  propTypes: {
    t: PropTypes.func
  }
});

export default translate(["common", "header"], {wait: true})(Header);
