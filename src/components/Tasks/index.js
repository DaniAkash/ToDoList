import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Cookies from "js-cookie";

import NavigationBar from '../Common/NavigationBar';
import * as taskActions from '../../actions/tasks';
import AddTask from './AddTask';
import Task from './Task';

class Tasks extends Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      newTask: ""
    };

    this.addTask = this.addTask.bind(this);
    this.onTextInput = this.onTextInput.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.userName !== nextProps.userName && nextProps.userName === "")
      this.context.router.push('/login');
  }

  componentWillMount() {
    if(!Cookies.get('name')) this.context.router.replace('/login');
  }

  addTask() {
    this.props.taskActions.addTask(this.state.newTask);
    document.getElementById('add-new-task').value = "";
  }

  onTextInput(event) {
    if(event.key === 'Enter') this.addTask();
    else this.setState({newTask: event.target.value});
  }

  onClickSave() {
    this.addTask();
  }

  render() {
    return (
      <div className="App-body">
        <div className="tasks-area">
          <AddTask onClickSave={this.onClickSave} onTextInput={this.onTextInput} />
          <NavigationBar />
          <Task />
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
  taskActions: PropTypes.object.isRequired
};

Tasks.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log(state.tasks);
  return {
    userName: state.userName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    taskActions: bindActionCreators(taskActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);