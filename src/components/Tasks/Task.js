import React from 'react';

const Tasks = ({task}) => {
  return (
    <div className={"tasks " + (task.isComplete? "complete": "")}>
      <div className="tasks-checkbox-div">
        <input type="checkbox" value="1" id={`tasksCheckBox${task.id}`} name="" />
        <label htmlFor={`tasksCheckBox${task.id}`}></label>
      </div>
      {
        (task.isBeingEdited)
        ? <textarea type="text" value="Task 2 Task 1" className="task-text" />
        : <p className="task-text">{task.task}</p>
      }
      <span className="tasks-delete">&#xf00d;</span>
    </div>
  );
};

export default Tasks;