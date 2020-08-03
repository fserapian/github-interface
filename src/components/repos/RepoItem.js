import React from 'react';
import './RepoItem.css';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className="card p-3 my-2">
      <h5>
        <a href={repo.html_url}>{repo.name}</a>
      </h5>
    </div>
  );
};

RepoItem.prototype = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
