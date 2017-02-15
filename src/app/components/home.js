import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';
import Vivus from 'vivus';

class Home extends Component {
  componentDidMount() {
    return new Vivus(
      'name',
      {
        duration: 200,
        type: "delayed",
        reverseStack: true,
        animTimingFunction: Vivus.EASE
      }
    );
  }
  render() {
    const {t} = this.props;
    return (
      <section id="home">
        <div className="container">
          <object id="name" type="image/svg+xml" data="../../images/name.svg"></object>
          <h2>{t('home:job')}</h2>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "home"], {wait: true})(Home);
