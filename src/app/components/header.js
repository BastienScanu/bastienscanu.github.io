import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Logo} from './logo';
import i18n from 'i18next';
import Scroll from 'react-scroll';
const Link = Scroll.Link;
import {translate} from 'react-i18next';
import FontIcon from 'material-ui/FontIcon';
import {lightGreen50} from 'material-ui/styles/colors';

class Header extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClickEn = this.handleClickEn.bind(this);
    this.handleClickFr = this.handleClickFr.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.dynamicClass = this.dynamicClass.bind(this);
    this.state = {openedMenu: false};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (document.body.scrollTop > window.innerHeight / 2 - 50 || document.documentElement.scrollTop > window.innerHeight / 2 - 50) {
      document.getElementById("header").className = `${this.dynamicClass()} green`;
    } else {
      document.getElementById("header").className = this.dynamicClass();
    }
  }

  handleClickEn() {
    i18n.changeLanguage("en");
  }

  handleClickFr() {
    i18n.changeLanguage("fr");
  }

  handleClickMenu() {
    this.setState(state => {
      return {openedMenu: !state.openedMenu};
    });
  }

  dynamicClass() {
    return `header${this.state.openedMenu ? "Mobile" : ""}`;
  }

  render() {
    const {t} = this.props;
    return (
      <header id="header" className={this.dynamicClass()}>
        <div className="container">
          <div className="showMenu">
            <FontIcon onClick={this.handleClickMenu} className="material-icons" color={lightGreen50}>menu</FontIcon>
          </div>
          <Logo size={32} big white/>
          <ul className="navBar">
            <li>
              <Link activeClass="current-menu" to="home" spy smooth duration={500}>{t('header:home')}</Link>
            </li>
            <li>
              <Link activeClass="current-menu" to="about" spy smooth duration={500} offset={-110}>{t('header:about')}</Link>
            </li>
            <li>
              <Link activeClass="current-menu" to="skills" spy smooth duration={500} offset={-90}>{t('header:skills')}</Link>
            </li>
            <li>
              <Link activeClass="current-menu" to="experience" spy smooth duration={500} offset={-90}>{t('header:experience')}</Link>
            </li>
            <li>
              <Link activeClass="current-menu" to="contact" spy smooth duration={500}>{t('header:contact')}</Link>
            </li>
          </ul>
          <ul className="langs">
            <li onClick={this.handleClickEn}>EN</li>
            <li onClick={this.handleClickFr}>FR</li>
          </ul>
        </div>
      </header>

    );
  }
}

Header.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "header"], {wait: true})(Header);
