import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import axios from 'axios';
import * as actions from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search users

  // Clear users

  // Get user

  // Get repos

  // Set loading

  return (
    <GithubContext.Provider
      value={{
        users: state.usres,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
