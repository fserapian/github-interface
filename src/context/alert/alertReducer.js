import * as actions from '../types';

export default (state, action) => {
  switch (action.type) {
    case actions.SET_ALERT:
      return action.payload;
    case actions.REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};
