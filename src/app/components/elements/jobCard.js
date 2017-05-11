import React, {PropTypes} from 'react';
import {translate} from 'react-i18next';
import FontIcon from 'material-ui/FontIcon';
import {Collapse} from 'react-collapse';
import Divider from 'material-ui/Divider';

const JobCard = React.createClass({

  getInitialState() {
    return {
      seeDetails: false
    };
  },

  handleCLickMore() {
    this.setState(state => {
      return {seeDetails: !state.seeDetails};
    });
  },

  subTitles() {
    const {t} = this.props;
    return t(`experience:${this.props.name}.type`) === "work" ?
    {
      type: t('experience:company'),
      mission: t('experience:mission')
    } :
    {
      type: t('experience:school'),
      mission: t('experience:course')
    };
  },

  render() {
    const {t} = this.props;
    return (
      <div className="jobCard">
        <div className="cardHeader" onClick={this.handleCLickMore}>
          <div>
            <h1>{t(`experience:${this.props.name}.company`)}</h1>
            <h2>{t(`experience:${this.props.name}.job`)}</h2>
          </div>
          <div className="cardHeaderIcon">
            <FontIcon className="material-icons">{t(`experience:${this.props.name}.type`)}</FontIcon>
          </div>
        </div>
        <div className="cardDetails">
          <Collapse isOpened={this.state.seeDetails}>
            <h1>{this.subTitles().type}</h1>
            <p>{t(`experience:${this.props.name}.desc`)}</p>
            <br/>
            <h1>{this.subTitles().mission}</h1>
            <p>{t(`experience:${this.props.name}.mission`)}</p>
            <Divider style={{marginTop: 15, marginBottom: 5}}/>
            <div className="row cardLinks">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <a href={t(`experience:${this.props.name}.maps`)} target="_blank">
                  <FontIcon className="material-icons">room</FontIcon> {t(`experience:${this.props.name}.location`)}
                </a>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <a href={t(`experience:${this.props.name}.website`)} target="_blank">
                  <FontIcon className="material-icons">language</FontIcon> {t(`experience:website`)}
                </a>
              </div>
            </div>
          </Collapse>
          <div className="seeMore" onClick={this.handleCLickMore}>
            <FontIcon className="material-icons">{this.state.seeDetails ? "keyboard_arrow_up" : "keyboard_arrow_down"}</FontIcon>
          </div>
        </div>
        <div className="cardMedia">
          <img src={`images/exp/${this.props.name}.png`} alt={t(`experience:${this.props.name}.company`)}/>
          <div className="overlay">
            <p>{t(`experience:${this.props.name}.date`)}</p>
          </div>
        </div>
      </div>
    );
  },

  propTypes: {
    t: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string
  }
});

export default translate(["common", "experience"], {wait: true})(JobCard);
