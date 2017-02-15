import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';
import Techno from './techno';

class Technos extends Component {
  render() {
    const {t} = this.props;
    const technos = [
      {
        key: "angular",
        avatar: "A"
      },
      {
        key: "react",
        avatar: "R"
      },
      {
        key: "nodejs",
        avatar: "N"
      },
      {
        key: "mongo",
        avatar: "M"
      },
      {
        key: "express",
        avatar: "E"
      },
      {
        key: "es6",
        avatar: "ES"
      },
      {
        key: "docker",
        avatar: "D"
      },
      {
        key: "html",
        avatar: "H"
      },
      {
        key: "css",
        avatar: "CSS"
      },
      {
        key: "php",
        avatar: "P"
      },
      {
        key: "sql",
        avatar: "S"
      },
      {
        key: "java",
        avatar: "J"
      },
      {
        key: "c",
        avatar: "C"
      },
      {
        key: "git",
        avatar: "G"
      },
      {
        key: "scrum",
        avatar: "S"
      },
      {
        key: "machine",
        avatar: "ML"
      },
      {
        key: "socket",
        avatar: "S"
      }
    ];
    return (
      <section id="technos">
        <div className="container">
          <h3>{t('technos:title')}</h3>
          <div id="technosList">
            {technos.map(tech => {
              return <Techno avatar={tech.avatar} key={tech.key} text={tech.key}/>;
            })}
          </div>
        </div>
      </section>
    );
  }
}

Technos.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "technos"], {wait: true})(Technos);
