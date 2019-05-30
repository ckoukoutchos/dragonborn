// library
import React, { Component, FormEvent, ChangeEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

// store
import { AppState } from '../../../store/rootReducer';
import { AuthActionTypes } from '../../../store/auth/authActionTypes';
import { signup } from '../../../store/auth/authActionCreators';

//components
import Button from '../../../components/UI/button/Button';
import classes from './Signup.module.css';
import Input from '../../../components/UI/input/Input';
import Spinner from '../../../components/UI/spinner/Spinner';
import TitleCard from '../../../components/UI/card/title-card/TitleCard';

//shared
import { User } from '../../../models/User';
import {
  passwordMatch,
  validPassword,
  validEmail
} from '../../../shared/validation';

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

/*
 * Sign up container widget
 */
class Signup extends Component<SignupProps, SignupState> {
  state = {
    email: '',
    error: null,
    password: '',
    passwordCheck: ''
  };

  /**
   * @name onSignup
   * @description validates email and passwords and triggers signup action or displays error message
   * @param evt form submit event
   */
  onSignup = (evt: FormEvent) => {
    evt.preventDefault();
    const { email, password, passwordCheck } = this.state;

    if (
      passwordMatch(password, passwordCheck) &&
      validPassword(password) &&
      validEmail(email)
    ) {
      this.props.signup(email, password);
    } else if (validEmail(email)) {
      this.setState({
        error: 'Your passwords must be at least 6 characters long and match.'
      });
    } else {
      this.setState({
        error: 'Please use a valid email address.'
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
    this.setState({ ...this.state, [label]: evt.target.value, error: null });
  };

  render() {
    const { email, error: localErr, password, passwordCheck } = this.state;
    const { error: authErr, loading, user } = this.props;

    // redirect if already signed in
    let authRedirect = null;
    if (user) {
      authRedirect = <Redirect to='/dashboard' />;
    }

    let signup = <Spinner />;

    if (!loading) {
      signup = (
        <form onSubmit={this.onSignup}>
          {authRedirect}

          <TitleCard title='Sign Up'>
            {localErr ? <p className={classes.Error}>{localErr}</p> : null}
            {authErr ? <p className={classes.Error}>{authErr}</p> : null}

            <Input
              editing
              label='Email'
              long
              type='email'
              value={email}
              onChange={this.onInputChange('email')}
            />

            <Input
              editing
              label='Password'
              long
              type='password'
              value={password}
              onChange={this.onInputChange('password')}
            />

            <Input
              editing
              label='Re-type Password'
              long
              type='password'
              value={passwordCheck}
              onChange={this.onInputChange('passwordCheck')}
            />

            <Button btnType='Raised' color='Primary'>
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
