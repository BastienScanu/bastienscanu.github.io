import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';
import Vivus from 'vivus';

class Technos extends Component {
  componentDidMount() {
    return new Vivus(
      'laptop',
      {
        duration: 80,
        type: "sync",
        reverseStack: true,
        animTimingFunction: Vivus.EASE
      },
      () => {
        document.getElementById('side').className += " laptopPng";
      }
    );
  }
  render() {
    const {t} = this.props;
    return (
      <section id="technos">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8">
              <h3>{t('technos:title')}</h3>
            </div>
            <div id="side" className="col-lg-4 col-md-4 col-sm-4">
              <object id="laptop" type="image/svg+xml" data="../../images/layout/laptop.svg"></object>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Technos.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "technos"], {wait: true})(Technos);
