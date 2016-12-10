import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hi! Welcome to Todo List App!!</h2>
        </div>
        <div className="App-body">
          <div className="user-name-area">
            <input
              className="user-name-input"
              type="text"
              placeholder="&#xf21d; Please enter your name to continue..."
            />
            <button
              type="submit"
              className="Btn user-name-submit">&#xf0c7;</button>
          </div>
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
            <div className="tasks-header"><a href="#" className="active">All</a> | <a href="#">Pending</a> | <a href="#">Completed</a></div>
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
      </div>
    );
  }
}

export default App;
