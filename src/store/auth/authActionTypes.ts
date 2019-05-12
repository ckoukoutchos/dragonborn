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

export type AuthActionTypes =
  | AuthLoading
  | LoginAction
  | LoginFailAction
  | LoginSuccessAction
  | LogoutAction
  | LogoutSuccessAction
  | SignupAction
  | SignupFailAction
  | SignupSuccessAction;
