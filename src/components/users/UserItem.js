import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="text-center card mb-2">
      <div className="card-body">
        <img
          src={avatar_url}
          alt=""
          className="mb-3"
          style={{ width: '100px' }}
        />
        <h5>{login}</h5>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          See More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
