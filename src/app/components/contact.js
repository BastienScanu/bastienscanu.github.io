import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {translate} from 'react-i18next';

class Contact extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="contact">
        <div className="container">
          <h1>Contact</h1>
          <div className="row around-xs">
            <TextField hintText={t('contact:name')} name="name" className="col-xs-12 col-sm-6 col-md-6 col-lg-4"/>
            <TextField hintText="Email" name="email" type="email" className="col-xs-12 col-sm-6 col-md-6 col-lg-4"/>
          </div>
          <TextField hintText={t('contact:message')} name="message" multiLine fullWidth/>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "contact"], {wait: true})(Contact);
