import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Quality from './elements/quality';
import {translate} from 'react-i18next';

class QualityFocus extends Component {
  constructor() {
    super();
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.state = {
      index: 0
    };
  }

  handlePrev() {
    this.setState(state => {
      return {index: (state.index - 1) % 6};
    });
  }

  handleNext() {
    this.setState(state => {
      return {index: (state.index + 1) % 6};
    });
  }

  render() {
    const {t} = this.props;
    return (
      <div className="modalContent">
        <div className="row">
          <div onClick={this.handlePrev}>
            Prec
          </div>
          <Quality name="dev" color="#2BAF2B" index={0}/>
          <div onClick={this.handleNext}>
            Suiv
          </div>
        </div>
        <div className="row">
          <button>
            <a href="#close"> {t('common:close')} </a>
          </button>
        </div>
      </div>
    );
  }
}

QualityFocus.propTypes = {
  t: PropTypes.func,
  index: PropTypes.number
};

export default translate(["common", "qualities"], {wait: true})(QualityFocus);
