import React, { Component, FormEvent, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Dispatch } from 'redux';

import { AppState } from '../../../store/rootReducer';
import { AuthActionTypes } from '../../../store/auth/authActionTypes';
import classes from './Login.module.css';
import { login } from '../../../store/auth/authActionCreators';
import { User } from '../../../models/User';

import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import Spinner from '../../../components/spinner/Spinner';
import TitleCard from '../../../components/card/title-card/TitleCard';

// TODO: reset password link

interface LoginProps {
  error: string;
  loading: boolean;
  user: User | null;
  login: (email: string, password: string) => AuthActionTypes;
}

interface LoginState {
  email: string;
  password: string;
}

class Login extends Component<LoginProps, LoginState> {
  state = {
    email: '',
    password: ''
  };

  /**
   * @name login
   * @description triggers login action on submit
   * @param evt submit event
   */
  login = (evt: FormEvent) => {
    evt.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  /**
   * @name onInputChange
   * @description updates local state field of corresponding input field on change
   * @param label name of input field
   */
  onInputChange = (label: string) => (evt: ChangeEvent<HTMLInputElement>) => {
    // ts-bug requires this.state to prevent error with string lteral type
    this.setState({ ...this.state, [label]: evt.target.value });
  };

  render() {
    const { email, password } = this.state;
    const { error, loading, user } = this.props;

    // redirect if already signed in
    let authRedirect = null;
    if (user) {
      authRedirect = <Redirect to="/" />;
    }

    let login = <Spinner />;

    if (!loading) {
      login = (
        <TitleCard title="Login" readOnly>
          {authRedirect}

          <form onSubmit={this.login}>
            {error ? <p className={classes.Error}>{error}</p> : null}

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

            <Button btnType="Raised" color="Primary">
              Login
            </Button>
          </form>
        </TitleCard>
      );
    }

    return login;
  }
}

const mapStateToProps = (state: AppState) => ({
  error: state.auth.error,
  loading: state.auth.loading,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => ({
  login: (email: string, password: string) => dispatch(login(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
