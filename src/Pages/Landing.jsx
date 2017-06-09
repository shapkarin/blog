import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. <br />
          <Link to="post">Один пост</Link><br />
          <Link to="posts">Список постов</Link><br />
        </p>
      </div>
  }
}
