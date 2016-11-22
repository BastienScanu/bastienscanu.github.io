import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';

class About extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div id="profilePic" className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
            </div>
            <p className="col-xs-12 col-sm-9 col-md-10 col-lg-10">{t('about:pitch')}</p>
          </div>
        </div>
      </section>
    );
  }
}

About.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "about"], {wait: true})(About);
