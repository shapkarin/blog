import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LandingLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="landing-layout-container">
        <header style={{height: '100px', width: '100%', background: 'red'}}>
          Лендинг
        </header>
        <div className="main-content">
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
