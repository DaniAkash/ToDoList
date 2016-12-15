import React from 'react';

const Tasks = () => {
  return (
    <div className={"tasks " + (0? "": "complete")}>
      <div className="tasks-checkbox-div">
        <input type="checkbox" value="1" id="tasksCheckBox1" name="" />
        <label htmlFor="tasksCheckBox1"></label>
      </div>
      <textarea type="text" value="Task 2 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 1 Task 3  Task 3 Task 3 Task 3 Task 3" className="task-text" />
      <span className="tasks-delete">&#xf00d;</span>
    </div>
  );
};

export default Tasks;