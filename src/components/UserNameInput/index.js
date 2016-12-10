import React, {PropTypes} from 'react';

const UserNameInput = () => {
  return (
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
  );
};

export default UserNameInput;