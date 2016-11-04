import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';

class MyFooter extends Component {
  render() {
    const {t} = this.props;
    return (
      <div>
        <p>{t('footer:copyright')}</p>
      </div>
    );
  }
}

MyFooter.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "footer"], {wait: true})(MyFooter);
