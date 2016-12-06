import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';

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
            <div className="tasks-header">All | Pending | Completed</div>
            <div className="tasks">
              <input
                type="checkbox"
                className="tasks-checkbox"
              />
              <p className="task-text">Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 </p>
              <select className="tasks-priority">
                <option value="high">High</option>
                <option value="med">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="tasks">
              <input
                type="checkbox"
                className="tasks-checkbox"
              />
              <p className="task-text">Task 2</p>
              <select className="tasks-priority">
                <option value="high">High</option>
                <option value="med">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="tasks">
              <input
                type="checkbox"
                className="tasks-checkbox"
              />
              <p className="task-text">Task 3</p>
              <select className="tasks-priority">
                <option value="high">High</option>
                <option value="med">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
