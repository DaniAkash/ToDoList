import React from 'react';

const Tasks = ({task, changeStatus, changeEditedTask}) => {
  return (
    <div className={"tasks " + (task.isComplete? "complete": "")}>
      <div className="tasks-checkbox-div">
        <input type="checkbox" value="1" id={`tasksCheckBox${task.id}`} onChange={() => changeStatus(task)} />
        <label htmlFor={`tasksCheckBox${task.id}`}></label>
      </div>
      {
        (task.isBeingEdited)
        ? <textarea type="text" value="Task 2 Task 1" className="task-text" />
        : <p className="task-text" onDoubleClick={() => changeEditedTask(task)}>{task.task}</p>
      }
      <span className="tasks-delete">&#xf00d;</span>
    </div>
  );
};

export default Tasks;