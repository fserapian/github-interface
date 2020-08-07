import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import './User.css';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, loading, getUser, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    hireable,
    avatar_url,
    html_url,
    bio,
    login,
    company,
    blog,
    location,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) return <Spinner />;
  return (
    <div>
      <div className="mb-3">
        <Link className="btn btn-primary mr-3" to="/">
          Back to search
        </Link>
        <span>
          Hireable:{' '}
          {hireable ? (
            <i className="fas fa-check text-success"></i>
          ) : (
            <i className="fas fa-times text-danger"></i>
          )}
        </span>
      </div>
      <div className="profile-info mb-4">
        <img
          src={avatar_url}
          alt="Avatar"
          width="300"
          height="300"
          className="mr-5"
        />
        <div>
          <a href={html_url} className="btn btn-success mb-3">
            Visit github
          </a>
          <div>
            <h2 className="mb-3">{name}</h2>
            <h5>Location: {location}</h5>
            <h5>Username: {login}</h5>
            {company && (
              <Fragment>
                <h5>Company: {company}</h5>
              </Fragment>
            )}
            {blog && (
              <Fragment>
                <h5>Website: {blog}</h5>
              </Fragment>
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mb-4">
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
        </div>
        <div>
          <h1 className="badge badge-primary p-2 mr-3">
            Followers: {followers}
          </h1>
          <h1 className="badge badge-warning p-2 mr-3">
            Following: {following}
          </h1>
          <h1 className="badge badge-info p-2 mr-3">
            Public Repos: {public_repos}
          </h1>
          <h1 className="badge badge-danger p-2 mr-3">
            Public Gists: {public_gists}
          </h1>
        </div>
        <div>
          <Repos repos={repos} />
        </div>
      </div>
    </div>
  );
};

export default User;
