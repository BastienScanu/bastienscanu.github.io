import React, {PropTypes} from 'react';
import MainSkill from './elements/mainSkill';
import {translate} from 'react-i18next';
import SkillsRadar from './charts/skillsRadar';

const MainSkills = React.createClass({

  getInitialState() {
    return {
      openedMenu: -1
    };
  },

  switchdesign() {
    return this.updateState(0);
  },

  switchfront() {
    return this.updateState(1);
  },

  switchback() {
    return this.updateState(2);
  },

  switchdatabase() {
    return this.updateState(3);
  },

  switchos() {
    return this.updateState(4);
  },

  updateState(index) {
    this.setState(state => {
      if (state.openedMenu === index) {
        return {openedMenu: -1};
      }
      return {openedMenu: index};
    });
  },

  render() {
    const {t} = this.props;
    const skills = [
      "design", "front", "back", "database", "os"
    ];
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>{t('skills:web')}</h3>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <SkillsRadar/>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div id="mainSkills">
            {skills.map((skill, index) => {
              return (
                <MainSkill
                  name={skill}
                  key={index}
                  handler={this[`switch${skill}`]}
                  isOpened={this.state.openedMenu === index}
                  />
              );
            })
            }
          </div>
        </div>
      </div>
    );
  },
  propTypes: {
    t: PropTypes.func
  }
});

export default translate(["common", "skills"], {wait: true})(MainSkills);
