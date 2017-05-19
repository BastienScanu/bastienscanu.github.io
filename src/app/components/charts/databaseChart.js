import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';

class DatabaseChart extends Component {
  render() {
    return (
      <h3>Database !</h3>
    );
  }
}

DatabaseChart.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(DatabaseChart);
