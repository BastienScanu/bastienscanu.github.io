import React, {Component, PropTypes} from 'react';
import logoWhite from '../../images/logo/logo-white.svg';
import logoBigWhite from '../../images/logo/logo-white-big.svg';
import logoBigBlack from '../../images/logo/logo-black-big.svg';
import logoGreen from '../../images/logo/logo.svg';

let logo = logoGreen;
export class Logo extends Component {
  render() {
    if (this.props.white) {
      logo = logoWhite;
    }
    if (this.props.big) {
      if (this.props.white) {
        logo = logoBigWhite;
      } else {
        logo = logoBigBlack;
      }
    }

    const className = this.props.big ? (this.props.white ? "logoWhite" : "logoBlack") : "";

    return (
      <a href="http://www.bastien-scanu.com" className={className}>
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
