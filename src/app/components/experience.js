import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';
import JobCard from './jobCard';

class Experience extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="experience">
        <div className="container">
          <h1>{t('experience:title')}</h1>
          <JobCard name="umi"/>
        </div>
      </section>
    );
  }
}

Experience.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "experience"], {wait: true})(Experience);
