import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as Cookies from "js-cookie";

import UserNameInput from './UserNameInput';
import * as UserActions from '../../actions/user';

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);

    if(Cookies.get('name')) this.context.router.replace('/');
    this.state = {
      inputText: ''
    };
    this.onTextInput = this.onTextInput.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.setUserName = this.setUserName.bind(this);
  }

  setUserName() {
    this.props.actions.setUserName(this.state.inputText);
    Cookies.set('name', this.state.inputText);
    toastr.success('Logged In');
    this.context.router.push('/');
  }

  onTextInput(event) {
    if(event.key === 'Enter') this.setUserName();
    else this.setState({inputText: event.target.value});
  }

  onClickSave() {
    this.setUserName();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.userName !== nextProps.userName && nextProps.userName !== "")
      this.context.router.replace('/');
  }

  render() {
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

LoginPage.propTypes = {
  userName: PropTypes.string.isRequired
};

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    userName: state.userName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);