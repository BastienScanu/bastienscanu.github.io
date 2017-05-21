import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';

class DesignChart extends Component {
  constructor(props) {
    super(props);
    this.images = ["sweat", "dynergie", "mineur", "kata"];
    this.state = {
      image: 0,
      play: true
    };
  }

  componentWillUnmount() {
    this.state = {
      play: false
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.play) {
        this.setState({
          image: (this.state.image + 1) % this.images.length
        });
      }
    }, 2500);
  }

  render() {
    return (
      <div id="designCarousel" className={this.images[this.state.image]}>
      </div>
    );
  }
}

DesignChart.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(DesignChart);
