import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

import Header from '../Components/Header'

import './Style/animation.css';

const transitionDuration = 300;
const transitionEnterTimeout = 2 * transitionDuration;



class MainLayout extends Component {
  render() {
    const { children, location } = this.props;

    return (
      <div className="container-fluid">
        <Header name="Blog"/>
        <div className="container">
          <ReactCSSTransitionGroup
            component="div"
            className="transition-group"
            transitionName="page"
            transitionEnterTimeout={transitionEnterTimeout}
            transitionLeaveTimeout={transitionDuration}>
            {React.cloneElement(children, {
              key: location.pathname
            })}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired
};

export default MainLayout;
