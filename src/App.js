import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hi! Your Todo List!!</h2>
        </div>
        <div className="App-body">
          <div className="user-name-area">
            <input
              className="user-name-input"
              type="text"
              placeholder="&#xf21d; Please enter your name!"
            />
            <button
              type="submit"
              className="Btn user-name-submit">&#xf0c7;</button>
          </div>
          <p className="tasks">Task 1</p>
          <p className="tasks">Task 2</p>
          <p className="tasks">Task 3</p>
        </div>
      </div>
    );
  }
}

export default App;
