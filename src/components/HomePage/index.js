import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import UserNameInput from '../UserNameInput';
import * as UserActions from '../../actions/user';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      inputText: this.props.inputText
    };
    this.onTextInput = this.onTextInput.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTextInput(event) {
    if(event.key === 'Enter') this.props.actions.setUserName(this.state.inputText);
    else this.setState({inputText: event.target.value});
  }

  onClickSave() {
    this.props.actions.setUserName(this.state.inputText);
  }

  render() {
    console.log('here' + this.props.userName);
    return (
      <div className="App-body">
        <UserNameInput
          onTextInput={this.onTextInput}
          onClickSave={this.onClickSave}
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  userName: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    userName: state.userName,
    inputText: ''
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);