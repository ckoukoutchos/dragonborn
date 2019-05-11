/*
 * Auth action constants
 */
export const AUTH_UPDATE = 'AUTH_UPDATE';

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
  user: null | any;
}

interface AuthUpdate {
  type: typeof AUTH_UPDATE;
  user: any;
}

interface LoginAction {
  type: typeof LOGIN;
  email: string;
  password: string;
}

interface LoginFailAction {
  type: typeof LOGIN_FAIL;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  user: any;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

interface SignupAction {
  type: typeof SIGNUP;
}

interface SignupFailAction {
  type: typeof SIGNUP_FAIL;
}

interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
}

export type AuthActionTypes =
  | AuthUpdate
  | LoginAction
  | LoginFailAction
  | LoginSuccessAction
  | LogoutAction
  | LogoutSuccessAction
  | SignupAction
  | SignupFailAction
  | SignupSuccessAction;
