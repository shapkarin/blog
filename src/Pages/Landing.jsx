import React, { Component } from 'react';

import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return <div className="App">
      <p className="App-intro">
        <Link to="posts">Список постоa</Link><br />
      </p>
    </div>;
  }
}
