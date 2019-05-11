import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { login } from '../../store/auth/authActionCreators';
import { AuthActionTypes } from '../../store/auth/authActionTypes';

import TitleCard from '../../components/card/title-card/TitleCard';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

// TODO: comments, func docs, prop interface
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
        <TitleCard title="Login" readOnly>
          <Input
            value={email}
            label="Email"
            long
            onChange={this.onInputChange('email')}
            editing
          />
          <Input
            value={password}
            label="Password"
            long
            onChange={this.onInputChange('password')}
            editing
          />
          <p>Forgot your password? Click here to reset it.</p>
          <Button btnType="Raised" color="Primary" clicked={this.login}>
            Login
          </Button>
        </TitleCard>
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
