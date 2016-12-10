import * as actions from '../actionTypes';

export function setUserName(name) {
  return {
    type: actions.ENTER_NAME,
    name
  };
}