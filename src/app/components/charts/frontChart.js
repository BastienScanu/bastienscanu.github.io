import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';

class FrontChart extends Component {
  render() {
    return (
      <h3>Front-End !</h3>
    );
  }
}

FrontChart.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(FrontChart);
