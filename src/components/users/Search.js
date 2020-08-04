import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, setAlert, searchUsers }) => {
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter text', 'danger');
    } else {
      searchUsers(text);
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
      {showClear && (
        <button
          className="btn btn-outline-warning btn-block mb-3"
          onClick={clearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
