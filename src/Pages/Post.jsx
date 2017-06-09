import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Post extends Component {

  state = {
    id: 1,
    title: 'Заголовок поста',
    body: 'Тело поста'
  }

  render() {
    const post = this.state;

    return <div className="App">
        <button onClick={browserHistory.goBack}>Назад</button>
        <div>{post.title}</div>
        <div>{post.body}</div>
      </div>
  }
}
