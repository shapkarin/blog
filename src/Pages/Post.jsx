import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class App extends Component {
  render() {
    return <div className="App">
        ONE Post
        <button onClick={browserHistory.goBack}>Назад</button>
      </div>
  }
}
