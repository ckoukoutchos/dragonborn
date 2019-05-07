import {
  AuthActionTypes,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS
} from './authActionTypes';

/*
 * Auth action creators
 */
export const login = (email: string, password: string): AuthActionTypes => ({
  type: LOGIN,
  email,
  password
});

export const loginFail = (): AuthActionTypes => ({
  type: LOGIN_FAIL
});

export const loginSuccess = (user: any): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
  user
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT
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
