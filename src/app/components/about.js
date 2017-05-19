import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import FontIcon from 'material-ui/FontIcon';

class About extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="aboutMe">
        <div className="container">
          <div className="row">
            <div id="profilePicCol" className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
              <div id="profilePic" className="row">
              </div>
              <div className="row">
                <button
                  className="withIcon"
                  href="http://bastien-scanu.com/CV.pdf"
                  target="_blank"
                  >
                  <FontIcon className="material-icons" color="white">cloud_download</FontIcon>{t('about:cv')}
                </button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
              <p id="pitch">{t('about:pitch')}</p>
            </div>
            <div id="profileLogoCol" className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
            </div>
          </div>
        </div>
      </section>
    );
  }
}

About.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "about"], {wait: true})(About);
