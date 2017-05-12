import React, {PropTypes} from 'react';
import MainSkill from './elements/mainSkill';
import {translate} from 'react-i18next';
import SkillsRadar from './charts/skillsRadar';
import DesignChart from './charts/designChart';
import FrontChart from './charts/frontChart';
import BackChart from './charts/backChart';
import DatabaseChart from './charts/databaseChart';
import OsChart from './charts/osChart';

const MainSkills = React.createClass({

  getInitialState() {
    return {
      openedMenu: -1
    };
  },

  updateState(index) {
    this.setState(state => {
      if (state.openedMenu === index) {
        return {openedMenu: -1};
      }
      return {openedMenu: index};
    });
  },

  getChart() {
    switch (this.state.openedMenu) {
      case 0: return <DesignChart/>;
      case 1: return <FrontChart/>;
      case 2: return <BackChart/>;
      case 3: return <DatabaseChart/>;
      case 4: return <OsChart/>;
      default: return <SkillsRadar/>;
    }
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
          {this.getChart()}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div id="mainSkills">
            {skills.map((skill, index) => {
              return (
                <MainSkill
                  name={skill}
                  key={index}
                  handler={this.updateState}
                  index={index}
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
