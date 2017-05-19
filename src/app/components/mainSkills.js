import React, {Component} from 'react';
import MainSkill from './elements/mainSkill';
import {translate} from 'react-i18next';
import SkillsRadar from './charts/skillsRadar';
import DesignChart from './charts/designChart';
import FrontChart from './charts/frontChart';
import BackChart from './charts/backChart';
import DatabaseChart from './charts/databaseChart';
import OsChart from './charts/osChart';

class MainSkills extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.getChart = this.getChart.bind(this);
    this.state = {openedMenu: -1};
  }

  updateState(index) {
    this.setState(state => {
      if (state.openedMenu === index) {
        return {openedMenu: -1};
      }
      return {openedMenu: index};
    });
  }

  getChart() {
    switch (this.state.openedMenu) {
      case 0: return <DesignChart/>;
      case 1: return <FrontChart/>;
      case 2: return <BackChart/>;
      case 3: return <DatabaseChart/>;
      case 4: return <OsChart/>;
      default: return <SkillsRadar/>;
    }
  }

  render() {
    const skills = [
      "design", "front", "back", "database", "os"
    ];
    return (
      <div className="row">
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
  }
}

export default translate(["common", "skills"], {wait: true})(MainSkills);
