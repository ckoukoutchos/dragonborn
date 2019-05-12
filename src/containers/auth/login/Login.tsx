import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../../store/rootReducer';
import { AuthActionTypes } from '../../../store/auth/authActionTypes';
import { login, logout } from '../../../store/auth/authActionCreators';

import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import Spinner from '../../../components/spinner/Spinner';
import TitleCard from '../../../components/card/title-card/TitleCard';

// TODO: comments, func docs, prop interface

class Login extends Component<any, any> {
  state = {
    email: '',
    password: ''
  };

  login = () => {
    this.props.login(this.state.email, this.state.password);
  };

  logout = () => {
    this.props.logout();
  };

  onInputChange = (label: string) => (evt: any) => {
    this.setState({ [label]: evt.target.value });
  };

  render() {
    const { email, password } = this.state;

    let login = <Spinner />;

    if (!this.props.loading) {
      login = (
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
          <button onClick={this.logout}>logout</button>
        </>
      );
    }

    return login;
  }
}

const mapStateToProps = (state: AppState) => ({
  loading: state.auth.loading,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => ({
  login: (email: string, password: string) => dispatch(login(email, password)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
