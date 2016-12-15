import React from 'react';

const AddTask = () => {
  return(
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
  );
};

export default AddTask;