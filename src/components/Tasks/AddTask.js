import React from 'react';

const AddTask = ({onClickSave, onTextInput}) => {
  return(
    <div className="add-new-task-div">
      <input
        type="text"
        id="add-new-task"
        className="add-new-task-input"
        placeholder="Add New Task"
        onKeyUp={onTextInput}
      />
      <button
        type="submit"
        onClick={onClickSave}
        className="add-new-task-submit">&#xf067;</button>
    </div>
  );
};

AddTask.propTypes = {
  onClickSave: React.PropTypes.func.isRequired,
  onTextInput: React.PropTypes.func.isRequired,
};

export default AddTask;