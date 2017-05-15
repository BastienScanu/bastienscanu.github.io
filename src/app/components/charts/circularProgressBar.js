import React, {Component, PropTypes} from 'react';
import CircularProgressbar from 'react-circular-progressbar';

class CircularProgressBar extends Component {
  render() {
    const text = () => this.props.text;
    const className = () => this.props.class;
    return (
      <CircularProgressbar
        percentage={this.props.percentage}
        initialAnimation strokeWidth={5}
        textForPercentage={text}
        classForPercentage={className}
        />
    );
  }
}

CircularProgressBar.propTypes = {
  text: PropTypes.text,
  class: PropTypes.text,
  percentage: PropTypes.number
};

export default CircularProgressBar;
