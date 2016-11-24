import React, {PropTypes} from 'react';
import {translate} from 'react-i18next';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
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

  dynamicClass() {
    return `col-xs-12 col-sm-5 col-md-4 col-lg-4 jobCard${this.state.seeDetails ? "Details" : ""}`;
  },

  render() {
    const {t} = this.props;
    return (
      <div className={this.dynamicClass()}>
        <Card>
          <div className="cardHeader" onClick={this.handleCLickMore}>
            <div>
              <h1>{t(`experience:${this.props.name}.company`)}</h1>
              <h2>{t(`experience:${this.props.name}.job`)}</h2>
            </div>
            <div className="cardHeaderIcon">
              <FontIcon className="material-icons">more_vert</FontIcon>
            </div>
          </div>
          <div className="cardMedia">
            <CardMedia overlay={<CardTitle title={t(`experience:${this.props.name}.date`)}/>}>
              <img src={"images/umi.png"}/>
            </CardMedia>
          </div>
          <div className="cardDetails">
            <Divider/>
            <h1>{t('experience:company')}</h1>
            <p>{t(`experience:${this.props.name}.desc`)}</p>
            <h1>{t('experience:mission')}</h1>
            <p>{t(`experience:${this.props.name}.mission`)}</p>
          </div>
        </Card>
      </div>
    );
  },

  propTypes: {
    t: PropTypes.func,
    name: PropTypes.string
  }
});

export default translate(["common", "experience"], {wait: true})(JobCard);
