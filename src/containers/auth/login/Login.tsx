// library
import React, { Component, FormEvent, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Dispatch } from 'redux';

// store
import { AppState } from '../../../store/rootReducer';
import { AuthActionTypes } from '../../../store/auth/authActionTypes';
import { login } from '../../../store/auth/authActionCreators';

// components
import Button from '../../../components/button/Button';
import classes from './Login.module.css';
import Input from '../../../components/input/Input';
import Spinner from '../../../components/spinner/Spinner';
import TitleCard from '../../../components/card/title-card/TitleCard';

//shared
import { User } from '../../../models/User';

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

/*
 * Login container widget
 */
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
      authRedirect = <Redirect to='/dashboard' />;
    }

    let login = <Spinner />;

    if (!loading) {
      login = (
        <TitleCard title='Login'>
          {authRedirect}

          <form onSubmit={this.login}>
            {error ? <p className={classes.Error}>{error}</p> : null}

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

            <Button btnType='Raised' color='Primary'>
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
