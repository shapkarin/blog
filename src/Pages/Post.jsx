import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Post extends Component {

  state = {
    id: 1,
    title: 'Заголовок поста',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas sagittis, ante in fermentum suscipit, urna urna cursus
            dolor, id tristique ligula lectus finibus tortor. Quisque fringilla
            imperdiet porttitor. Praesent elementum scelerisque neque.
            Sed sagittis interdum odio. Phasellus convallis mi sapien,
            sed ultrices leo vehicula vitae. Phasellus sodales dui sit amet fermentum venenatis.
            Duis dignissim erat id vulputate molestie. Etiam sit amet pretium magna, ac posuere metus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    `
  }

  render() {
    const post = this.state;

    return <div className="App">
        <div className="page-header">
          <h1>{post.title}</h1>
        </div>
        <div>{post.body}</div>
        <button onClick={browserHistory.goBack} className="btn btn-primary">Назад</button>
      </div>
  }
}
