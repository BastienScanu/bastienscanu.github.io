import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';

class About extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="about">
        <div className="container">
          <img
            src="../../images/profile.png"
            alt="Bastien Scanu"
            id="profilePic"
            className="col-xs-12 col-sm-8 col-md-4 col-lg-3"
            />
          <div id="profilePic"></div>
          <h1>About</h1>
          <h2>{t('about:test')}</h2>
        </div>
      </section>
    );
  }
}

About.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "about"], {wait: true})(About);
