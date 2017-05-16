import React, {Component, PropTypes} from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class CircularProgressBar extends Component {
  render() {
    const text = () => this.props.text;
    const className = () => this.props.class;
    return (
      <CircularProgressbar
        percentage={this.props.percentage}
        initialAnimation strokeWidth={7}
        textForPercentage={text}
        classForPercentage={className}
        />
    );
  }
}

CircularProgressBar.propTypes = {
  text: PropTypes.string,
  class: PropTypes.string,
  percentage: PropTypes.number
};

export default CircularProgressBar;
