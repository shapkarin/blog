import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Components/Header'

class LandingLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="container-fluid">
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

export default LandingLayout;
