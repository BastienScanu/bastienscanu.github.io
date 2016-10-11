import React, {Component} from 'react';
import axios from 'axios';

import {Tech} from './tech';

export class Techs extends Component {
  constructor() {
    super();
    this.state = {
      techs: []
    };
  }

  componentDidMount() {
    axios.get('app/components/techs/techs.json').then(response => {
      this.setState({techs: response.data});
    });
  }

  render() {
    return (
      <div className="container">
        <div className="techs">
          <h2>
            Cooked with all these awesome technologies:
          </h2>
          <div>
            {this.state.techs.map((tech, i) => (<Tech key={i} tech={tech}/>))}
          </div>
        </div>
      </div>
    );
  }
}
