import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';
import MainSkills from './mainSkills';

class Skills extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="skills">
        <div className="container">
          <h3>{t('skills:title')}</h3>
          <MainSkills/>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="stat">
                <h4>{t('skills:soft')}</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="stat">
                <h4>{t('skills:languages')}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Skills.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(Skills);
