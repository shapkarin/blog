import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

const Header = ({name}) => (
    <nav className={`navbar ${name === 'Landing' ? 'navbar-default' : 'navbar-inverse'}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to={name === 'Landing' ? '/' : '/posts'}>
            {name}
          </Link>
        </div>
      </div>
    </nav>
)

Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;
