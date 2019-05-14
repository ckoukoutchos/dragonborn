import { User } from "../../models/User";

/*
 * Auth action constants
 */
export const AUTH_LOADING = 'AUTH_LOADING';

export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const UPDATE_DISPLAY_NAME = 'UPDATE_DISPLAY_NAME';
export const UPDATE_DISPLAY_NAME_FAIL = 'UPDATE_DISPLAY_NAME_FAILURE';
export const UPDATE_DISPLAY_NAME_SUCCESS = 'UPDATE_DISPLAY_NAME_SUCCESS';

export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_EMAIL_FAIL = 'UPDATE_EMAIL_FAIL';
export const UPDATE_EMAIL_SUCCESS = 'UPDATE_EMAIL_SUCCESS';

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_PASSWORD_FAIL = 'UPDATE_PASSWORD_FAIL';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';

/*
 * Auth action type interfaces
 */
export interface AuthState {
  error: any;
  loading: boolean;
  user: User | null;
}

interface AuthLoading {
  type: typeof AUTH_LOADING;
}

interface LoginAction {
  type: typeof LOGIN;
  email: string;
  password: string;
}

interface LoginFailAction {
  type: typeof LOGIN_FAIL;
  error: string;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  user: User;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
  user: null;
}

interface SignupAction {
  type: typeof SIGNUP;
  email: string;
  password: string;
}

interface SignupFailAction {
  type: typeof SIGNUP_FAIL;
  error: string;
}

interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
}

interface UpdateDisplayName {
  type: typeof UPDATE_DISPLAY_NAME;
  displayName: string;
}

interface UpdateDisplayNameFail {
  type: typeof UPDATE_DISPLAY_NAME_FAIL;
  error: any;
}

interface UpdateDisplayNameSuccess {
  type: typeof UPDATE_DISPLAY_NAME_SUCCESS;
}

interface UpdateEmail {
  type: typeof UPDATE_EMAIL;
  email: string;
}

interface UpdateEmailFail {
  type: typeof UPDATE_EMAIL_FAIL;
  error: any;
}

interface UpdateEmailSuccess {
  type: typeof UPDATE_EMAIL_SUCCESS;
}

interface UpdatePassword {
  type: typeof UPDATE_PASSWORD;
  password: string;
}

interface UpdatePasswordFail {
  type: typeof UPDATE_PASSWORD_FAIL;
  error: any;
}

interface UpdatePasswordSuccess {
  type: typeof UPDATE_PASSWORD_SUCCESS;
}

export type AuthActionTypes =
  | AuthLoading
  | LoginAction
  | LoginFailAction
  | LoginSuccessAction
  | LogoutAction
  | LogoutSuccessAction
  | SignupAction
  | SignupFailAction
  | SignupSuccessAction
  | UpdateDisplayName
  | UpdateDisplayNameFail
  | UpdateDisplayNameSuccess
  | UpdateEmail
  | UpdateEmailFail
  | UpdateEmailSuccess
  | UpdatePassword
  | UpdatePasswordFail
  | UpdatePasswordSuccess;
