import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ title, icon, githubUrl }) => {
  return (
    <div className="navbar bg-light mb-3">
      <a className="navbar-brand" href={githubUrl}>
        <i className={icon} style={{ fontSize: '1.5rem' }}></i> {title}
      </a>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
  githubUrl: 'https://github.com',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
};

export default Navbar;
