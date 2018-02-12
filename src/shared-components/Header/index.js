import React from 'react';

import AppActions from '../../App/flux/AppActions';

import './Header.css';

export default class Header extends React.Component {

  _toggleMenu() {
    AppActions.toggleMenu();
  }

  render() {
    return (
      <header id="header" className={this.props.className}>
        <a className="logo" href="/">Chorizo</a>
        <div className="nav-wrapper">
          { this.props.type && <h2>{this.props.type}</h2> }
          <div className="bars" onClick={this._toggleMenu}>
            <div className="bar top"></div>
            <div className="bar middle"></div>
            <div className="bar bottom"></div>
          </div>
        </div>
      </header>
    );
  }
}
