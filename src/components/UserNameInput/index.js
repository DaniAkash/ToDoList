import React, {PropTypes} from 'react';

const UserNameInput = ({onTextInput, onClickSave}) => {
  return (
    <div className="user-name-area">
      <input
        className="user-name-input"
        type="text"
        onKeyUp={onTextInput}
        placeholder="&#xf21d; Please enter your name to continue..."
      />
      <button
        type="submit"
        onClick={onClickSave}
        className="Btn user-name-submit">&#xf0c7;</button>
    </div>
  );
};

UserNameInput.propTypes = {
  onTextInput: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired
};

export default UserNameInput;