import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';

class OsChart extends Component {
  render() {
    return (
      <h3>OS !</h3>
    );
  }
}

OsChart.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(OsChart);