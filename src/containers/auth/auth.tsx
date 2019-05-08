import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { login } from '../../store/auth/authActionCreators';
import { AuthActionTypes } from '../../store/auth/authActionTypes';

import BasicCard from '../../components/card/basic-card/BasicCard';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

class Login extends Component<any, any> {
  state = {
    email: '',
    password: '',
    passwordCheck: ''
  };

  login = () => {
    this.props.login(this.state.email, this.state.password);
  };

  onInputChange = (label: string) => (evt: any) => {
    this.setState({ [label]: evt.target.value });
  };

  render() {
    const { email, password, passwordCheck } = this.state;
    return (
      <>
        <BasicCard title="Login" readOnly>
          <Input
            value={email}
            label="Email"
            onChange={this.onInputChange('email')}
            editing
          />
          <Input
            value={password}
            label="Password"
            onChange={this.onInputChange('password')}
            editing
          />
          <p>Forgot your password? Click here to reset it.</p>
          <Button btnType="Raised" color="Primary" clicked={this.login}>
            Login
          </Button>
        </BasicCard>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => ({
  login: (email: string, password: string) => dispatch(login(email, password))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
