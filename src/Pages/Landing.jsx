import React, { Component } from 'react';

import { Link } from 'react-router';

export default () => (
    <div className="jumbotron">
      <h1>Hello, world!</h1>
      <p><Link to="posts" className="btn btn-primary btn-lg" role="button">Блог</Link></p>
    </div>
)
