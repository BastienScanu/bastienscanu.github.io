import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

class About extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div id="profilePicCol" className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
              <div id="profilePic" className="row">
              </div>
              <div className="row">
                <RaisedButton
                  className="resumeButton"
                  label={t('about:cv')}
                  primary
                  href="http://bastien-scanu.com/CV.pdf"
                  icon={<FontIcon className="material-icons" color="white">cloud_download</FontIcon>}
                  target="_blank"
                  />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
              <p>{t('about:pitch')}</p>
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
