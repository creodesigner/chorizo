import React from 'react';
import './Menu.css';

export default class Menu extends React.Component {

  render() {
    return (
      <div id="menu">
        <a href="#">Preferences</a>
        <a href="#">My Tasks</a>
        <a href="#">My Awards</a>
      </div>
    );
  }
}
