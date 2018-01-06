import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';

class Quality extends Component {

  render() {
    const {t} = this.props;
    const style = {
      backgroundColor: this.props.color
    };
    return (
      <div>
        <div style={style}>
            {t(`qualities:topSkills.${this.props.name}.title`)}
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <p>
              {t(`qualities:topSkills.${this.props.name}.text`)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Quality.propTypes = {
  t: PropTypes.func,
  name: PropTypes.string,
  index: PropTypes.number,
  color: PropTypes.string
};

export default translate(["common", "qualities"], {wait: true})(Quality);
