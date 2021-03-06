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
  AUTH_LOADING,
  UPDATE_DISPLAY_NAME,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_DISPLAY_NAME_FAIL,
  UPDATE_DISPLAY_NAME_SUCCESS,
  UPDATE_EMAIL_FAIL,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  REAUTH
} from './authActionTypes';
import { User } from '../../models/User';

/*
 * Auth action creators
 */
export const authLoading = (): AuthActionTypes => ({
  type: AUTH_LOADING
});

export const deleteUser = (): AuthActionTypes => ({
  type: DELETE_USER
});

export const deleteUserFail = (error: any): AuthActionTypes => ({
  type: DELETE_USER_FAIL,
  error
});

export const deleteUserSuccess = (): AuthActionTypes => ({
  type: DELETE_USER_SUCCESS
});

export const login = (email: string, password: string): AuthActionTypes => ({
  type: LOGIN,
  email,
  password
});

export const loginFail = (error: string): AuthActionTypes => ({
  type: LOGIN_FAIL,
  error
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

export const reauth = (): AuthActionTypes => ({
  type: REAUTH
});

export const signup = (email: string, password: string): AuthActionTypes => ({
  type: SIGNUP,
  email,
  password
});

export const signupFail = (error: string): AuthActionTypes => ({
  type: SIGNUP_FAIL,
  error
});

export const signupSuccess = (): AuthActionTypes => ({
  type: SIGNUP_SUCCESS
});

export const updateDisplayName = (displayName: string): AuthActionTypes => ({
  type: UPDATE_DISPLAY_NAME,
  displayName
});

export const updateDisplayNameFail = (error: any): AuthActionTypes => ({
  type: UPDATE_DISPLAY_NAME_FAIL,
  error
});

export const updateDisplayNameSuccess = (displayName: string): AuthActionTypes => ({
  type: UPDATE_DISPLAY_NAME_SUCCESS,
  displayName
});

export const updateEmail = (email: string): AuthActionTypes => ({
  type: UPDATE_EMAIL,
  email
});

export const updateEmailFail = (error: any): AuthActionTypes => ({
  type: UPDATE_EMAIL_FAIL,
  error
});

export const updateEmailSuccess = (email: string): AuthActionTypes => ({
  type: UPDATE_EMAIL_SUCCESS,
  email
});

export const updatePassword = (password: string): AuthActionTypes => ({
  type: UPDATE_PASSWORD,
  password
});

export const updatePasswordFail = (error: any): AuthActionTypes => ({
  type: UPDATE_PASSWORD_FAIL,
  error
});

export const updatePasswordSuccess = (): AuthActionTypes => ({
  type: UPDATE_PASSWORD_SUCCESS
});