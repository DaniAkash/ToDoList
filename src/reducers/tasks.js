import Immutable from 'immutable';

import * as actions from '../actionTypes';
import initialState from './initialState';

export default function tasks(state = Immutable.List(initialState.tasks), action) {
  if(Immutable.Iterable.isIterable(action)) {
    switch(action.get('type')) {
      case actions.ADD_TASK:
        return state.push(action.get('task'));

      default:
        return state;
    }
  }
  return state;
}