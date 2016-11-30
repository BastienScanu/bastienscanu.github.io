import React, {Component, PropTypes} from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import {translate} from 'react-i18next';

export class Techno extends Component {
  render() {
    const {t} = this.props;
    return (
      <Chip style={{margin: 4}}>
        <Avatar size={32}>{this.props.avatar}</Avatar>
          {t(`skills:technos.${this.props.text}`)}
      </Chip>
    );
  }
}

Techno.propTypes = {
  t: PropTypes.func,
  avatar: PropTypes.string,
  text: PropTypes.string
};

export default translate(["common", "skills"], {wait: true})(Techno);
