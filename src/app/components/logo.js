import React, {Component, PropTypes} from 'react';
import logoWhite from '../../images/logo-white.svg';
import logoGreen from '../../images/logo.svg';

let logo = logoGreen;
export class Logo extends Component {
  render() {
    if (this.props.white) {
      logo = logoWhite;
    }

    return (
      <a href="http://www.bastien-scanu.com">
        <img src={logo} width={this.props.size} height={this.props.size} alt="Bastien Scanu"/>
      </a>
    );
  }
}

Logo.propTypes = {
  size: PropTypes.number,
  white: PropTypes.bool
};
