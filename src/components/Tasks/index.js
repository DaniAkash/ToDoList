import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import NavigationBar from '../NavigationBar';
import * as UserActions from '../../actions/user';

class Tasks extends Component{
  constructor(props, context) {
    super(props, context);

    if(this.props.userName === "") this.context.router.replace('/login');
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.userName !== nextProps.userName && nextProps.userName === "")
      this.context.router.push('/login');
  }

  render() {
    return (
      <div className="App-body">
        <div className="tasks-area">
          <div className="add-new-task-div">
            <input
              type="text"
              className="add-new-task-input"
              placeholder="Add New Task"
            />
            <button
              type="submit"
              className="add-new-task-submit">&#xf067;</button>
          </div>
          <NavigationBar />
          <div className="tasks">
            <div className="tasks-checkbox-div">
              <input type="checkbox" value="1" id="tasksCheckBox1" name="" />
              <label htmlFor="tasksCheckBox1"></label>
            </div>
            <textarea type="text" value="Task 2 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 3  Task 3 Task 3 Task 3 Task 3" className="task-text" />
            <span className="tasks-delete">&#xf00d;</span>
          </div>
          <div className="tasks">
            <div className="tasks-checkbox-div">
              <input type="checkbox" value="1" id="tasksCheckBox2" name="" />
              <label htmlFor="tasksCheckBox2"></label>
            </div>
            <p className="task-text">Task 2</p>
            <span className="tasks-delete">&#xf00d;</span>
          </div>
          <div className="tasks complete">
            <div className="tasks-checkbox-div">
              <input type="checkbox" checked="true" value="1" id="tasksCheckBox3" name="" />
              <label htmlFor="tasksCheckBox3"></label>
            </div>
            <p className="task-text">Task 3</p>
            <span className="tasks-delete">&#xf00d;</span>
          </div>
        </div>
      </div>
    );
  }
}

Tasks.propTypes = {
  userName: PropTypes.string.isRequired,
  userActions: PropTypes.object.isRequired
};

Tasks.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    userName: state.userName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);