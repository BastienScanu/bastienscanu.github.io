import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import {Radar} from 'react-chartjs-2';

const radarData = {
  labels: ["design", "frontend", "backend", "database", "os"],
  datasets: [
    {
      label: "Full Stack Developper",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [65, 59, 90, 81, 55]
    }
  ]
};

const radarOptions = {
  scale: {
    ticks: {
      display: false,
      min: 0
    }
  }
};

class SkillsRadar extends Component {
  render() {
    return (
      <Radar data={radarData} options={radarOptions}/>
    );
  }
}

SkillsRadar.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(SkillsRadar);
