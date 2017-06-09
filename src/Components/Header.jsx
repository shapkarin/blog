import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return <nav className={`navbar  ${this.props.name === 'Landing' ? 'navbar-default' : 'navbar-inverse'}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            {this.props.name}
          </a>
        </div>
      </div>
    </nav>;
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired
};
