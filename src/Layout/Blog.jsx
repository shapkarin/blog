import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Components/Header'

class MainLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="container-fluid">
        <Header name="Blog"/>
        <div className="container">
          {children}
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired
};

export default MainLayout;
