import React, {Component, PropTypes} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {translate} from 'react-i18next';
import FontIcon from 'material-ui/FontIcon';
import FontAwesome from 'react-fontawesome';

class ActionButton extends Component {
  render() {
    const {t} = this.props;
    return (
      <div id="actionButton">
        <div className="childButton">
          <label className="tooltip">{t('common:button.linkedin')}</label>
          <a href="https://fr.linkedin.com/in/bastienscanu" target="_blank">
            <FloatingActionButton mini backgroundColor="#0277BD">
              <FontAwesome name="linkedin-square"/>
            </FloatingActionButton>
          </a>
        </div>
        <div className="childButton">
          <label className="tooltip">{t('common:button.mail')}</label>
          <a href="http://bastien-scanu.com/CV.pdf" target="_blank">
            <FloatingActionButton mini backgroundColor="#E62A10">
              <FontIcon className="material-icons">mail</FontIcon>
            </FloatingActionButton>
          </a>
        </div>
        <div className="childButton">
          <label className="tooltip">{t('common:button.resume')}</label>
          <a href="mailto:bastien-scanu@gmail.com" target="_blank">
            <FloatingActionButton mini backgroundColor="#FF9800">
              <FontIcon className="material-icons">description</FontIcon>
            </FloatingActionButton>
          </a>
        </div>
        <div className="mainButton">
          <FloatingActionButton>
            <ContentAdd/>
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

ActionButton.propTypes = {
  t: PropTypes.func
};

export default translate(["common"], {wait: true})(ActionButton);
