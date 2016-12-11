import * as actions from '../actionTypes';
import initialState from './initialState';

const user = (state = initialState.userName, action) => {
  switch (action.type) {
    case actions.ENTER_NAME:
      return action.name;

    case actions.LOG_OUT:
      return "";

    case 'persist/REHYDRATE':
      return action.payload.userName;

    default:
      return state;
  }
};

export default user;