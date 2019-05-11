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
  AUTH_UPDATE
} from './authActionTypes';

/*
 * Auth action creators
 */
export const authUpdate = (user: any) => ({
  type: AUTH_UPDATE,
  user
});

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

export const logoutSuccess = (): AuthActionTypes => ({
  type: LOGOUT_SUCCESS
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
