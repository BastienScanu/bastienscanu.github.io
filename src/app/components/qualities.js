import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import QualityFocus from './qualityFocus';

class Qualities extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="qualities">
        <div id="qualitiesBg">
        </div>
        <p className="centeredTitle">{t('qualities:title')}</p>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="topSkill" href="#focus">
                <div id="pictoDev"></div>
                <h5>{t('qualities:topSkills.dev.title')}</h5>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="topSkill" href="#focus">
                <div id="pictoWeb"></div>
                <h5>{t('qualities:topSkills.web.title')}</h5>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="topSkill" href="#focus">
                <div id="pictoAgile"></div>
                <h5>{t('qualities:topSkills.agile.title')}</h5>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="topSkill" href="#focus">
                <div id="pictoCurious"></div>
                <h5>{t('qualities:topSkills.curious.title')}</h5>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="topSkill" href="#focus">
                <div id="pictoCom"></div>
                <h5>{t('qualities:topSkills.com.title')}</h5>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="topSkill" href="#focus">
                <div id="pictoDynamic"></div>
                <h5>{t('qualities:topSkills.dynamic.title')}</h5>
              </a>
            </div>
          </div>
        </div>
        <div id="focus">
          <QualityFocus index={0}/>
        </div>
      </section>
    );
  }
}

Qualities.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "qualities"], {wait: true})(Qualities);
