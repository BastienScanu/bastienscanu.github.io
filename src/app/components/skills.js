import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';
import MainSkills from './mainSkills';
import Languages from './languages';

class Skills extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="skills">
        <p className="centeredTitle">{t('skills:title')}</p>
        <div className="container">
          <MainSkills/>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div>
                <h4>{t('skills:soft')}</h4>
                <div className="otherSkill">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
            <div id="softPic" className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            </div>
            <div id="languagesPic" className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="otherSkill">
                <Languages/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Skills.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(Skills);
