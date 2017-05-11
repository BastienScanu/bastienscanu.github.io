import {Collapse} from 'react-collapse';
import React, {PropTypes, Component} from 'react';
import {translate} from 'react-i18next';
import data from '../../../locales/fr/skills.json';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import FontAwesome from 'react-fontawesome';

class MainSkill extends Component {
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
        <div className={`skillHeader ${className}`} style={style} onClick={this.props.handler}>
          <div>
            <FontAwesome name={t(`skills:${this.props.name}.icon`)}/>
            {t(`skills:${this.props.name}.title`)}
          </div>
          <FontIcon className="material-icons expand">{this.props.isOpened ? 'expand_less' : 'expand_more'}</FontIcon>
        </div>
        <Collapse isOpened={this.props.isOpened}>
          <div className="col-xs col-sm col-md col-lg">
            <p>
              {t(`skills:${this.props.name}.desc`)}
            </p>
          </div>
          <Divider/>
          <div className="col-xs col-sm col-md col-lg">
            <ul className="row">
            {technos.map(techno => {
              return (
                <li className="tag" key={techno}>{techno}</li>
              );
            })}
            </ul>
          </div>
        </Collapse>
      </div>
    );
  }
}

MainSkill.propTypes = {
  t: PropTypes.func,
  name: PropTypes.string,
  isOpened: PropTypes.bool,
  handler: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(MainSkill);
