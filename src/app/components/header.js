import React, {Component} from 'react';
import logoUrl from '../../images/logo-white.svg';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    opacity: '0.6'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  }
};

export class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <img src={logoUrl} width="24" height="24" alt="Bastien Scanu"/>
          <a href="http://www.bastien-scanu.com" target="_blank">
            Bastien Scanu
          </a>
        </p>
      </header>
    );
  }
}
