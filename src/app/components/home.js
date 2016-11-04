import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';

class Home extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="home">
        <div className="container">
          <h1>{t('home:title')}</h1>
          <h2>{t('home:baseline')}</h2>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "home"], {wait: true})(Home);
