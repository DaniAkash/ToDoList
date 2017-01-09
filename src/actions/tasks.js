import * as actions from '../actionTypes';
import Immutable from 'immutable';
import uuid from 'node-uuid';

export function addTask(task) {
  return {
    type: actions.ADD_TASK,
    task: Immutable.Map({
      id: uuid.v4(),
      task,
      isComplete: false,
      isBeingEdited: false,
    }),
  };
}

export function changeStatus(task) {
  task.isComplete = !task.isComplete;
  return {
    type: actions.CHANGE_STATUS,
    task: Immutable.Map(task),
  };
}

export function changeEditedTask(task) {
  task.isBeingEdited = !task.isBeingEdited;
  return {
    type: actions.CHANGE_EDITED_TASK,
    task: Immutable.Map(task),
  };
}