import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';
import TimeLine from './timeline';

class Experience extends Component {

  render() {
    const {t} = this.props;
    return (
      <section id="experience">
        <div className="container">
          <h1>{t('experience:title')}</h1>
          <TimeLine cards={["umi", "umi2", "upc", "mozilla", "imag", "stm", "phelma", "prepa"]} slidesToShow={3}/>
        </div>
      </section>
    );
  }
}

Experience.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "experience"], {wait: true})(Experience);
