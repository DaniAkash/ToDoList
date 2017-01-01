import * as actions from '../actionTypes';
import Immutable from 'immutable';
import uuid from 'node-uuid';

export function addTask(task) {
  return Immutable.Map({
    type: actions.ADD_TASK,
    task: Immutable.Map({
      id: uuid.v4(),
      task,
      status: false,
    }),
  });
}