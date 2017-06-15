import React, {Component} from 'react';
import PropTypes from 'prop-types';
import JobCard from './elements/jobCard';
import Toggle from 'react-toggle';

class Timeline extends Component {
  constructor() {
    super();
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.disableClickLeft = this.disableClickLeft.bind(this);
    this.disableClickRight = this.disableClickRight.bind(this);
    this.classLeft = this.classLeft.bind(this);
    this.classRight = this.classRight.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.handleChangeJob = this.handleChangeJob.bind(this);
    this.handleGoToCard = this.handleGoToCard.bind(this);

    let slidesToShow = 1;
    if (window.matchMedia("(min-width: 62em)").matches) {
      slidesToShow = 3;
    } else if (window.matchMedia("(min-width: 48em)").matches && window.matchMedia("(max-width: 62em)").matches) {
      slidesToShow = 2;
    }
    this.state = {
      currentSlide: 0,
      slidesToShow,
      school: true,
      job: true
    };
  }

  handleClickLeft() {
    this.setState({currentSlide: (this.state.currentSlide - 1)});
  }

  handleClickRight() {
    this.setState({currentSlide: (this.state.currentSlide + 1)});
  }

  disableClickLeft(cards) {
    return this.state.currentSlide === 0 || cards.length === 0;
  }

  disableClickRight(cards) {
    return this.state.currentSlide >= cards.length - this.state.slidesToShow;
  }

  classLeft(cards) {
    return `bigButton green${this.disableClickLeft(cards) ? ' disabled' : ''}`;
  }

  classRight(cards) {
    return `bigButton green${this.disableClickRight(cards) ? ' disabled' : ''}`;
  }

  handleChangeSchool() {
    this.setState({currentSlide: 0});
    this.setState({school: !this.state.school});
  }

  handleChangeJob() {
    this.setState({currentSlide: 0});
    this.setState({job: !this.state.job});
  }

  handleGoToCard(event) {
    this.setState({currentSlide: parseInt(event.target.innerText, 10)});
  }

  render() {
    const cards = [];
    this.props.cards.forEach(card => {
      if (this.state[card.type]) {
        cards.push(card);
      }
    });
    const self = this;
    return (
      <div>
        <div className="timelineSettings">
          <div className="buttons">
            <div>
              <Toggle
                defaultChecked={this.state.school}
                icons={{
                  checked: <i className="material-icons">school</i>,
                  unchecked: <i className="material-icons">school</i>
                }}
                onChange={this.handleChangeSchool}
                />
              <Toggle
                defaultChecked={this.state.job}
                icons={{
                  checked: <i className="material-icons">work</i>,
                  unchecked: <i className="material-icons">work</i>
                }}
                onChange={this.handleChangeJob}
                />
            </div>
          </div>
        </div>
        <div className="row">
          {cards.map((card, index) => {
            if (index < self.state.currentSlide + self.state.slidesToShow && index >= self.state.currentSlide) {
              return (
                <div key={card.name} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <JobCard name={card.name}/>
                </div>
              );
            }
            return null;
          })
          }
        </div>
        <div className="timelineCircles">
          <ul>
            {cards.map((card, index) => {
              if (index === self.state.currentSlide) {
                return (
                  <li key={index} className="selectedDot" onClick={this.handleGoToCard}><span>{index}</span></li>
                );
              }
              return (
                <li key={index} onClick={this.handleGoToCard}><span>{index}</span></li>
              );
            })
            }
          </ul>
        </div>
        <div className="row arrows">
          <button className={this.classLeft(cards)} onClick={this.handleClickLeft} disabled={this.disableClickLeft(cards)}>
            <i className="material-icons">keyboard_arrow_left</i>
          </button>
          <button className={this.classRight(cards)} onClick={this.handleClickRight} disabled={this.disableClickRight(cards)}>
            <i className="material-icons">keyboard_arrow_right</i>
          </button>
        </div>
      </div>
    );
  }
}

Timeline.propTypes = {
  t: PropTypes.func,
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default Timeline;
