import Immutable from 'immutable';

import * as actions from '../actionTypes';
import initialState from './initialState';

export default function tasks(state = Immutable.List(initialState.tasks), action) {
  switch(action.type) {
    case actions.ADD_TASK:
      return state.push(action.task);

    case actions.CHANGE_STATUS:
      return state.update(
        state.findIndex(task => {
          return task.get('id') === action.task.get('id');
        }),
        () => {
          return action.task;
        }
      );

    default:
      return state;
  }
}