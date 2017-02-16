import React, {PropTypes} from 'react';
import {translate} from 'react-i18next';
import FontAwesome from 'react-fontawesome';
import Luke from '../../images/icons/luke-saber.svg';
import Vader from '../../images/icons/vader-saber.svg';

const MyFooter = React.createClass({

  getInitialState() {
    return {scroll: true};
  },

  handleClick() {
    this.setState({scroll: !this.state.scroll});
    setTimeout(
      () => {
        this.setState({scroll: !this.state.scroll});
      },
      10
    );
  },

  dynamicClass() {
    return this.state.scroll ? "scroll" : "noscroll";
  },

  render() {
    const {t} = this.props;
    return (
      <footer>
        <div className="container">
          <div className="row around-xs">
            <div>
              <p><a href="#starWars">{t('footer:about')}</a></p>
            </div>
            <div>
              <p>{t('footer:copyright')}</p>
            </div>
            <div>
              <p className="icons">
                <a href="https://fr.linkedin.com/in/bastienscanu" target="_blank" title={t('footer:linkedin')}><FontAwesome name="linkedin-square"/></a>
                <a href="https://github.com/BastienScanu" target="_blank" title={t('footer:github')}><FontAwesome name="github"/></a>
              </p>
            </div>
          </div>
        </div>
        <div id="starWars">
          <div id="starWarsTop">
            <div id="starWarsTitle">
              <h4>{t('footer:about')}</h4>
            </div>
            <div className="menu">
              <a onClick={this.handleClick}>
                <img id="luke" src={Luke} width="64px" height="64px" alt={t('footer:replay')}/><br/>
                {t('footer:replay')}
              </a>
              <a href="#close">
                <img id="vader" src={Vader} width="64px" height="64px" alt={t('footer:close')}/><br/>
                {t('footer:close')}
              </a>
            </div>
          </div>
          <div id="titles">
            <div id="titlecontent">
              <p className={this.dynamicClass()}>{t('footer:credits')}</p>
            </div>
          </div>
        </div>
      </footer>
    );
  },

  propTypes: {
    t: PropTypes.func
  }
});

export default translate(["common", "footer"], {wait: true})(MyFooter);
