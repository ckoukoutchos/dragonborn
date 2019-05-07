import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { login } from '../../store/auth/authActionCreators';
import { AuthActionTypes } from '../../store/auth/authActionTypes';

class Login extends Component<any, any> {
  login = () => {
    this.props.login();
  };

  render() {
    return <button onClick={this.login}>Auth</button>;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => ({
  login: (email: string, password: string) => dispatch(login(email, password))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
