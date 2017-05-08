import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';
import TimeLine from './timeline';

class Experience extends Component {

  render() {
    const {t} = this.props;
    return (
      <section id="experience">
        <p className="centeredTitle">{t('experience:title')}</p>
        <div className="container">
          <TimeLine
            cards={[
              {
                name: "umi",
                type: "job"
              }, {
                name: "umi2",
                type: "job"
              }, {
                name: "upc",
                type: "school"
              }, {
                name: "mozilla",
                type: "job"
              }, {
                name: "imag",
                type: "school"
              }, {
                name: "stm",
                type: "job"
              }, {
                name: "phelma",
                type: "school"
              }, {
                name: "prepa",
                type: "school"
              }
            ]}
            />
        </div>
      </section>
    );
  }
}

Experience.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "experience"], {wait: true})(Experience);
