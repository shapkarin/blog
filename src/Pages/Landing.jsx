import React, { Component } from 'react';

import { Link } from 'react-router';

const Header = () => (
    <div className="jumbotron">
      <h1>Hello, world!</h1>
      <p><Link to="posts" className="btn btn-primary btn-lg" role="button">Блог</Link></p>
    </div>
)

export default Header;
