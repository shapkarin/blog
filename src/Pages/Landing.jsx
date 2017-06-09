import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return <div className="App">
        <p className="App-intro">
          <Link to="posts">Список постов</Link><br />
        </p>
      </div>
  }
}
