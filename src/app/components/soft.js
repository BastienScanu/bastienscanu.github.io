import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import {TagCloud} from 'react-tagcloud';

class Soft extends Component {
  render() {
    const {t} = this.props;
    const tags = [
      {
        value: "team",
        count: 3
      },
      {
        value: "project",
        count: 1
      },
      {
        value: "agility",
        count: 4
      },
      {
        value: "communication",
        count: 2
      },
      {
        value: "creativity",
        count: 2
      },
      {
        value: "autonomy",
        count: 3
      },
      {
        value: "curiosity",
        count: 1
      }
    ];
    const customRenderer = tag => {
      return (
        <span
          style={{
            animation: 'blinker 3s linear infinite',
            animationDelay: `${Math.random() * 2}s`
          }}
          key={tag.value}
          className={`tag-${tag.count}`}
          > {t(`skills:soft.skills.${tag.value}`)}</span>);
    };

    return (
      <div id="soft">
        <h4>{t('skills:soft.title')}</h4>
        <TagCloud tags={tags} minSize={20} maxSize={38} renderer={customRenderer} disableRandomColor shuffle={false}/>
      </div>
    );
  }
}

Soft.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(Soft);
