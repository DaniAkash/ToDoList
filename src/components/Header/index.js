import React, {PropTypes} from 'react';

const Header = ({userName, logout}) =>  {
  return (
    <div className="App-header">
      {(userName !== "") &&
        <i></i>
      }
      {(userName === "") &&
        <h2>Hi! Welcome to Todo List App!!</h2>
      }
      {(userName !== "") &&
        <h2>Hi {userName}! Here's the list of your tasks!!</h2>
      }
      {(userName !== "") &&
        <i className="fa fa-power-off logout-button" onClick={logout}></i>
      }
    </div>
  );
};

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};

export default Header;