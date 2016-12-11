import React, {PropTypes} from 'react';

const Header = ({userName}) =>  {
  return (
    <div className="App-header">
      {(userName === "") &&
        <h2>Hi! Welcome to Todo List App!!</h2>
      }
      {(userName !== "") &&
        <h2>Hi {userName}! Here's the list of your tasks!!</h2>
      }
    </div>
  );
};

Header.propTypes = {
  userName: PropTypes.string.isRequired
};

export default Header;