import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

const itemTest = {
  title: 'Заголовок',
  date: '28 декабря 2017'
};

export default class Posts extends Component {

  state = {
    posts: [
      { id: 0, ...itemTest },
      { id: 1, ...itemTest },
      { id: 2, ...itemTest },
      { id: 3, ...itemTest },
      { id: 4, ...itemTest }
    ]
  }

  render() {
    const { posts } = this.state;

    return <div className="App">
        List of POSTS
        <button onClick={browserHistory.goBack}>Назад</button>  <br />
        <ul className="list-group">
          {
            posts.map(post =>
              <li className="list-group-item">
                <Link to={`post/${post.id}`}>{`${post.title} #${post.id}`}</Link>
              </li>
            )
          }
        </ul>
      </div>
  }
}
