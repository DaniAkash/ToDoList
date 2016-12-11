import React, {Component} from 'react';

import UserNameInput from '../UserNameInput';

class HomePage extends Component {
  render() {
    return (
      <div className="App-body">
        <UserNameInput />
      </div>
    );
  }
}

export default HomePage;