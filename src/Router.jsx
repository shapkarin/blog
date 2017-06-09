import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import LandingLayout from './Layout/Landing';
import BlogLayout from './Layout/Blog';

import LandingPage from './Pages/Landing';
import Post from './Pages/Post';
import Posts from './Pages/Posts';

const RouterComponent = () => (
  <Router history={browserHistory}>
    <Route component={LandingLayout}>
      <Route path="/" component={LandingPage} />
    </Route>
    <Route component={BlogLayout}>
      <Route path="/posts" component={Posts} />
      <Route path="/post" component={Post} />
    </Route>
  </Router>
)

export default RouterComponent;
