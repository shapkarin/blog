import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return <nav className={`navbar  ${this.props.name === 'Landing' ? 'navbar-default' : 'navbar-inverse'}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to={this.props.name === 'Landing' ? '/' : '/posts'}>
            {this.props.name}
          </Link>
        </div>
      </div>
    </nav>;
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired
};
