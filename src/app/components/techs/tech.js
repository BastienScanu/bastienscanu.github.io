import React, {Component} from 'react';

export class Tech extends Component {
  render() {
    return (
      <div>
        <img src={this.props.tech.logo}/>
        <h3>
          {this.props.tech.title}
        </h3>
        <p>{this.props.tech.text1}</p>
        <p>{this.props.tech.text2}</p>
      </div>
    );
  }
}

Tech.propTypes = {
  tech: React.PropTypes.object.isRequired
};
