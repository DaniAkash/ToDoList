import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          userName={this.props.userName}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    userName: state.userName
  };
}

export default connect(mapStateToProps)(App);
