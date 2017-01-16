import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';
import Techno from './techno';

class Skills extends Component {
  render() {
    const {t} = this.props;
    const technos = [
      {
        key: "angular",
        avatar: "A"
      },
      {
        key: "react",
        avatar: "R"
      },
      {
        key: "nodejs",
        avatar: "N"
      },
      {
        key: "mongo",
        avatar: "M"
      },
      {
        key: "express",
        avatar: "E"
      },
      {
        key: "es6",
        avatar: "ES"
      },
      {
        key: "docker",
        avatar: "D"
      },
      {
        key: "html",
        avatar: "H"
      },
      {
        key: "css",
        avatar: "CSS"
      },
      {
        key: "php",
        avatar: "P"
      },
      {
        key: "sql",
        avatar: "S"
      },
      {
        key: "java",
        avatar: "J"
      },
      {
        key: "c",
        avatar: "C"
      },
      {
        key: "git",
        avatar: "G"
      },
      {
        key: "scrum",
        avatar: "S"
      },
      {
        key: "machine",
        avatar: "ML"
      },
      {
        key: "socket",
        avatar: "S"
      }
    ];
    return (
      <section id="skills">
        <div className="container">
          <h1>{t('skills:title')}</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoDev"></div>
                <h5>{t('skills:topSkills.dev.title')}</h5>
                <p>{t('skills:topSkills.dev.text')}</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoWeb"></div>
                <h5>{t('skills:topSkills.web.title')}</h5>
                <p>{t('skills:topSkills.web.text')}</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoAgile"></div>
                <h5>{t('skills:topSkills.agile.title')}</h5>
                <p>{t('skills:topSkills.agile.text')}</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoCurious"></div>
                <h5>{t('skills:topSkills.curious.title')}</h5>
                <p>{t('skills:topSkills.curious.text')}</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoCom"></div>
                <h5>{t('skills:topSkills.com.title')}</h5>
                <p>{t('skills:topSkills.com.text')}</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="topSkill">
                <div id="pictoPassion"></div>
                <h5>{t('skills:topSkills.passion.title')}</h5>
                <p>{t('skills:topSkills.passion.text')}</p>
              </div>
            </div>
          </div>
          <div id="technos">
            {technos.map(tech => {
              return <Techno avatar={tech.avatar} key={tech.key} text={tech.key}/>;
            })}
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
