import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Components/Header'

export default class LandingLayout extends Component {
  render() {
    let { children } = this.props;

    return (
      <div>
        <Header name="Landing"/>
        <div className="container">
          {children}
        </div>
      </div>
    );
  }
}

LandingLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
