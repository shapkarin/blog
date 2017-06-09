import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MainLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="main-layout-container">
        <header style={{height: '100px', width: '100%', background: 'green'}} />
        <div className="main-content">
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
