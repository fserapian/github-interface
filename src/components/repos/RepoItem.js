import React from 'react';
import './RepoItem.css';

const RepoItem = ({ repo }) => {
  return (
    <div className="card p-3 my-2">
      <h5>
        <a href={repo.html_url}>{repo.name}</a>
      </h5>
    </div>
  );
};

export default RepoItem;
