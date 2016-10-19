import React, {Component} from 'react';

export class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <img
            src="../../images/profile.png"
            alt="Bastien Scanu"
            id="profilePic"
            className="col-xs-12 col-sm-8 col-md-4 col-lg-3"
            />
          <div id="profilePic"></div>
          <h1>About</h1>
          <h2>Coucou c'est moi !</h2>
        </div>
      </section>
    );
  }
}
