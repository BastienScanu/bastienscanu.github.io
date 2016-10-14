import React, {Component, PropTypes} from 'react';

export class VideoContainer extends Component {
  render() {
    return (
      <div className="videocontainer">
        <div className="overlay">
          {this.props.children}
        </div>
        <video id="background-video" loop autoPlay>
          <source src={this.props.mp4} type="video/mp4"/>
          <source src={this.props.webm} type="video/webm"/>
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

VideoContainer.propTypes = {
  mp4: PropTypes.string,
  webm: PropTypes.string,
  children: PropTypes.element
};
