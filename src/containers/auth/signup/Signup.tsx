import React, { Component, FormEvent, ChangeEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { AppState } from '../../../store/rootReducer';
import { AuthActionTypes } from '../../../store/auth/authActionTypes';
import { signup } from '../../../store/auth/authActionCreators';
import {
  passwordMatch,
  validPassword,
  validEmail
} from '../../../shared/validation';

import classes from './Signup.module.css';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import Spinner from '../../../components/spinner/Spinner';
import TitleCard from '../../../components/card/title-card/TitleCard';

// TODO: comments, func docs, prop interface

class Signup extends Component<any, any> {
  state = {
    email: '',
    error: false,
    password: '',
    passwordCheck: ''
  };

  signup = (evt: FormEvent) => {
    evt.preventDefault();
    const { email, password, passwordCheck } = this.state;

    if (passwordMatch(password, passwordCheck) && validPassword(password)) {
      this.props.signup(email, password);
    } else {
      this.setState({
        error:
          'Please use a valid email address and ensure your passwords match.'
      });
    }
  };

  onInputChange = (label: string) => (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [label]: evt.target.value });
  };

  render() {
    const { email, error, password, passwordCheck } = this.state;

    // redirect if already signed in
    let authRedirect = null;
    if (this.props.user) {
      authRedirect = <Redirect to="/" />;
    }

    let signup = <Spinner />;

    if (!this.props.loading) {
      signup = (
        <form onSubmit={this.signup}>
          {authRedirect}

          <TitleCard title="Sign Up" readOnly>
            {this.state.error ? (
              <p className={classes.Error}>{this.state.error}</p>
            ) : null}
            {this.props.error ? (
              <p className={classes.Error}>{this.props.error}</p>
            ) : null}

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
              value={passwordCheck}
              label="Password Check"
              long
              onChange={this.onInputChange('passwordCheck')}
              editing
            />

            <Button btnType="Raised" color="Primary">
              Login
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
