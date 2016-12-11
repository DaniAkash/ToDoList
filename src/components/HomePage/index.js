import React, {
  Component,
  PropTypes
} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

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
    this.setUserName = this.setUserName.bind(this);
  }

  setUserName() {
    this.props.actions.setUserName(this.state.inputText);
    toastr.success('Logged In');
    this.context.router.push('/tasks');
  }

  onTextInput(event) {
    if(event.key === 'Enter') this.setUserName();
    else this.setState({inputText: event.target.value});
  }

  onClickSave() {
    this.setUserName();
  }

  componentWillMount() {
    if(this.props.userName !== "") this.context.router.replace('/tasks');
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

HomePage.contextTypes = {
  router: PropTypes.object.isRequired
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