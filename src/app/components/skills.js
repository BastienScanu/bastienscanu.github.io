import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';

class Skills extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="skills">
        <div className="container">
          <h1>{t('skills:title')}</h1>
          <h2>{t('skills:baseline')}</h2>
        </div>
      </section>
    );
  }
}

Skills.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(Skills);
