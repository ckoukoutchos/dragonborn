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
export const login = (): AuthActionTypes => ({
  type: LOGIN
});

export const loginFail = (): AuthActionTypes => ({
  type: LOGIN_FAIL
});

export const loginSuccess = (): AuthActionTypes => ({
  type: LOGIN_SUCCESS
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
