import React, {PropTypes} from 'react';
import {Logo} from './logo';
import i18n from 'i18next';
import Scroll from 'react-scroll';
const Link = Scroll.Link;
import {translate} from 'react-i18next';
import FontIcon from 'material-ui/FontIcon';
import {lightGreen50} from 'material-ui/styles/colors';

const Header = React.createClass({
  getInitialState() {
    return {
      openedMenu: false
    };
  },

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll() {
    if (document.body.scrollTop > window.innerHeight / 2 - 50 || document.documentElement.scrollTop > window.innerHeight / 2 - 50) {
      document.getElementById("header").className = `${this.dynamicClass()} green`;
    } else {
      document.getElementById("header").className = this.dynamicClass();
    }
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
              <Link activeClass="current-menu" to="skills" spy smooth duration={500}>{t('header:skills')}</Link>
            </li>
            <li>
              <Link activeClass="current-menu" to="experience" spy smooth offset={-90} duration={500}>{t('header:experience')}</Link>
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
  },

  propTypes: {
    t: PropTypes.func
  }
});

export default translate(["common", "header"], {wait: true})(Header);
