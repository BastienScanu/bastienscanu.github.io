import React, {PropTypes} from 'react';
import FontIcon from 'material-ui/FontIcon';
import JobCard from './jobCard';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const Timeline = React.createClass({
  getInitialState() {
    let slidesToShow = 1;
    if (window.matchMedia("(min-width: 62em)").matches) {
      slidesToShow = 3;
    } else if (window.matchMedia("(min-width: 48em)").matches && window.matchMedia("(max-width: 62em)").matches) {
      slidesToShow = 2;
    }
    return {
      currentSlide: 0,
      slidesToShow
    };
  },

  handleClickLeft() {
    this.setState({currentSlide: (this.state.currentSlide - 1) % this.props.cards.length});
  },

  handleClickRight() {
    this.setState({currentSlide: (this.state.currentSlide + 1) % this.props.cards.length});
  },

  disableClickLeft() {
    return this.state.currentSlide === 0;
  },

  disableClickRight() {
    return this.state.currentSlide >= this.props.cards.length - this.state.slidesToShow;
  },

  render() {
    const self = this;
    return (
      <div>
        <div className="row">
          {this.props.cards.map((card, index) => {
            if (index < self.state.currentSlide + self.state.slidesToShow && index >= self.state.currentSlide) {
              return (
                <div key={card} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <JobCard name={card}/>
                </div>
              );
            }
            return null;
          })
          }
        </div>
        <div className="row arrows">
          <FloatingActionButton onClick={this.handleClickLeft} disabled={this.disableClickLeft()}>
            <FontIcon className="material-icons">keyboard_arrow_left</FontIcon>
          </FloatingActionButton>
          <FloatingActionButton onClick={this.handleClickRight} disabled={this.disableClickRight()}>
            <FontIcon className="material-icons">keyboard_arrow_right</FontIcon>
          </FloatingActionButton>
        </div>
      </div>

    );
  },

  propTypes: {
    t: PropTypes.func,
    cards: PropTypes.arrayOf(React.PropTypes.string)
  }
});

export default Timeline;
