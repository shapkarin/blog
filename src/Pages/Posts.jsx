import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Data from './../Data/Posts.js';

import './Style/test.css';

const itemTest = {
  title: 'Заголовок',
  date: '28 декабря 2017'
};

export default class Posts extends Component {

  state = {
    posts: Data
  }

  render() {
    let { posts } = this.state;

    return <div className="group">
        <div className="page-header">
          <h1>Список постов</h1>
        </div>
        <ul className="list-group">
          {
            posts.map(post =>
              <li className="list-group-item" key={post.id}>
                <Link to={`post/${post.id}`}>{`${post.title} #${post.id}`}</Link>
              </li>
            )
          }
        </ul>
        <button onClick={browserHistory.goBack} className="btn btn-primary">Назад</button>
      </div>
  }
}
