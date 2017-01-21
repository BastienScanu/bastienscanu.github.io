import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import {green500, green300} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';

class Contact extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="contact">
        <div className="container row">
          <div id="smartphone" className="col-lg-3 col-md-3">
            <div id="smartphoneScreen">
              <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  <a href="tel:33618521891" target="_blank">
                    <FontIcon className="material-icons" color={green500} hoverColor={green300}>phone</FontIcon>
                  </a>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                  <h5><a href="tel:33618521891" target="_blank">+33 6 18 52 18 91</a></h5>
                  <h6>{t('contact:mobile')}</h6>
                  <Divider/>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  <a href="mailto:bastien-scanu@gmail.com" target="_blank">
                    <FontIcon className="material-icons" color={green500} hoverColor={green300}>mail</FontIcon>
                  </a>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                  <h5><a href="mailto:bastien-scanu@gmail.com" target="_blank">bastien.scanu@gmail.com</a></h5>
                  <h6>{t('contact:personal')}</h6>
                  <Divider/>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  <FontIcon className="material-icons" color={green500} hoverColor={green300}>place</FontIcon>
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                  <h5>Lyon, France</h5>
                  <h6>{t('contact:home')}</h6>
                  <Divider/>
                </div>
              </div>
            </div>
          </div>
          <div id="objects" className="col-lg-9 col-md-9 col-xs-12 col-sm-12">
            <div id="contactForm" className="col-lg-9 col-md-9 col-xs-12 col-sm-12">
              <div>
                <h1>Contact</h1>
                <div className="row">
                  <TextField hintText={t('contact:name')} name="name" className="col-xs-12 col-sm-6 col-md-6 col-lg-6"/>
                  <TextField hintText="Email" name="email" type="email" className="col-xs-12 col-sm-6 col-md-6 col-lg-6"/>
                </div>
                <div className="row">
                  <TextField hintText={t('contact:message')} name="message" multiLine className="col-xs-12 col-sm-12 col-md-12 col-lg-12"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "contact"], {wait: true})(Contact);
