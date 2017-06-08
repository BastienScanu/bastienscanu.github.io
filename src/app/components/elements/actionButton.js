import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {translate} from 'react-i18next';
import FontIcon from 'material-ui/FontIcon';
import FontAwesome from 'react-fontawesome';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {spring, Motion} from 'react-motion';

class ActionButton extends Component {
  constructor() {
    super();
    this.initialPosition = this.initialPosition.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.state = {isOpen: false};
  }

  initialPosition(childIndex) {
    return {
      bottom: spring(-55 - 40 * childIndex)
    };
  }

  handleMouseOver() {
    this.setState({
      isOpen: true
    });
  }

  handleMouseOut() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    const {t} = this.props;
    const {isOpen} = this.state;
    const finalPosition = {
      bottom: spring(0)
    };
    return (
      <div id="actionButton" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <Motion style={isOpen ? finalPosition : this.initialPosition(2)}>
          {({bottom}) =>
            <div className="buttonLabel" style={{bottom}}>
              <label className="tooltip">{t('common:button.linkedin')}</label>
              <div className="smallButton blue">
                <a href="https://fr.linkedin.com/in/bastienscanu" target="_blank">
                  <FontAwesome name="linkedin-square"/>
                </a>
              </div>
            </div>
          }
        </Motion>
        <Motion style={isOpen ? finalPosition : this.initialPosition(1)}>
          {({bottom}) =>
            <div className="buttonLabel" style={{bottom}}>
              <label className="tooltip">{t('common:button.mail')}</label>
              <div className="smallButton orange">
                <a href="mailto:bastien-scanu@gmail.com" target="_blank">
                  <FontIcon color="white" className="material-icons">mail</FontIcon>
                </a>
              </div>
            </div>
          }
        </Motion>
        <Motion style={isOpen ? finalPosition : this.initialPosition(0)}>
          {({bottom}) =>
            <div className="buttonLabel" style={{bottom}}>
              <label className="tooltip">{t('common:button.resume')}</label>
              <div className="smallButton red">
                <a href="https://bastienscanu.github.io/CV.pdf" target="_blank">
                  <FontIcon color="white" className="material-icons">description</FontIcon>
                </a>
              </div>
            </div>
          }
        </Motion>
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
