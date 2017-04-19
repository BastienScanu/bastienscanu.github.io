import React, {Component, PropTypes} from 'react';
import {translate} from 'react-i18next';
import {Radar} from 'react-chartjs-2';

const radarData = {
  labels: ["design", "frontend", "backend", "database", "hello", "os"],
  datasets: [
    {
      label: "Full Stack Developper",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [65, 59, 90, 81, 56, 55]
    }
  ]
};

const radarOptions = {
  scale: {
    ticks: {
      display: false,
      min: 0
    }
  }
};

class Skills extends Component {
  render() {
    const {t} = this.props;
    return (
      <section id="skills">
        <div className="container">
          <h3>{t('skills:title')}</h3>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="stat">
                <h4>{t('skills:soft')}</h4>
                <Radar data={radarData} options={radarOptions}/>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="stat">
                <h4>{t('skills:dev')}</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="stat">
                <h4>{t('skills:web')}</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="stat">
                <h4>{t('skills:languages')}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Skills.propTypes = {
  t: PropTypes.func
};

export default translate(["common", "skills"], {wait: true})(Skills);
