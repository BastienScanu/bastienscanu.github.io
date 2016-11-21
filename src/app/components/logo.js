import React, {Component, PropTypes} from 'react';
import logoWhite from '../../images/logo-white.svg';
import logoBigWhite from '../../images/logo-white-big.svg';
import logoGreen from '../../images/logo.svg';

let logo = logoGreen;
export class Logo extends Component {
  render() {
    if (this.props.white) {
      logo = logoWhite;
    }
    if (this.props.big) {
      logo = logoBigWhite;
    }

    return (
      <a href="http://www.bastien-scanu.com" className="logo">
        <img src={logo} height={this.props.size} alt="Bastien Scanu"/>
      </a>
    );
  }
}

Logo.propTypes = {
  size: PropTypes.number,
  big: PropTypes.bool,
  white: PropTypes.bool
};
