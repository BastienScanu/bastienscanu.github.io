import {Collapse} from 'react-collapse';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import data from '../../../locales/fr/skills.json';
import FontIcon from 'material-ui/FontIcon';
import FontAwesome from 'react-fontawesome';

class MainSkill extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handler(this.props.index);
  }

  render() {
    const {t} = this.props;
    const style = this.props.isOpened ?
    {
      backgroundColor: t(`skills:${this.props.name}.color`),
      color: "#FFFFFF"
    } :
    {};
    const technos = data[this.props.name].technos;
    const className = t(`skills:${this.props.name}.theme`);
    return (
      <div>
        <div className={`skillHeader ${className}`} style={style} onClick={this.handleClick}>
          <div>
            <FontAwesome name={t(`skills:${this.props.name}.icon`)}/>
            {t(`skills:${this.props.name}.title`)}
          </div>
          <FontIcon className="material-icons expand">{this.props.isOpened ? 'expand_less' : 'expand_more'}</FontIcon>
        </div>
        <Collapse isOpened={this.props.isOpened}>
          <div className="margin"></div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <ul className="row">
              {technos.map(techno => {
                return (
                  <li className={techno.important ? "tag importantTag" : "tag"} key={techno.name}>{techno.name}</li>
                );
              })}
              </ul>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <p>
                {t(`skills:${this.props.name}.desc`)}
              </p>
            </div>
          </div>
          <div className="margin"></div>
        </Collapse>
      </div>
    );
  }
}

MainSkill.propTypes = {
  t: PropTypes.func,
  name: PropTypes.string,
  index: PropTypes.number,
  isOpened: PropTypes.bool,
  handler: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(MainSkill);
