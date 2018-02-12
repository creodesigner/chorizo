import React from 'react';
import './Menu.css';

export default class Menu extends React.Component {

  render() {
    return (
      <div id="menu">
        <a href="/type/wedding">Wedding</a>
        <a href="/type/family">Family</a>
        <a href="/type/birth">Birth</a>
        <hr/>
        <a href="/pricing">Pricing</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    );
  }
}
