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

class Signup extends Component<any, any> {
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

    let signup = <Spinner />;

    if (!this.props.loading) {
      signup = (
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
            <Input
              value={password}
              label="Password Check"
              long
              onChange={this.onInputChange('passwordCheck')}
              editing
            />
            <Button btnType="Raised" color="Primary" clicked={this.login}>
              Login
            </Button>
          </TitleCard>
        </>
      );
    }

    return signup;
  }
}

const mapStateToProps = (state: AppState) => ({
  loading: state.auth.loading
});

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => ({
  login: (email: string, password: string) => dispatch(login(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
