import React, { Component, FormEvent, ChangeEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { AppState } from '../../../store/rootReducer';
import { AuthActionTypes } from '../../../store/auth/authActionTypes';
import { signup } from '../../../store/auth/authActionCreators';
import { User } from '../../../models/User';
import {
  passwordMatch,
  validPassword,
  validEmail
} from '../../../shared/validation';

import Button from '../../../components/button/Button';
import classes from './Signup.module.css';
import Input from '../../../components/input/Input';
import Spinner from '../../../components/spinner/Spinner';
import TitleCard from '../../../components/card/title-card/TitleCard';

interface SignupProps {
  error: string;
  loading: boolean;
  user: User | null;
  signup: (email: string, password: string) => AuthActionTypes;
}

interface SignupState {
  email: string;
  error: string | null;
  password: string;
  passwordCheck: string;
}

class Signup extends Component<SignupProps, SignupState> {
  state = {
    email: '',
    error: null,
    password: '',
    passwordCheck: ''
  };

  /**
   * @name signup
   * @description validates email and passwords and triggers signup action or displays error message
   * @param evt form submit event
   */
  signup = (evt: FormEvent) => {
    evt.preventDefault();
    const { email, password, passwordCheck } = this.state;

    if (
      passwordMatch(password, passwordCheck) &&
      validPassword(password) &&
      validEmail(email)
    ) {
      this.props.signup(email, password);
    } else {
      this.setState({
        error:
          'Please use a valid email address and ensure your passwords match.'
      });
    }
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
    const { email, password, passwordCheck } = this.state;

    // redirect if already signed in
    let authRedirect = null;
    if (this.props.user) {
      authRedirect = <Redirect to="/dashboard" />;
    }

    let signup = <Spinner />;

    if (!this.props.loading) {
      signup = (
        <form onSubmit={this.signup}>
          {authRedirect}

          <TitleCard title="Sign Up">
            {this.state.error ? (
              <p className={classes.Error}>{this.state.error}</p>
            ) : null}
            {this.props.error ? (
              <p className={classes.Error}>{this.props.error}</p>
            ) : null}

            <Input
              editing
              label="Email"
              long
              type="email"
              value={email}
              onChange={this.onInputChange('email')}
            />

            <Input
              editing
              label="Password"
              long
              type="password"
              value={password}
              onChange={this.onInputChange('password')}
            />

            <Input
              editing
              label="Password Check"
              long
              type="password"
              value={passwordCheck}
              onChange={this.onInputChange('passwordCheck')}
            />

            <Button btnType="Raised" color="Primary">
              Sign Up
            </Button>
          </TitleCard>
        </form>
      );
    }

    return signup;
  }
}

const mapStateToProps = (state: AppState) => ({
  error: state.auth.error,
  loading: state.auth.loading,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => ({
  signup: (email: string, password: string) => dispatch(signup(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
