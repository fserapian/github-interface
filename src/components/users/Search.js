import React, { Fragment, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter text', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          className="form-control mb-3"
          value={text}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-block btn-primary mb-3">
          Search
        </button>
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-outline-warning btn-block mb-3"
          onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
