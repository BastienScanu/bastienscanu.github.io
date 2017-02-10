import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';

class Skills extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="skills">
        <div id="skillsBg">
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoDev"></div>
                <h5>{t('skills:topSkills.dev.title')}</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoWeb"></div>
                <h5>{t('skills:topSkills.web.title')}</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoAgile"></div>
                <h5>{t('skills:topSkills.agile.title')}</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoCurious"></div>
                <h5>{t('skills:topSkills.curious.title')}</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoCom"></div>
                <h5>{t('skills:topSkills.com.title')}</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoDynamic"></div>
                <h5>{t('skills:topSkills.dynamic.title')}</h5>
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
