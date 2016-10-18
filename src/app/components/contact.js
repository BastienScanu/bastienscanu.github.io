import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <h1>Contact</h1>
          <div className="row around-xs">
            <TextField hintText="Name" name="name" className="col-xs-12 col-sm-6 col-md-6 col-lg-4"/>
            <TextField hintText="Email" name="email" type="email" className="col-xs-12 col-sm-6 col-md-6 col-lg-4"/>
          </div>
          <TextField hintText="Your message" name="message" multiLine fullWidth/>
        </div>
      </section>
    );
  }
}
