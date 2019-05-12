import {
  AuthActionTypes,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
  AUTH_LOADING
} from './authActionTypes';
import { User } from '../../models/User';

/*
 * Auth action creators
 */
export const authLoading = (): AuthActionTypes => ({
  type: AUTH_LOADING
});

export const login = (email: string, password: string): AuthActionTypes => ({
  type: LOGIN,
  email,
  password
});

export const loginFail = (): AuthActionTypes => ({
  type: LOGIN_FAIL
});

export const loginSuccess = (user: User): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
  user
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT
});

export const logoutSuccess = (user: null): AuthActionTypes => ({
  type: LOGOUT_SUCCESS,
  user
});

export const signup = (): AuthActionTypes => ({
  type: SIGNUP
});

export const signupFail = (): AuthActionTypes => ({
  type: SIGNUP_FAIL
});

export const signupSuccess = (): AuthActionTypes => ({
  type: SIGNUP_SUCCESS
});
