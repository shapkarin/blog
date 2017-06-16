import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Data from './../Data/Posts.js';

export default class Post extends Component {

  state = Data[0];

  render() {
    let post = this.state;

    return <div className="App">
        <div className="page-header">
          <h1>{post.title}</h1>
        </div>
        <div>{post.body}</div>
        <button onClick={browserHistory.goBack} className="btn btn-primary">Назад</button>
      </div>
  }
}
