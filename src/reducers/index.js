import {combineReducers} from 'redux';
import userName from './user';
import tasks from './tasks';

const rootReducer = combineReducers({
  userName,
  tasks
});

export default rootReducer;