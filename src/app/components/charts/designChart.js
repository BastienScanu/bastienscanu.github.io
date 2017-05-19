import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';

class DesignChart extends Component {
  render() {
    return (
      <h3>Design !</h3>
    );
  }
}

DesignChart.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(DesignChart);
