import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';

class BackChart extends Component {
  render() {
    return (
      <h3>Back-End !</h3>
    );
  }
}

BackChart.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(BackChart);
