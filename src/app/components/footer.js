import React, {PropTypes} from 'react';
import {translate} from 'react-i18next';
import FontAwesome from 'react-fontawesome';

const MyFooter = React.createClass({
  getInitialState() {
    return {open: false};
  },

  handleOpen() {
    this.setState({open: true});
  },

  handleClose() {
    this.setState({open: false});
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
          <a href="#close" className="button"></a>
          <div id="titles">
            <div id="titlecontent">
              <p>{t('footer:credits')}</p>
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
